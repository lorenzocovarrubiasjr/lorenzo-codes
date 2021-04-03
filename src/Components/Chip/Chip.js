import React from "react";
import "./Chip.css";

import Tooltip from "@material-ui/core/Tooltip";

function Chip({ color, title, disabled }) {
  if (disabled) {
    return (
      <Tooltip title={`${title} theme coming soon!`}>
        <div
          className="disabled"
          style={{
            background: color,
          }}
        >
          {title}
        </div>
      </Tooltip>
    );
  } else {
    return (
      <div
        className="chip"
        style={{
          background: color,
        }}
      >
        {title}
      </div>
    );
  }
}

export default Chip;
