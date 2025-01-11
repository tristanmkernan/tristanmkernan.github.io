import React from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import "bulma-extensions/dist/css/bulma-extensions.min.css";

import Footer from "./Footer";
import About from "./About";
import ProjectList from "./ProjectList";

const App: React.FC = () => {
  return (
    <div className="container">
      <About />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default App;
