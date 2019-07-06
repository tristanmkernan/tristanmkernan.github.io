import React from "react";
import ProjectListItem from "./ProjectListItem";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import OTBPImg from "./assets/img/otbp.png";

const projects = [
  {
    image: OTBPImg,
    name: "Off the Beaten Path",
    date: "Spring 2019",
    copy:
      "Personalized geocaching. Rewrite of previous project by same name with more features and hosting.",
    tags: [
      {
        name: "Flask",
        color: "is-info"
      },
      {
        name: "Swagger",
        color: "is-info"
      },
      {
        name: "SQLite",
        color: "is-info"
      },
      {
        name: "Angular.io",
        color: "is-info"
      },
      {
        name: "Material",
        color: "is-info"
      },
      {
        name: "Leaflet",
        color: "is-info"
      },
      {
        name: "Docker",
        color: "is-info"
      }
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/off-the-beaten-path"
      },
      {
        icon: faExternalLinkAlt,
        url: "https://otbp.tmk.name/"
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
