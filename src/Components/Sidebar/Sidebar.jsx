import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Sidebar = ({
  newChatIcon = images.newChatIcon,
  discordIcon = images.discordIcon,
  faqIcon = images.faqIcon,
  logoutIcon = images.logoutIcon,
  newChatButtonText = texts.newChatButtonText,
  todaySectionHeader = texts.todaySectionHeader,
  recentChatTitle = texts.recentChatTitle,
  previous7DaysHeader = texts.previous7DaysHeader,
  gtaViceCityChatTitle = texts.gtaViceCityChatTitle,
  GTA = texts.GTA,
  nokia3310ChatTitle = texts.nokia3310ChatTitle,
  discordButtonText = texts.discordButtonText,
  faqsButtonText = texts.faqsButtonText,
  logOutButtonText = texts.logOutButtonText,
}) => {
  return (
    <div className="wrapper-div-3701139 ">
      <div className=" sidebar-container">
        {/* New chat1 */}
        <section className=" new-chat-button">
          <div className=" new-chat-icon">
            <img
              src={`${newChatIcon}`}
              className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-3701141 "
              alt="New chat icon"
            />{" "}
          </div>
          <div className=" new-chat-text">
            <span className="new-chat-text-0 ">{newChatButtonText}</span>
          </div>
        </section>
        {/* TOday1 */}
        <section className=" today-section">
          <div className=" today-header">
            <span className="today-header-0 ">{todaySectionHeader}</span>
          </div>
          <div className=" today-chat-item">
            <div className=" today-chat-content">
              <div className=" today-chat-title">
                <span className="today-chat-title-0 ">{recentChatTitle}</span>
              </div>
              <div className=" options-menu">
                <div className=" options-dot-1 pos-abs"></div>
                <div className=" options-dot-2 pos-abs"></div>
                <div className=" options-dot-3 pos-abs"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Previous1 */}
        <section className=" previous-chats-section">
          <div className=" previous-chats-header">
            <span className="previous-chats-header-0 ">{previous7DaysHeader}</span>
          </div>
          <div className=" previous-chats-list">
            <div className=" previous-chat-item-1">
              <div className=" previous-chat-title-1">
                <span className="previous-chat-title-1-0 ">{gtaViceCityChatTitle}</span>
              </div>
            </div>
            <div className=" previous-chat-item-2">
              <div className=" previous-chat-title-2">
                <span className="previous-chat-title-2-0 ">{nokia3310ChatTitle}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Frame 431 */}
        <section className=" sidebar-footer">
          <div className=" discord-button">
            <div className=" discord-icon">
              <img
                src={`${discordIcon}`}
                className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-3701161 "
                alt="Discord icon"
              />{" "}
            </div>
            <div className=" discord-text">
              <span className="discord-text-0 ">{discordButtonText}</span>
            </div>
          </div>
          <div className=" faq-button">
            <div className=" faq-icon">
              <img
                src={`${faqIcon}`}
                className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-3701164 "
                alt="FAQ icon"
              />{" "}
            </div>
            <div className=" faq-text">
              <span className="faq-text-0 ">{faqsButtonText}</span>
            </div>
          </div>
          <div className=" logout-button">
            <div className=" logout-icon">
              <img
                src={`${logoutIcon}`}
                className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-3701167 "
                alt="Logout icon"
              />{" "}
            </div>
            <div className=" logout-text">
              <span className="logout-text-0 ">{logOutButtonText}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Sidebar;
