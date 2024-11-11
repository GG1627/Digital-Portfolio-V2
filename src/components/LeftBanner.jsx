import React from "react";


function LeftBanner() {
    return (
        <section id="leftBanner" className="fixed left-0 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col max-w-1xl max-h-7xl">
                <div className="h-[25%] w-20 bg-blue-400 text-center shadow-lg">
                    <h1>LinkedIn</h1>                    
                    <h1>(logo)</h1>
                </div>
                <div className="h-[25%] w-20 bg-white text-center shadow-lg">
                    <h1>GitHub</h1>
                    <h1>(logo)</h1>
                </div>
                <div className="h-[25%] w-20 bg-orange-300 text-center shadow-lg">
                    <h1>Resume</h1>
                    <h1>(logo)</h1>
                </div>
            </div>
        </section>
    );
}

export default LeftBanner;
