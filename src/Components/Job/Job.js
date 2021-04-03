import React from "react";
import "./Job.css";

function Job({ job }) {
  return (
    <div className="job">
      <small className="position">{job.position}</small>
      <div className="company">
        {" "}
        <h3>{job.company}</h3>
        <h6>{job.dates}</h6>
      </div>
      <p className="description">
        <b>{job.description.split("<bold>")[0]}</b>
        {job.description.split("<bold>")[1]}
      </p>
    </div>
  );
}

export default Job;
