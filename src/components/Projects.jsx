import React from "react";
import Manim from "../assets/Manim.png";
import MineSweeper from "../assets/MineSweeper.png";
import Photoshop from "../assets/Photoshop.png";



function Projects() {
    return (
        <section id="projects" className="projects max-w-7xl mx-auto bg-gray-800 bg-opacity-60 rounded-lg">
            {/* Title centered at the top */}
            <h2 className="font-sans font-bold text-5xl py-3 text-white text-center">Projects</h2>
            <hr></hr>
            
            <div className="flex flex-row md:flex-row justify-between items-start mt-4">
                <div className="w-full md:w-1/3">
                    <h1 className="text-white mb-2 text-2xl">Manim Data Structures Visualizer</h1>
                    <img src={Manim} alt="Manim DS" className="w-[500px] h-[300px] object-contain mx-auto p-8 transform transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="w-full md:w-1/3">
                    <h1 className="text-white text-2xl">Minesweepr</h1>
                    <img src={MineSweeper} alt="Minesweeper" className="w-[500px] h-[300px] object-contain mx-auto p-8 transform transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="w-full md:w-1/3">
                    <h1 className="text-white text-2xl">Mini Photoshop Clone</h1>
                    <img src={Photoshop} alt="Photoshop Clone" className="w-[500px] h-[300px] object-contain mx-auto p-8 transform transition-transform duration-300 hover:scale-105" />
                </div>
            </div>
        </section>
    );
}

export default Projects