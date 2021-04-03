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
          <a
            download="lorenzo-covarrubias-resume"
            href="/lorenzo-covarrubias-resume-2021.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Banner;
