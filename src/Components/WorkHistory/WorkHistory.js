import React from "react";
import "./WorkHistory.css";

import Job from "../Job/Job";
import { workHistory } from "../../data";

function WorkHistory() {
  return (
    <div className="work-history">
      <h1>Work History</h1>
      {workHistory.map((job, i) => (
        <Job job={job} key={i} />
      ))}
    </div>
  );
}

export default WorkHistory;
