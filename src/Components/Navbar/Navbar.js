import React from "react";
import "./Navbar.css";

import Chip from "../Chip/Chip";

function Navbar() {
  return (
    <div className="nav-bar">
      <img
        src="https://avatars2.githubusercontent.com/u/25677557?v=4"
        alt="Lorenzo's avatar"
      />

      <div className="style-chips">
        <Chip title="Spotify" color="#1DB954" />
        <Chip title="Netflix" color="#E50914" disabled />
        <Chip title="Amazon" color="#FF9900" disabled />
      </div>
    </div>
  );
}

export default Navbar;
