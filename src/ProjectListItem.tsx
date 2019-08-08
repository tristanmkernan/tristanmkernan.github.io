import React from "react";
import { Project, Tag } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledParagraph = styled.p`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`;

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
    <div className="timeline-item is-primary">
      <div className="timeline-marker is-primary is-image is-32x32">
        <img src={project.image} />
      </div>
      <div className="timeline-content">
        <p className="heading">{project.date}</p>
        <StyledParagraph>
          <strong>{project.name}</strong>
          <br />
          {project.copy}
        </StyledParagraph>
        <div className="tags">
          {project.tags.map(tag => (
            <TagItem key={tag.name} tag={tag} />
          ))}
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            {project.links.map(link => (
              <a className="level-item" key={link.url} href={link.url}>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={link.icon} />
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ProjectListItem;
