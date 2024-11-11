import React from "react";
import logo from "../assets/logo.png";

function Education() {
    return (
        <section id="education" className="education max-w-7xl mx-auto bg-gray-800 bg-opacity-60 rounded-lg p-10">
            {/* Title centered at the top */}
            <h2 className="font-sans font-bold text-5xl py-3 text-white text-center">Education</h2>
            <hr></hr>
            
            <div className="flex flex-col md:flex-row justify-between items-start mt-4">
                {/* Left 50% for School name and Logo */}
                <div className="flex flex-col items-center md:items-center md:w-1/2 md:pr-8"> {/* Add right padding */}
                    <p className="font-sans text-blue-600 text-5xl text-center md:text-left">University of Florida</p>
                    <img src={logo} alt="UF Logo" className="w-100 h-80 object-cover shadow-lg mt-2" />
                </div>

                {/* Right 50% for Degree and Details */}
                <div className="flex flex-col items-center md:items-start md:w-1/2 md:pl-8 mt-4 md:mt-0"> {/* Add left padding */}
                    <p className="font-sans text-white text-3xl mb-2 font-bold">B.S. in Computer Engineering</p>
                    <p className="font-sans text-white text-3xl mb-2 font-bold">Minor - Mathematics</p>
                    <p className="font-sans text-white text-3xl mb-2 font-bold">Graduation - Spring 2027</p>
                    
                    <p className="font-sans text-white text-3xl mb-1 font-bold">Relevent Coursework: </p>
                    <ul className="list-disc list-inside text-xl text-white ml-4">
                        <li className="mb-1" style={{ textIndent: '0.2rem' }}>Data Structures and Algorithms</li>
                        <li className="mb-1" style={{ textIndent: '-4.1rem' }}>Computer Organization</li>
                        <li className="mb-1" style={{ textIndent: '-0.5rem' }}>Computational Linear Algebra</li>
                    </ul>

                </div>
            </div>
        </section>
    );
}

export default Education;
