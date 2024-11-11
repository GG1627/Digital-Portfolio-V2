import React from 'react';

function Banner() {
    return (
        <nav className="bg-black bg-opacity-50 text-white flex justify-around p-6">
            <a href="#about" className="hover:underline transform hover:scale-105 transition-transform duration-300">About Me</a>
            <a href="#education" className="hover:underline transform hover:scale-105 transition-transform duration-300">Education</a>
            <a href="#skills" className="hover:underline transform hover:scale-105 transition-transform duration-300">Skills</a>
            <a href="#projects" className="hover:underline transform hover:scale-105 transition-transform duration-300">Projects</a>
            <a href="#contact" className="hover:underline transform hover:scale-105 transition-transform duration-300">Contact</a>
        </nav>

    );
}

export default Banner;
