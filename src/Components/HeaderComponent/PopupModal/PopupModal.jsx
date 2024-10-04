import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const PopupModal = ({
  mainheadingtext = texts.mainheadingtext,
  subheadingtext = texts.subheadingtext,
  ctabuttontext = texts.ctabuttontext,
  closeModal,
}) => {
  return (
    <div className="wrapper-div-20322706 ">
      <div className=" explore-card-wrapper">
        <div className=" explore-card-title pos-abs">
          <span className="explore-card-title-0 ">{mainheadingtext}</span>
        </div>
        <div className=" explore-card-description pos-abs">
          <span className="explore-card-description-0 ">{subheadingtext}</span>
        </div>
        {/* Frame 211 */}
        <section
          className=" close-button-container pos-abs"
          onClick={closeModal}
        >
          <div className=" close-button-icon-wrapper">
            <div className=" close-button-icon pos-abs">
              <div className="nodeBg-20322702 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>
        {/* Frame 111 */}
        <section
          className=" cta-button-container pos-abs"
          onClick={() => (window.location.href = "https://bit.ly/3TU6hiy")}
        >
          <div className=" cta-button-text">
            <span className="cta-button-text-0 ">{ctabuttontext}</span>
          </div>
        </section>
      </div>
    </div>
  );
};
export default PopupModal;
