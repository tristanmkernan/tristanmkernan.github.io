import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faPaperPlane,
  faRss
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const About: React.FC = () => {
  return (
    <section className="section">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-12">
          <div className="tile">
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">About Me</p>
                <p className="subtitle">
                  Hi 👋 I'm a full stack software developer, currently working
                  on logistics and web development.
                </p>

                <p className="subtitle">
                  My goal in life is to excel at full stack software
                  engineering.
                </p>

                <div className="buttons">
                  <a
                    className="button is-light"
                    href="https://github.com/tristanmkernan"
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                    <span>Github</span>
                  </a>
                  <a
                    className="button is-light"
                    href="https://blog.tmk.name/"
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faRss} />
                    </span>
                    <span>Blog</span>
                  </a>
                  <a
                    className="button is-light"
                    href="https://docs.google.com/document/d/1xofiEW8XlEwzFF6NDnW_sasi5O1_qHYPP6iarXqRrLk/edit?usp=sharing"
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faIdCard} />
                    </span>
                    <span>Resume</span>
                  </a>
                  <a
                    className="button is-light"
                    href="mailto:tristanmkernan@gmail.com"
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </span>
                    <span>Email</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
