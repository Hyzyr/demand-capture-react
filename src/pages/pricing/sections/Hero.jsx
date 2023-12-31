import React from "react";
import { AutoContainer } from "layouts/containers";

const Hero = ({ showContactPopup }) => {
  const bgURL = process.env.PUBLIC_URL + "/images/pricing/hero-bg.png";
  const shapeUrl = process.env.PUBLIC_URL + "/images/pricing/hero-shape.png";
  return (
    <section className="hero hero--sm">
      <AutoContainer>
        <div className="hero__inner">
          <div className="hero__inner-content">
            <h2>Pricing & PLANS</h2>
            <p>
              DemandCapture provides versatile packages tailored to meet your
              appointment-setting needs. Reach out to our Sales Team to initiate
              and launch your pilot program.
            </p>
          </div>
          <div className="hero__inner-row">
            <div className="hero__item">
              <div className="hero__item-content">
                <div className="hero__item-group">
                  <h5 className="_lg">Starter</h5>
                  <p>
                    <span> Engineered To</span>
                    <br />
                    <span>Accelerate Your Pipeline</span>
                  </p>
                  <button
                    className="buttonPrimary buttonPrimary--default"
                    onClick={showContactPopup}
                  >
                    <span>Contact Sales</span>
                  </button>
                </div>
                <div className="hero__item-box">
                  <h6 className="_sm">Included:</h6>
                  <ul className="list list--gray">
                    <li className="list__item">KnowledgeCore Deployed</li>
                    <li className="list__item">
                      3+ Enterprise Sales Representatives
                    </li>
                    <li className="list__item">Performance Dashboard</li>
                    <li className="list__item">Dedicated Campaign Manager</li>
                  </ul>
                </div>
                <div className="hero__item-shape">
                  <img src={shapeUrl} alt="shape" />
                </div>
              </div>
              <div className="hero__item-bg"></div>
            </div>
            <div className="hero__item">
              <div className="hero__item-content">
                <div className="hero__item-group">
                  <h5 className="_lg">Professional</h5>
                  <p>
                    <span> Crafted To Fulfill </span>
                    <br />
                    <span>All Your Requirements</span>
                  </p>
                  <button
                    className="buttonPrimary buttonPrimary--default"
                    onClick={showContactPopup}
                  >
                    <span>Contact Sales</span>
                  </button>
                </div>
                <div className="hero__item-box">
                  <h6 className="_sm">Included:</h6>
                  <ul className="list list--gray">
                    <li className="list__item">KnowledgeCore Deployed</li>
                    <li className="list__item">
                      5+ Enterprise Sales Representatives
                    </li>
                    <li className="list__item">Performance Dashboard</li>
                    <li className="list__item">Dedicated Campaign Manager</li>
                    <li className="list__item">CRM Integration</li>
                  </ul>
                </div>
                <div className="hero__item-shape">
                  <img src={shapeUrl} alt="shape" />
                </div>
              </div>
              <div className="hero__item-bg _gradient"></div>
            </div>
            <div className="hero__item">
              <div className="hero__item-content">
                <div className="hero__item-group">
                  <h5 className="_lg">Enterprise</h5>
                  <p>
                    <span> Designed With </span>
                    <br />
                    <span>Scalability In Mind</span>
                  </p>
                  <button
                    className="buttonPrimary buttonPrimary--default"
                    onClick={showContactPopup}
                  >
                    <span>Contact Sales</span>
                  </button>
                </div>
                <div className="hero__item-box">
                  <h6 className="_sm">Included:</h6>
                  <ul className="list list--gray">
                    <li className="list__item">KnowledgeCore Deployed</li>
                    <li className="list__item">
                      10+ Enterprise Sales Representatives
                    </li>
                    <li className="list__item">Performance Dashboard</li>
                    <li className="list__item">Dedicated Campaign Manager</li>
                    <li className="list__item">CRM Integration</li>
                  </ul>
                </div>
                <div className="hero__item-shape">
                  <img src={shapeUrl} alt="shape" />
                </div>
              </div>
              <div className="hero__item-bg"></div>
            </div>
          </div>
        </div>
      </AutoContainer>
      <div className="bg">
        <div className="bg__image">
          <img src={bgURL} alt="bg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
