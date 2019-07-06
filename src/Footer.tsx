import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Made by <a href="https://github.com/tristanmkernan">Tristan</a> with{" "}
          <a href="https://html5boilerplate.com/">html5boilerplate</a>,{" "}
          <a href="https://bulma.io/">bulma</a> and{" "}
          <i className="fas fa-coffee" />. The source code is licensed{" "}
          <a href="https://opensource.org/licenses/GPL-3.0">MIT</a>. The website
          content is licensed{" "}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
