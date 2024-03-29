import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Header, Nav } from "layouts";

import usePathChange from "hooks/usePathChange";
import ContactSalesPopup from "forms/ContactSalesPopup";
import { SpinnerPageLoader } from "components/Spinner";
import Home from "pages/home";

function App() {
  // --- >>>>: lazy import pagess ------
  // const Home = React.lazy(() => import("pages/home"));
  const OurProcess = React.lazy(() => import("pages/process/OurProcess"));
  const About = React.lazy(() => import("pages/about"));
  const Case = React.lazy(() => import("pages/case"));
  const Pricing = React.lazy(() => import("pages/pricing"));
  const Policy = React.lazy(() => import("pages/policy/Policy"));
  const Terms = React.lazy(() => import("pages/policy/Terms"));
  const Contact = React.lazy(() => import("pages/contact"));
  // --- <<<<: lazy import pagess ------

  const [headerStyle, setHeaderStyle] = useState(false);
  const [menu, setMenu] = useState(false);
  const [contactPopup, setContactPopup] = useState(false);

  const location = usePathChange({
    onLocationChange: () => setMenu(false),
  });
  const isHome = location.pathname === "/";

  const showContactPopup = () => {
    setContactPopup(true);
  };
  const popupClose = () => setContactPopup(false);

  useEffect(() => {
    if (contactPopup && menu) setMenu(false);
  }, [contactPopup]);

  return (
    <Suspense fallback={<SpinnerPageLoader />}>
      <Header active={menu} setActive={setMenu} headerStyle={headerStyle}>
        <Nav
          active={menu}
          isHome={isHome}
          showContactPopup={showContactPopup}
        />
      </Header>
      <Routes>
        <Route
          path="/"
          element={<Home showContactPopup={showContactPopup} />}
        />
        <Route
          path="/our-process"
          element={<OurProcess setHeaderStyle={setHeaderStyle} />}
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/case-study" element={<Case />} />
        <Route
          path="/pricing"
          element={<Pricing showContactPopup={showContactPopup} />}
        />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer showContactPopup={showContactPopup} />
      {contactPopup && <ContactSalesPopup close={popupClose} />}
    </Suspense>
  );
}

export default App;
