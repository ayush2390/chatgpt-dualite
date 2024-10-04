import React from "react";
import "./css/style.css";

import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const RightBanner = ({
  toggleswitchicon = images.toggleswitchicon,
  chatgptversioninfo = texts.chatgptversioninfo,
  copyrightinfo = texts.copyrightinfo,
}) => {
  return (
    <div className="wrapper-div-3701107 ">
      <div className=" command-prompt-header">
        {/* Frame 101 */}
        <section className=" text-container">
          <div className=" version-info-container">
            <div className=" version-text">
              <span className="version-text-0 ">{chatgptversioninfo}</span>
            </div>
            <div className=" copyright-text">
              <span className="copyright-text-0 ">{copyrightinfo}</span>
            </div>
          </div>
        </section>
        {/* <div className=" toggle-switch">
          <img
            src={`${toggleswitchicon}`}
            className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-3701112 "
            alt="ToggleSwitchIcon"
          />{" "}
        </div> */}
      </div>
    </div>
  );
};
export default RightBanner;
