import React, { useEffect } from "react";
import "./styling.css";

import runAnimations from "./scripts";
import { useNavigate } from "react-router-dom";
import image from "../../../assets/icon.png"
const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    runAnimations();
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        navigate("/chat"); // Redirect to /chat when Enter is pressed
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="parent-div ">
      <div className=" welcome-screen-container pos-abs">
        {/* Frame 1181 */}
        <section className=" content-wrapper-homepage pos-abs">
          <div className=" logo-circle pos-abs" >
            <img
              // src="https://s3-alpha-sig.figma.com/img/bc9b/5406/52b6845261e4911faf3fb8c94a859194?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i~04d~cvQ7qM4AofRt0R-WeCZ~HfG~6UhBwsWw40qV9Fsvq28w59SjblZv7kH-wD0UO7ZGdKpGh3ZEAtpY5Sy52OwWBfQVFS7ERiGcLYFD7zoJNr2waJe80~KdCy7grkVnzMdhltKLpSiZ6c1DvR85k6NNiVB88cCsVT7ZYlE8Z0iw1a2D4AB88IGD6hVxiSz1xTC68Mn~nJc5NZb4EDY~TxGwl3tac-8YM31YeJclwahW5WBupKGGzJMYT3MDRQidiYO1AJncLjn-THylTwMT2BMJtcvtHBY2cx~isrz9lsdZ6wRELcIst5~s7c2sTI3VCYXSwh1ejBcBn3lqVeWQ__"
              src={image}
              className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-370113 rounded-[100%]"
              alt="Circular logo or avatar"
            />{" "}
          </div>
          <div className=" welcome-heading pos-abs">
            <span className="welcome-heading-0 ">{`Welcome to GPT 2000`}</span>
          </div>
          <div className=" instruction-text pos-abs">
            <span className="instruction-text-0 ">{`Press “ENTER” to continue`}</span>
          </div>
          <div className=" version-text-homepage version-home-homepage pos-abs">
            <span className="version-text-0-homepage ">
              GPT 2000{" "}
              <a href="https://bit.ly/3TU6hiy" target="_blank">
                [Built with Dualite]
              </a>
            </span>
          </div>
          <div className=" copyright-text-homepage pos-abs">
            <span className="copyright-text-0-homepage ">{}</span>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HomePage;
