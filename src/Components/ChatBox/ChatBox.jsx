import React, { useState, useEffect } from "react";
import "./css/style.css";
import InputBar from "../InputBar/InputBar"; // Import the InputBar component
import texts from "./data/texts";
import images from "./data/images";
import { marked } from "marked";
import ReactMarkdown from "react-markdown";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useMessages } from "../../MessageContext";
const ChatBox = ({
  aiAssistantAvatar = images.aiAssistantAvatar,
  userProfileIcon = images.userProfileIcon,
  aiAssistantAvatar1 = images.aiAssistantAvatar1,
  aiGreetingMessage = texts.aiGreetingMessage,
}) => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: aiGreetingMessage, avatar: aiAssistantAvatar },
  ]);
  const { newChatTriggered } = useMessages();

  useEffect(() => {
    if (newChatTriggered) {
      console.log("print"); // Log to console when new chat is triggered
      const aiResponseObject = {
        sender: "ai",
        text: "How can I help you today?",
        avatar: aiAssistantAvatar1,
      };
      setMessages([aiResponseObject]);
    }
  }, [newChatTriggered]);

  const apiKey = import.meta.env.VITE_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const handleSendMessage = async (userMessage) => {
    // Add user message to the chat
    const userMessageObject = {
      sender: "user",
      text: userMessage,
      avatar: userProfileIcon,
    };
    setMessages((prevMessages) => [
      ...prevMessages,
      userMessageObject,
      // aiResponseObject,
    ]);

    try {
      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const markdownText = await response.text();
      const plainText = marked
        .parse(markdownText, { headerIds: false, mangle: false })
        .replace(/(<([^>]+)>)/gi, ""); // Parse and remove HTML tags

      const aiResponseObject = {
        sender: "ai",
        text: plainText,
        avatar: aiAssistantAvatar1,
      };
      setMessages((prevMessages) => [
        ...prevMessages,
        // userMessageObject,
        aiResponseObject,
      ]);
    } catch (error) {
      console.error("Failed to get response:", error);
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-conversation-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-container ${
              message.sender === "user" ? "user-message" : "ai-response"
            }`}
          >
            <div className="avatar">
              <img src={message.avatar} alt={`${message.sender} avatar`} />
            </div>
            <div className="message-text">
              {/* <span>{message.text}</span> */}
              {/* <span dangerouslySetInnerHTML={{ __html: message.text }} /> */}
              {message.sender === "ai" ? (
                // Render the AI response using ReactMarkdown
                <ReactMarkdown>{message.text}</ReactMarkdown>
              ) : (
                <span>{message.text}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <InputBar onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatBox;
