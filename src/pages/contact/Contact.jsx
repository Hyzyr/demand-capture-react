import React, { useState } from "react";
import Help from "./sections/Help";
import PopUp from "./sections/PopUp";

import "./styles.scss";
const Contact = () => {
  const [visiable, SetVisible] = useState(false);
  return (
    <>
      <Help />
      {visiable && <PopUp />}
    </>
  );
};

export default Contact;
