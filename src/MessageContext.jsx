import React, { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export const useMessages = () => {
  return useContext(MessageContext);
};

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [newChatTriggered, setNewChatTriggered] = useState(false);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const triggerNewChat = () => {
    setNewChatTriggered(true); // Action to perform when the new chat button is clicked
  };

  return (
    <MessageContext.Provider
      value={{ messages, addMessage, newChatTriggered, triggerNewChat }}
    >
      {children}
    </MessageContext.Provider>
  );
};
