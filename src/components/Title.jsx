import React from "react";

function Title() {
    return (
        <header className="flex flex-col items-center justify-center h-screen space-y-4">
            <h1 className="font-sans text-8xl font-bold mt-[-100px] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" style={{ color: 'rgb(105, 212, 255)' }}>
                Gael Garcia
            </h1>
            
            {/* "See More" Button */}
            <a href="#about" className="mt-6">
                <button className="text-white bg-gray-500 bg-opacity-10 px-4 py-2 rounded-lg shadow-md hover:bg-blue-400 transition-all">
                    See More
                </button>
            </a>
        </header>
    );
}

export default Title;
