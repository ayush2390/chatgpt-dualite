import React, { useState } from "react";
import "./css/style.css";
import "./css/PopupModal.css";

import texts from "./data/texts";
import images from "./data/images";
import PopupModal from "./PopupModal/PopupModal";
import image from "../../../assets/icon1.jpg"

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const HeaderComponent = ({
  chatgptLogo = images.chatgptLogo,
  settingsGearIcon = images.settingsGearIcon,
  chatgptBrandName = texts.chatgptBrandName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="wrapper-div-370175 ">
      <div className=" header-container">
        {/* Frame 421 */}
        <section className=" logo-container">
          <div className=" logo-image">
            <img
              // src={`${chatgptLogo}`}
              src={image}
              className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-370177 "
              alt="ChatGPT logo"
            />{" "}
          </div>
          <div className=" logo-text">
            <span className="logo-text-0 ">{chatgptBrandName} </span>
          </div>
        </section>
        {/* Frame 11 */}
        <section className=" settings-container">
          <div className=" settings-icon" onClick={toggleModal}>
            <img
               src={image}
              className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-370180 "
              alt="Settings gear icon"
            />{" "}
          </div>
        </section>
      </div>
      {isOpen && (
        // <Draggable>
        <div className="modal">
          <PopupModal closeModal={toggleModal} />
        </div>
        // </Draggable>
      )}
    </div>
  );
};
export default HeaderComponent;
