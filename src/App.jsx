import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import Sidebar from "./Components/Sidebar/Sidebar";
import RightBanner from "./Components/RightBanner/RightBanner";
import ChatBox from "./Components/ChatBox/ChatBox";
import InputBar from "./Components/InputBar/InputBar";
import "./App.css"

// The App.jsx is a wrapper only, just you can copy the component folder & Name it accordingly

const App = () => {
  return (
    <>
      <HeaderComponent />
      <div className="app-container">
        <div className="left-container">
        <Sidebar />
        </div>
        <div className="right-container">
          <RightBanner />
          <ChatBox />
          {/* <InputBar /> */}
        </div>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);

