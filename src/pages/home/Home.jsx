import React from 'react'
import Header from "../../components/header/Header";
import Header0 from "../../components/header0/Header0";
import Nav from "../../components/nav/Nav";
import About from "../../components/about/About";
import Skill from "../../components/skills/Skill";
import Qualification from "../../components/qualification/Qualification";
import Experience from "../../components/experience/Experience";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";


const Home = () => {
    return (
        <>
            <Header0 />
            <Header />
            <Nav />
            <About />
            <Skill />
            <div className="spacer layer2"></div>
            <Qualification />
            <Experience />
            <Portfolio />
            <Contact />
            <div className="spacer layer3"></div>
        </>
    )
}

export default Home