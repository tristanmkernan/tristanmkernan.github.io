import React from "react";
import ProjectListItem from "./ProjectListItem";

const projects = [
  {
    img: "",
    name: "",
    date: "",
    copy: "",
    tags: [
      {
        name: "",
        color: ""
      }
    ]
  }
];

const ProjectList: React.FC = () => {
  return (
    <section className="section" id="projects-section">
      <h2 className="title">Projects</h2>

      {projects.map(project => (
        <ProjectListItem project={project} />
      ))}
    </section>
  );
};

export default ProjectList;
