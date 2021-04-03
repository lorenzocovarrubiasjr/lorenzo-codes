import React from "react";
import "./Banner.css";

function Banner({ backgroundImg }) {
  return (
    <>
      <div
        className="banner"
        style={{ backgroundImage: "url('" + backgroundImg + "')" }}
      >
        <div className="banner-content">
          <h1>Hello World</h1>
          <h3>Lorenzo Covarrubias</h3>
        </div>
      </div>
    </>
  );
}

export default Banner;
