import React, { useState } from "react";
import "./Project.css";

function Project({ project }) {
  const [bcgImg, setBcgImg] = useState(project.imageUrl);

  return (
    <div
      className="project"
      onMouseEnter={() => setBcgImg(project.videoUrl)}
      onMouseLeave={() => setBcgImg(project.imageUrl)}
    >
      <img src={bcgImg} alt={project.title} />
      <div className="project-banner">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default Project;
