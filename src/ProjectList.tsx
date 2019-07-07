import React from "react";
import ProjectListItem from "./ProjectListItem";

import { PROJECTS } from "./data";

const ProjectList: React.FC = () => {
  return (
    <section className="section" id="projects-section">
      <h2 className="title">Projects</h2>

      <div className="timeline is-centered">
        <header className="timeline-header">
          <span className="tag is-medium is-primary">Present</span>
        </header>
        {PROJECTS.map(project => (
          <ProjectListItem key={project.name} project={project} />
        ))}
        <header className="timeline-header">
          <span className="tag is-medium is-primary">The Beginning</span>
        </header>
      </div>
    </section>
  );
};

export default ProjectList;
