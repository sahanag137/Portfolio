import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HeroLaptopSketch, SketchArrow, SketchStar } from './SketchDoodles';

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
                Hi, I'm <span className="relative inline-block text-[#1C1C1E]">Sahana.</span>
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

          {/* Right Column: Sketch Laptop Illustration */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            
            <div className="relative w-full max-w-lg p-2 bg-[#FFFFFF] border-2 border-[#1C1C1E] rounded-xl shadow-sketch-lg">
              {/* Handwritten Header label */}
              <div className="flex justify-between items-center px-4 py-2 border-b-2 border-dashed border-[#1C1C1E] bg-[#FAF8F5]">
                <span className="font-hand text-xl font-bold text-[#1C1C1E]">
                  notebook_page_01.sketch
                </span>
                <span className="font-mono text-xs text-[#8E8E93]">data & code</span>
              </div>

              {/* SVG Sketch Laptop Illustration */}
              <div className="p-4 flex justify-center">
                <HeroLaptopSketch className="w-full h-auto max-h-[380px]" />
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
