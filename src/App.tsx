import React from "react";
import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import ProjectList from "./ProjectList";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default App;
