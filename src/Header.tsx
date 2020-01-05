import React, { useState } from "react";

import HeaderImg from "./assets/img/header.png";

const projects = [
  {
    url: "https://bin.tmk.name/",
    name: "FileBin"
  },
  {
    url: "https://otbp.tmk.name/",
    name: "OtBP"
  },
  {
    url: "https://aita.tmk.name/",
    name: "AITA Stats"
  },
  {
    url: "https://lzr.tmk.name/",
    name: "Linkanizer"
  },
  {
    url: "https://loopifi.com/",
    name: "Loopifi"
  }
];

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={HeaderImg} />
        </a>

        <a
          role="button"
          className={`navbar-burger burger ${navbarOpen && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setNavbarOpen(prev => !prev)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${navbarOpen && "is-active"}`}
      >
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Quick Links</a>

            <div className="navbar-dropdown">
              {projects.map(project => (
                <a
                  key={project.name}
                  className="navbar-item"
                  href={project.url}
                >
                  {project.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
