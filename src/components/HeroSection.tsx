import React, { useState } from "react";

export const Hero: React.FC = () => {
  // State untuk filter pencarian (Where, What, When)
  const [where] = useState("All Locations");
  const [what] = useState("All Categories");
  const [when] = useState("Anytime");

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop')`,
      }}
    >
      {/* TOP BAR / FILTER BAR (Terinspirasi dari referensi desain atas) */}
      <div className="max-w-5xl mx-auto w-full hidden md:flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 text-white text-xs tracking-wider">
        <div className="flex items-center space-x-8 divide-x divide-white/20">
          {/* Where Filter */}
          <div className="px-4 flex items-center space-x-2 cursor-pointer hover:opacity-80">
            <span className="text-gray-300">Where</span>
            <span className="font-medium">{where}</span>
            <svg
              className="w-3 h-3 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* What Filter */}
          <div className="px-4 flex items-center space-x-2 cursor-pointer hover:opacity-80">
            <span className="text-gray-300">What</span>
            <span className="font-medium">{what}</span>
            <svg
              className="w-3 h-3 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* When Filter */}
          <div className="px-4 flex items-center space-x-2 cursor-pointer hover:opacity-80">
            <span className="text-gray-300">When</span>
            <span className="font-medium">{when}</span>
            <svg
              className="w-3 h-3 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Search Button */}
          <div className="pl-6">
            <button className="p-2 bg-white text-slate-900 rounded-full hover:bg-gray-200 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="max-w-7xl mx-auto w-full my-auto text-white grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
        <div>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-none mb-6">
            Where Dreams <br />
            Take Residence
          </h1>
        </div>
        <div className="md:pb-2">
          <p className="text-sm md:text-base font-light text-gray-200 max-w-md leading-relaxed tracking-wide">
            Step into a world where luxury isn't merely experienced—it's
            whispered through every moment of your stay. Whispered Luxury
            curates extraordinary escapes for those who understand that true
            opulence speaks softly[cite: 1].
          </p>
        </div>
      </div>

      {/* BOTTOM SUB-FOOTER HERO */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-white/70 text-xs tracking-widest uppercase">
        <span>Luxury Resort & Residences</span>
        <a
          href="#rooms"
          className="hover:text-white flex items-center space-x-2 transition-colors"
        >
          <span>Scroll Down</span>
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
