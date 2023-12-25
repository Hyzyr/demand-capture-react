import React from "react";
import { AutoContainer } from "layouts/containers";

const logosURL = process.env.PUBLIC_URL + "/images/logos/customers/";

const SubHero = () => {
  return (
    <section className="customers">
      <AutoContainer>
        <div className="customers__inner">
          <div className="customers__inner-row">
            <SubHeroItem
              href="/"
              logoLink={logosURL + "amazon.png"}
              title="amazon"
            />
            <SubHeroItem
              href="/"
              logoLink={logosURL + "walmart.png"}
              title="walmart"
            />
            <SubHeroItem
              href="/"
              logoLink={logosURL + "microsoft.png"}
              title="microsoft"
            />
            <SubHeroItem
              href="/"
              logoLink={logosURL + "morgan-stanley.png"}
              title="morgan-stanley"
            />
            <SubHeroItem href="/" logoLink={logosURL + "ibm.png"} title="ibm" />
          </div>
          <h6>Our Customers Have Closed 43% Of The Fortune 100</h6>
        </div>
      </AutoContainer>
    </section>
  );
};

const SubHeroItem = ({ href, logoLink, title }) => {
  return (
    <a className="customers-item" href={href} title={title}>
      <img src={logoLink} alt={title} />
    </a>
  );
};

export default SubHero;
