import React from "react";
import Header0 from "./components/header0/Header0";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skill from "./components/skills/Skill";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <>
      <Header0 />
      <Header />
      <Nav />
      <About />
      <div className="spacer layer1"></div>
      <Skill />
      <div className="spacer layer2"></div>
      <Experience />
      <Portfolio />
      <Contact />
      <div className="spacer layer3"></div>
      <Footer />

    </>
  );
};

export default App;
