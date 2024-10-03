import React, { useEffect, useState } from "react";
import "./css/style.css";

import texts from "./data/texts";
import images from "./data/images";
import { useMessages } from "../../MessageContext";
import { marked } from "marked";

import { GoogleGenerativeAI } from "@google/generative-ai";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Sidebar = ({
  newChatIcon = images.newChatIcon,
  discordIcon = images.discordIcon,
  faqIcon = images.faqIcon,
  logoutIcon = images.logoutIcon,
  newChatButtonText = texts.newChatButtonText,

  discordButtonText = texts.discordButtonText,
  faqsButtonText = texts.faqsButtonText,
  logOutButtonText = texts.logOutButtonText,
}) => {
  const { messages } = useMessages();
  const [query, setQuery] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  useEffect(() => {
    const getSummary = async () => {
      if (!messages.length || messages.length > 1) return;
      try {
        const result = await model.generateContent(
          `Summarise this query of user in 3-4 words: ${
            messages[messages.length - 1]
          }`
        );
        const response = await result.response;
        const markdownText = await response.text();
        const plainText = marked
          .parse(markdownText, { headerIds: false, mangle: false })
          .replace(/(<([^>]+)>)/gi, ""); // Parse and remove HTML tags
        setQuery(plainText);
      } catch (error) {
        console.error("Failed to get response:", error);
      }
    };
    getSummary();
  }, [messages]);
  const chatTitlesArray = [query];
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

        {/* Previous1 */}
        <section className="previous-chats-section">
          <div className="previous-chats-list">
            {chatTitlesArray.map((title, index) => (
              <div key={index} className="previous-chat-item-1">
                <div className="previous-chat-title-1">
                  <span className="previous-chat-title-1-0">{title}</span>
                </div>
              </div>
            ))}
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
