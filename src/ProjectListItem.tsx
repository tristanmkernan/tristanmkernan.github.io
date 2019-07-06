import React from "react";
import { Project, Tag } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TagProps = {
  tag: Tag;
};

const TagItem: React.FC<TagProps> = ({ tag }: TagProps) => {
  return <span className={`tag ${tag.color}`}>{tag.name}</span>;
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
            <div className="tags">
              {project.tags.map(tag => (
                <TagItem tag={tag} />
              ))}
            </div>
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            {project.links.map(link => (
              <a className="level-item" href={link.url}>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={link.icon} />
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </article>
  );
};

export default ProjectListItem;
