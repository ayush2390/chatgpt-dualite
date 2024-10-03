import React from "react";
import "./css/style.css";

import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const HeaderComponent = ({
  chatgptLogo = images.chatgptLogo,
  settingsGearIcon = images.settingsGearIcon,
  chatgptBrandName = texts.chatgptBrandName,
}) => {
  return (
    <div className="wrapper-div-370175 ">
      <div className=" header-container">
        {/* Frame 421 */}
        <section className=" logo-container">
          <div className=" logo-image">
            <img
              src={`${chatgptLogo}`}
              className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-370177 "
              alt="ChatGPT logo"
            />{" "}
          </div>
          <div className=" logo-text">
            <span className="logo-text-0 ">{chatgptBrandName}</span>
          </div>
        </section>
        {/* Frame 11 */}
        <section className=" settings-container">
          <div className=" settings-icon">
            <img
              src={`${settingsGearIcon}`}
              className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-370180 "
              alt="Settings gear icon"
            />{" "}
          </div>
        </section>
      </div>
    </div>
  );
};
export default HeaderComponent;
