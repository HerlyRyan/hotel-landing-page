import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import RoomsSection from "./components/RoomsSection";

function App() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans">
      {/* 1. Navbar Component */}
      <Navbar />

      {/* 2. Hero Component */}
      <Hero />

      {/* 3. Rooms & Suites (Top Rated Curated Stays) Component */}
      <RoomsSection />

      {/* Bagian selanjutnya dapat ditambahkan di sini */}
    </div>
  );
}

export default App;
