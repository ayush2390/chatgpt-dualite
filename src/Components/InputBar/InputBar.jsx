import React, { useState } from "react";
import "./css/style.css";
import images from "./data/images";
import texts from "./data/texts";
import { useMessages } from "../../MessageContext";
const InputBar = ({
  addAttachmentIcon = images.addAttachmentIcon,
  messagePlaceholder = texts.messagePlaceholder,
  sendButtonLabel = texts.sendButtonLabel,
  onSendMessage, // callback to send the message
}) => {
  const [userInput, setUserInput] = useState("");
  const [clicked, setClicked] = useState(false);
  const { addMessage } = useMessages();

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      onSendMessage(userInput); // Trigger the callback passed from ChatBox
      addMessage(userInput);
      setUserInput(""); // Clear the input field
    }
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 150);
  };

  return (
    <div className="wrapper-div-3701176">
      <div className="chat-input-wrapper">
        <section className="chat-input-container">
          <div className="message-input-container">
            {/* <div className="add-icon">
              <img
                src={`${addAttachmentIcon}`}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-3701179"
                alt="Add attachment icon"
              />
            </div> */}
            <div className="text-input-wrapper">
              <div className=" text-input-placeholder">
                <input
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder={messagePlaceholder}
                  className="text-input-placeholder-0 "
                />
              </div>
            </div>
          </div>
          <div
            className={`send-button-container ${clicked ? "clicked" : ""}`}
            onClick={handleSendMessage}
          >
            <div className="send-button-text">
              <span className="send-button-text-0">{sendButtonLabel}</span>
            </div>
            <div className="send-arrow-icon-container">
              <div className="send-arrow-top pos-abs">
                <div className="nodeBg-3701185 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat"></div>
              </div>
              <div className="send-arrow-bottom pos-abs">
                <div className="nodeBg-3701186 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InputBar;
