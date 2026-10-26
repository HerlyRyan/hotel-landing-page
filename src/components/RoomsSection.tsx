import React, { useState } from "react";
import { roomsData, type Room } from "../data/roomsData";

export const RoomsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  return (
    <section id="rooms" className="py-24 px-6 md:px-12 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER & CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
              Exclusive Selection
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 tracking-tight">
              Top Rated Curated Stays
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center justify-between md:justify-end space-x-4">
            <div className="text-sm text-slate-600 font-light hidden sm:block">
              Select from top rated properties for your luxury stays[cite: 1]
            </div>

            {/* Sort / Filter Dropdown Mock */}
            <div className="flex items-center space-x-2">
              <div className="relative inline-flex items-center border border-slate-300 px-4 py-2 text-xs uppercase tracking-wider bg-white text-slate-800 cursor-pointer hover:border-slate-400 transition-colors">
                <span>Sort by</span>
                <svg
                  className="w-3 h-3 ml-2"
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

              {/* Slider Arrows Mock */}
              <div className="flex items-center space-x-1">
                <button
                  className="p-2 border border-slate-300 bg-white text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
                  aria-label="Previous"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="p-2 border border-slate-300 bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                  aria-label="Next"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ROOMS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roomsData.map((room: Room) => (
            <div
              key={room.id}
              className="group bg-white border border-slate-100 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Content Container */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-lg text-slate-900 font-medium">
                      {room.name}
                    </h3>
                    <div className="text-right">
                      <span className="text-base font-semibold text-slate-900">
                        ${room.price}
                      </span>
                      <span className="text-[10px] uppercase text-slate-500 tracking-wider">
                        /night
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 font-light leading-relaxed mb-6">
                    {room.description}
                  </p>
                </div>

                {/* Footer specs (Location, Beds, Baths) */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 uppercase tracking-wider">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{room.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <span>{room.beds} Beds</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                        />
                      </svg>
                      <span>{room.baths} Bath</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
