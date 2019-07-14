import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faPaperPlane,
  faChevronRight,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import BannerImage from "./assets/img/14-sanders-rally.jpg";

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
                  Hi! I'm a software developer and student, currently studying
                  mathematics and computer science at Rutgers University. I've
                  been programming for over 5 years, from low level C to large
                  web applications.
                </p>

                <p className="subtitle">
                  My goal in life is to work as a software engineer at an
                  organization that is improving the world on a grand scale.
                </p>

                <p className="subtitle">
                  My hobbies include reading old science fiction novels,
                  programming free and open source software, bodybuilding, and{" "}
                  <s>trying to game on linux</s>.
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

                <figure className="image is-16by9">
                  <img alt="my banner image" src={BannerImage} />
                </figure>
              </article>
            </div>
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-success">
                <p className="title">Projects</p>
                <p className="subtitle">Tour the projects I've worked on.</p>
                <p className="subtitle">
                  <Link
                    to="projects-list"
                    smooth={false}
                    className="button is-light"
                  >
                    <span>Explore</span>
                    <span className="icon">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </Link>
                </p>
              </article>
              <article className="tile is-child notification is-primary">
                <p className="title">Blog</p>
                <p className="subtitle">Explore technology with me.</p>
                <p className="subtitle">
                  <a className="button is-light" href="https://blog.tmk.name/">
                    <span>Visit</span>
                    <span className="icon">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </a>
                </p>
              </article>
              <article className="tile is-child notification is-warning">
                <p className="title">Photography</p>
                <p className="subtitle">Check out my photography adventures.</p>
                <p className="subtitle">
                  <a className="button is-light">
                    <span>Coming Soon</span>
                    <span className="icon">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </a>
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
