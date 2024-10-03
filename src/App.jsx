import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatWindow from "./ChatWindow";
import HomePage from "./Components/HomePage/HomePage";

// The App.jsx is a wrapper only, just you can copy the component folder & Name it accordingly

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatWindow />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);
