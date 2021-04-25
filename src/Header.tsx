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
      </div>
    </nav>
  );
};

export default Header;
