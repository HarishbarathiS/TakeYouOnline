"use client";

import React from "react";

const GithubHeatmap = () => {
    const username = "HarishbarathiS";

    return (
        <div className="w-full flex flex-col items-center">
            {/* Expanded container from 4xl to 5xl for a larger visual footprint */}
            <div className="w-full max-w-5xl glass-dark p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/10 overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h3 className="text-2xl font-heading font-bold mb-2">Code Contributions</h3>
                        <p className="text-gray-400 text-sm font-light">My activity across GitHub repositories.</p>
                    </div>
                </div>

                <div className="flex justify-center pb-4">
                    <div className="relative group/heatmap w-full flex justify-center">
                        {/* Subtle glow effect on hover */}
                        <div className="absolute -inset-4 bg-green-500/5 blur-3xl rounded-full opacity-0 group-hover/heatmap:opacity-100 transition-opacity duration-700"></div>

                        <img
                            src={`https://ghchart.rshah.org/39d353/${username}`}
                            alt="GitHub Contributions"
                            className="relative z-10 w-full h-auto transition-all duration-500 transform group-hover/heatmap:scale-[1.01]"
                            style={{
                                // Invert colors to get dark background and then rotate hue to restore green
                                filter: 'invert(1) hue-rotate(180deg) brightness(1.1) contrast(1.1)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GithubHeatmap;

