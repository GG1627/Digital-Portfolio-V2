import React from "react";
import profileImage from "../assets/profile.jpg";

function About() {
    return (
        <section id="about" className="about max-w-7xl mx-auto bg-gray-800 bg-opacity-60 rounded-lg p-10">
            {/* Title centered at the top */}
            <h2 className="font-sans font-bold text-5xl py-3 text-white text-center">About Me</h2>
            <hr></hr>
            
            <div className="flex flex-col md:flex-row justify-between items-start mt-4">
                {/* Left 50% for School name and Logo */}
                <div className="flex flex-col items-center md:items-center md:w-1/2 md:pr-8 text-white text-2xl" > {/* Add right padding */}
                    <p className="mb-8">Hi, I'm Gael - Welcome to my portfolio website! This website was built using Node.js, React, and Tailwind CSS.</p>
                    <p className="mb-8">I'm currently studying Computer Engineering at the University of Florida, actively seeking opportunities to expand my professional horizons.</p>
                    <p className="mb-8">I love playing soccer and pickleball, listening to music, and eating tacos. ^-^</p>
                </div>

                {/* Right 50% for Degree and Details */}
                <div className="flex flex-col items-center md:items-center md:w-1/2 md:pl-8 mt-4 md:mt-0"> {/* Add left padding */}
                    <img src={profileImage} alt="Profile" className="w-[500px] h-[500px] object-cover rounded-full shadow-lg mt-2" /> 
                </div>
            </div>
        </section>
    );
}

export default About;
