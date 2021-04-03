import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="left-column">Lorenzo Codes</div>
      <div className="center-column">
        <dl>
          <dt>Basic Code Skills</dt>
          <dd>HTML5</dd>
          <dd>CSS3</dd>
          <dd>Javascript</dd>
          <dd>Python</dd>
        </dl>
        <dl>
          <dt>Frameworks</dt>
          <dd>Angular11</dd>
          <dd>ReactJS</dd>
          <dd>Django</dd>
        </dl>
        <dl>
          <dt>Advanced Skillset</dt>
          <dd>Typescript</dd>
          <dd>RxJs</dd>
          <dd>NgRx</dd>
          <dd>Cypress E2E Testing</dd>
        </dl>
      </div>
      <div className="right-column">Socials</div>
    </div>
  );
}

export default Footer;
