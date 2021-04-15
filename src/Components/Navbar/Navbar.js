import React from "react";
import "./Navbar.css";

import Chip from "../Chip/Chip";

function Navbar() {
  const title = "<Lorenzo Codes>";
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <img
          src="https://avatars2.githubusercontent.com/u/25677557?v=4"
          alt="Lorenzo's avatar"
        />
        <h4>{title}</h4>
      </div>
      <div className="nav-right">
        <div className="style-chips">
          <Chip title="Spotify" color="#1DB954" />
          <Chip title="Netflix" color="#E50914" disabled />
          <Chip title="Amazon" color="#FF9900" disabled />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
