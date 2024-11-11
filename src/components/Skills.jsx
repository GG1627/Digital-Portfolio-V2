import React from "react";
import CPlusPlus from "../assets/CPlusPlus.svg";
import Python from "../assets/Python.svg";
import MatLab from "../assets/MatLab.png";
import ReactLogo from "../assets/React.svg";
import TailWind from "../assets/TailWind.svg";
import ARM from "../assets/ARM.png";


function Skills() {
    return (
        <section id="skills" className="skills max-w-7xl mx-auto bg-gray-800 bg-opacity-60 rounded-lg p-10">
            {/* Title centered at the top */}
            <h2 className="font-sans font-bold text-5xl py-3 text-white text-center">Skills</h2>
            <hr></hr>
            
            <div className="flex flex-col justify-between mt-4">
                {/* Top Half */}
                <div className="flex flex-row justify-between mb-4">
                    <div className="w-[33%] bg-gray-700 text-white text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-400 transition-all">
                        <img src={CPlusPlus} alt="C++ Logo" className="w-[300px] h-[300px] object-contain mx-auto p-8" />
                        <h1 className="font-bold text-2xl">C++</h1>
                    </div>
                    <div className="w-[33%] bg-gray-700 text-white text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-400 transition-all">
                        <img src={Python} alt="Python Logo" className="w-[300px] h-[300px] object-contain mx-auto p-8" />
                        <h1 className="font-bold text-2xl">Python</h1>
                    </div>

                    <div className="w-[33%] bg-gray-700 text-white text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-400 transition-all">
                        <img src={MatLab} alt="MatLab Logo" className="w-[300px] h-[300px] object-contain mx-auto p-8" />
                        <h1 className="font-bold text-2xl">MatLab</h1>
                    </div>
                </div>

                {/* Bottom Half */}
                <div className="flex flex-row justify-between mb-4">
                    <div className="w-[33%] bg-gray-700 text-white text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-400 transition-all">
                        <img src={ReactLogo} alt="React Logo" className="w-[300px] h-[300px] object-contain mx-auto p-8" />
                        <h1 className="font-bold text-2xl">React</h1>
                    </div>
                    <div className="w-[33%] bg-gray-700 text-white text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-400 transition-all">
                        <img src={TailWind} alt="TailWind Logo" className="w-[300px] h-[300px] object-contain mx-auto p-8" />
                        <h1 className="font-bold text-2xl">TailWindCSS</h1>
                    </div>
                    <div className="w-[33%] bg-gray-700 text-white text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-400 transition-all">
                        <img src={ARM} alt="ARM Assembly Logo" className="w-[300px] h-[300px] object-contain mx-auto p-8" />
                        <h1 className="font-bold text-2xl">ARM Assembly</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills