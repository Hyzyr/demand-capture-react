import React, { useState } from "react";
import { AutoContainer } from "layouts/containers";
import "./styles.scss";

const Faq = () => {
  const faqItems = [
    {
      title: "What Makes Knowledge Special?",
      text: "Knowledge harnesses the power of seven advanced deep learning models, including XGBoost for lead prioritization and a novel Tinder-inspired vector algorithm, introducing the first-of-its-kind user compatibility matrix designed to cater specifically to the needs of sales professionals.",
    },
    {
      title: "Does DemandCapture Offer A Pilot?",
      text: "Yes - please contact us to learn about our pilot program. DemandCapture operates on a performance-based model, where you only pay for meetings with top-tier prospects that surpass your predefined criteria. We are committed to collaborating with you to establish these criteria in a manner that aligns with your objectives.",
    },
    {
      title: "How Does DemandCapture Ensure A Positive Client Experience?",
      text: "We center our strategy on three key elements: crafting a precise ideal customer profile, providing comprehensive sales training (which we encourage your involvement in), and implementing robust system processes. Our approach involves a thorough understanding of your ideal customer profile, aligning it with premium data. Additionally, we conduct in-depth sales training sessions. Finally, our extensive automation and quality control systems play a crucial role in achieving our desired outcomes.",
    },
  ];
  return (
    <section className="faq">
      <AutoContainer>
        <div className="faq__inner">
          <div className="box box--secondary">
            <h6 className="_sm text--line">FAQ</h6>
            <h3>
              <span>Frequently</span>
              <br />
              <span> Asked</span>
              <br />
              <span> Questions</span>
            </h3>
            <p>
              <span className="noBreak">Learn More About</span> <br />
              <span className="noBreak">DemandCapture</span>
            </p>
          </div>
          <div className="faq__inner-column">
            {faqItems.map((item, i) => (
              <FaqItem key={i} {...item} activeDefault={i === 0} />
            ))}
          </div>
        </div>
      </AutoContainer>
    </section>
  );
};

const FaqItem = ({ title, text, activeDefault = false }) => {
  const [active, setActive] = useState(activeDefault);
  const toggle = () => setActive(!active);

  return (
    <div className={`faq__item ${!active ? "_collapse" : ""}`}>
      <div className="faq__item-group">
        <h6 className="_lg">{title}</h6>
        <button className="faq__item-button" onClick={toggle}></button>
      </div>
      <div className="faq__item-content">
        <p>{text}</p>
      </div>
    </div>
  );
};
export default Faq;
