import React from "react";
import { Project, Tag } from "./types";

type TagProps = {
  tag: Tag;
};

const TagItem: React.FC<TagProps> = (props: TagProps) => {
  return <span className="tag is-info">Flask</span>;
};

type Props = {
  project: Project;
};

const ProjectListItem: React.FC<Props> = ({ project }: Props) => {
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img alt="project image" src={project.image} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{project.name}</strong>
            <small>{project.date}</small>
            <br />
            {project.copy}
            <br />
            {project.tags.map(tag => (
              <TagItem tag={tag} />
            ))}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a
              className="level-item"
              href="https://github.com/off-the-beaten-path"
            >
              <span className="icon is-small">
                <i className="fab fa-github"></i>
              </span>
            </a>
            <a className="level-item" href="https://otbp.tmk.name/">
              <span className="icon is-small">
                <i className="fas fa-external-link-alt"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  );
};

export default ProjectListItem;
