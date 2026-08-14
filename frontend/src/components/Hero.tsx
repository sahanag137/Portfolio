import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SketchArrow, SketchStar } from './SketchDoodles';
import sahanaPhoto from '../assets/sahana1.jpeg';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top Hand-written badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F4F1EA] border border-[#1C1C1E] rounded-full text-sm font-hand text-lg text-[#1C1C1E]">
              <SketchStar className="w-4 h-4 text-[#1C1C1E]" />
              <span>Welcome to my developer notebook</span>
            </div>

            {/* Main Heading */}
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans text-[#1C1C1E] tracking-tight leading-tight">
                Hi, I'm <span className="relative inline-block text-[#1C1C1E] -[#5A5A5E] decoration-2">Sahana.</span>
              </h1>
            </div>

            {/* Subheading Role */}
            <p className="text-xl sm:text-2xl font-medium font-sans text-[#5A5A5E] tracking-normal">
              {PORTFOLIO_DATA.personal.role}
            </p>

            {/* Pitch Supporting Text */}
            <p className="text-lg text-[#2C2C2E] font-sans leading-relaxed max-w-xl">
              "{PORTFOLIO_DATA.personal.tagline}"
            </p>

            {/* Current Focus Pills */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase text-[#8E8E93] tracking-widest mb-2">Primary focus:</div>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.personal.currentFocus.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-mono bg-[#FFFFFF] border border-[#1C1C1E] rounded shadow-sketch-subtle"
                  >
                    #{item}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons & Annotation */}
            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 relative">
              
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, '#projects')}
                className="sketch-button px-6 py-3 bg-[#1C1C1E] text-[#FFFFFF] text-base font-semibold font-sans hover:bg-[#2A2A2E] transition-colors"
              >
                View My Work
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="sketch-button px-6 py-3 bg-[#FFFFFF] text-[#1C1C1E] text-base font-semibold font-sans hover:bg-[#F4F1EA]"
              >
                Let's Connect
              </a>

              {/* Handwritten "↓ start here" Arrow Annotation */}
              <div className="hidden sm:flex items-center space-x-1 pl-2 animate-sketch-float">
                <SketchArrow direction="right" className="w-8 h-6 text-[#1C1C1E]" />
                <span className="font-hand text-xl font-bold text-[#1C1C1E] rotate-3">
                  ↓ start here
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Photo inside sketch notebook frame */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            
            <div className="relative w-full max-w-lg p-2 bg-[#FFFFFF] border-2 border-[#1C1C1E] rounded-xl shadow-sketch-lg">
              {/* Handwritten Header label */}
              <div className="flex justify-between items-center px-4 py-2 border-b-2 border-dashed border-[#1C1C1E] bg-[#FAF8F5]">
                <span className="font-hand text-xl font-bold text-[#1C1C1E]">
                  hello
                </span>
                <span className="font-mono text-xs text-[#8E8E93]">data & code</span>
              </div>

              {/* Photo centered with doodles around it */}
              <div className="p-6 flex flex-col items-center justify-center relative min-h-[320px]">

                {/* Corner doodles */}
                {/* Top-left: py */}
                <div className="absolute top-4 left-4 flex flex-col items-center">
                 <div className="w-10 h-10 rounded-full border-2 border-[#1C1C1E] flex items-center justify-center bg-[#FAF8F5]">
                    <span className="font-mono text-xs font-bold text-[#1C1C1E]">py</span>
                  </div>
                  <span className="font-hand text-xs text-[#5A5A5E] mt-1">python</span>
                </div>

                {/* Top-right: SQL DB */}
                <div className="absolute top-3 right-4 flex flex-col items-center">
                  <svg width="34" height="34" viewBox="0 0 50 55" fill="none">
                    <ellipse cx="25" cy="10" rx="20" ry="7" stroke="#1C1C1E" strokeWidth="2" fill="#FAF8F5"/>
                    <path d="M5 10 V42 C5 46 14 50 25 50 C36 50 45 46 45 42 V10" stroke="#1C1C1E" strokeWidth="2" fill="none"/>
                    <path d="M5 25 C5 29 14 33 25 33 C36 33 45 29 45 25" stroke="#1C1C1E" strokeWidth="1.5" strokeDasharray="3 2" fill="none"/>
                  </svg>
                  <span className="font-hand text-xs text-[#5A5A5E] mt-1">SQL DB</span>
                </div>

                {/* Bottom-left: { } */}
                <div className="absolute bottom-8 left-4 flex flex-col items-center">
                  <span className="font-mono text-2xl font-bold text-[#1C1C1E] leading-none">&#123; &#125;</span>
                  <span className="font-hand text-xs text-[#5A5A5E] mt-1">code & data</span>
                </div>

                {/* Bottom-right: neural net */}
                <div className="absolute bottom-7 right-4 flex flex-col items-center">
                  <svg width="44" height="30" viewBox="0 0 80 55" fill="none">
                    <circle cx="10" cy="12" r="5" stroke="#1C1C1E" strokeWidth="1.5" fill="#FAF8F5"/>
                    <circle cx="10" cy="42" r="5" stroke="#1C1C1E" strokeWidth="1.5" fill="#FAF8F5"/>
                    <circle cx="40" cy="27" r="5" stroke="#1C1C1E" strokeWidth="1.5" fill="#FAF8F5"/>
                    <circle cx="70" cy="15" r="5" stroke="#1C1C1E" strokeWidth="1.5" fill="#1C1C1E"/>
                    <circle cx="70" cy="40" r="5" stroke="#1C1C1E" strokeWidth="1.5" fill="#FAF8F5"/>
                    <line x1="15" y1="12" x2="35" y2="27" stroke="#1C1C1E" strokeWidth="1.5"/>
                    <line x1="15" y1="42" x2="35" y2="27" stroke="#1C1C1E" strokeWidth="1.5"/>
                    <line x1="45" y1="27" x2="65" y2="15" stroke="#1C1C1E" strokeWidth="1.5"/>
                    <line x1="45" y1="27" x2="65" y2="40" stroke="#1C1C1E" strokeWidth="1.5"/>
                  </svg>
                  <span className="font-hand text-xs text-[#5A5A5E]">neural net</span>
                </div>

                {/* Circular photo in center */}
                <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full border-4 border-dashed border-[#1C1C1E] overflow-hidden shadow-sketch z-10">
                  <img
                    src={sahanaPhoto}
                    alt="Sahana G"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name tag below photo */}
                <div className="mt-3 text-center z-10">
                  <span className="font-hand text-lg font-bold text-[#1C1C1E]">Sahana G. ✏️</span>
                </div>
              </div>

              {/* Handwritten Annotation footer note */}
              <div className="px-4 py-2 border-t-2 border-dashed border-[#1C1C1E] bg-[#F4F1EA] flex items-center justify-between text-sm">
                <span className="font-hand text-lg text-[#1C1C1E]">
                  "turning raw data into code & models"
                </span>
                <span className="font-mono text-xs text-[#5A5A5E]">python • sql • ml</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
