import React, { useState } from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  const [showInput, setShowInput] = useState(0);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part" onClick={() => setShowInput(1)}>
            A place to get{" "}
          </span>
          {showInput ? (
            <input
              id="search-box"
              value={props.term}
              onChange={(e) => props.setTerm(e.target.value)}
              placeholder="What is it that you truly desire?"
            />
          ) : null}

          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
