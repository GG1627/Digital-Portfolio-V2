import React from "react";
import Banner from "./Banner";
import Title from "./Title";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import LeftBanner from "./LeftBanner";

function MainContainer() {
    return (
        <>
            <Banner />
            <LeftBanner />
            <div className="flex flex-col items-center justify-center h-screen">
                <Title />
            </div>
            <div className="mt-20">
                <About />
            </div>
            <div className="mt-40">
                <Education />
            </div>
            <div className="mt-40">
                <Skills />
            </div>
            <div className="mt-40">
                <Projects />
            </div>
            <div className="mt-40">
                <Contact />
            </div>
        </>
    );
}

export default MainContainer;