import React from "react";
import Media from "react-media";

import ProjectListItem from "./ProjectListItem";

import { PROJECTS } from "./data";

const ProjectList: React.FC = () => {
  return (
      <section className="section" id="projects-section">
        <h2 className="title">Projects</h2>

        <Media query="(min-width: 1200px)">
          {matches => (
            <div className={`timeline ${matches && "is-centered"}`}>
              <header className="timeline-header">
                <span className="tag is-medium is-primary">Present</span>
              </header>
              {PROJECTS.map(project => (
                <ProjectListItem key={project.name} project={project} />
              ))}
              <header className="timeline-header">
                <span className="tag is-medium is-primary">287 BC</span>
              </header>
            </div>
          )}
        </Media>
      </section>
  );
};

export default ProjectList;
