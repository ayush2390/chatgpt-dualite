import React, { useEffect } from "react";
import "./styling.css";

import runAnimations from "./scripts";
import { useNavigate } from "react-router-dom";
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
          <div className=" logo-circle pos-abs">
            <img
              src="https://s3-alpha-sig.figma.com/img/6ddc/1152/2f834ce84fc9ffc0a5b1d55abaf69a74?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eG6Ptz17vaC0J7dbLBfc1wvLa7hfsAIvZEZiL7PF2qqGYfhZPkmt6kYVR8LT4RZWWr7Hw62o6xDmR7qgk-PwkUJx51HAp~VsHFF7GQgf5GrQeK9CtPDF4eUdcZq~5LFWsrnoRv1LLhKDZBox-bNMrt1c9CkVNBzGV9ilFKXL1eeg~DulnjXuJr0EUOpW4qz7FA8kiCoDOoCt6nA5v4DwdraW2~~L-PY9fsPicarc3BpEZI6Fiv83poTU95xc7HcH-MsRfbIpdo4wnATZJuNRyZMWP9vzLKcVvM2pPemx3z9Kk976gp9jzaGZkdiqhy8eIPT9CWw0GNqtrqPEnyWITA__"
              className="pos-abs  image-div bg-no-repeat fill-parent bg-cover nodeBg-370113 "
              alt="Circular logo or avatar"
            />{" "}
          </div>
          <div className=" welcome-heading pos-abs">
            <span className="welcome-heading-0 ">{`Welcome to ChatGPT`}</span>
          </div>
          <div className=" instruction-text pos-abs">
            <span className="instruction-text-0 ">{`Press “ENTER” to continue`}</span>
          </div>
          <div className=" version-text-homepage version-home-homepage pos-abs">
            <span className="version-text-0-homepage ">
              ChatGPT{" "}
              <a href="https://bit.ly/3TU6hiy" target="_blank">
                [Built with Dualite]
              </a>
            </span>
          </div>
          <div className=" copyright-text-homepage pos-abs">
            <span className="copyright-text-0-homepage ">{`© Dualite Technology Pvt Ltd`}</span>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HomePage;
