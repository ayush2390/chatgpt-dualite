import React, { useState } from "react";
import "./css/style.css";
import InputBar from "../InputBar/InputBar"; // Import the InputBar component
import texts from "./data/texts";
import images from "./data/images";
import { getChatResponse } from "../../openaiService";
const ChatBox = ({
  aiAssistantAvatar = images.aiAssistantAvatar,
  userProfileIcon = images.userProfileIcon,
  aiAssistantAvatar1 = images.aiAssistantAvatar1,
  aiGreetingMessage = texts.aiGreetingMessage,
}) => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: aiGreetingMessage, avatar: aiAssistantAvatar },
  ]);

  const handleSendMessage = async(userMessage) => {
    // Add user message to the chat
    const userMessageObject = {
      sender: "user",
      text: userMessage,
      avatar: userProfileIcon,
    };
    try {
      const aiResponse = await getChatResponse(userMessage);
      const aiResponseObject = {
        sender: "ai",
        text: aiResponse,
        avatar: aiAssistantAvatar1,
      };
      console.log(aiResponseObject)
      setMessages((prevMessages) => [
        ...prevMessages,
        userMessageObject,
        aiResponseObject,
      ]);
  } catch (error) {
      console.error('Failed to get response:', error);
  }
    // Simulate AI response
    

    // Update the messages state
    
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
              <span>{message.text}</span>
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
