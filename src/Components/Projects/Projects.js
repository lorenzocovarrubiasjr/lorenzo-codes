import React from "react";
import "./Projects.css";
import { projects } from "../../data";

import Project from "../Project/Project";

function Projects() {
  return (
    <>
      <div className="projects">
        <div className="projects-info">
          <small>Projects Info</small>
          <h1>Jump Into My Code</h1>
          <h4>
            Apart from a full time role as husband, father & employee, my
            priority is to keep learning.
          </h4>
          <a>Hire Me Now!</a>
        </div>
        <div className="projects-list">
          {projects.map((project, i) => (
            <Project project={project} key={i} />
          ))}
        </div>
      </div>
      {/* <div className="projects-gradient"></div> */}
    </>
  );
}

export default Projects;
