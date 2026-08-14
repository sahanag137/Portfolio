import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PencilUnderline, SketchStar } from './SketchDoodles';

export const SkillsMindMap: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative bg-crosshatch">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#1C1C1E] inline-block relative">
            What I Work With
            <PencilUnderline className="w-full h-3 mt-1" />
          </h2>
          <p className="font-hand text-xl text-[#5A5A5E] mt-2">
            a technical mind-map drawn in graphite ✏️
          </p>
        </div>

        {/* Mind Map Layout Container */}
        <div className="relative sketch-box p-6 sm:p-12 bg-[#FFFFFF] shadow-sketch-lg overflow-hidden">
          
          {/* Handwritten Annotation on Top Left */}
          <div className="absolute top-4 left-6 hidden sm:flex items-center space-x-2">
            <SketchStar className="w-5 h-5 text-[#1C1C1E]" />
            <span className="font-hand text-lg text-[#1C1C1E] rotate-[-2deg]">
              "skills connected by practice"
            </span>
          </div>

          {/* Central Mind Map Node: ME + CODE */}
          <div className="flex justify-center mb-12 relative z-10">
            <div className="sketch-box px-8 py-4 bg-[#1C1C1E] text-[#FFFFFF] text-center shadow-sketch transform rotate-[-1deg]">
              <span className="font-mono text-xs text-[#8E8E93] uppercase tracking-widest block">CORE CENTER</span>
              <h3 className="text-2xl font-bold font-sans tracking-tight">ME + CODE</h3>
              <span className="font-hand text-lg text-[#FAF8F5] block mt-0.5">Sahana's Tech Stack</span>
            </div>
          </div>

          {/* SVG Connecting Sketch Lines for Desktop (Hidden on small screens) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Central hub coordinates ~ (500, 100) */}
              {/* Line to Programming (Top Left) */}
              <path d="M 500 100 Q 300 120 180 180" stroke="#1C1C1E" strokeWidth="2.5" strokeDasharray="6 3" />
              {/* Line to Data (Top Right) */}
              <path d="M 500 100 Q 700 120 820 180" stroke="#1C1C1E" strokeWidth="2.5" strokeDasharray="6 3" />
              {/* Line to Machine Learning (Mid Left) */}
              <path d="M 500 100 Q 250 250 150 330" stroke="#1C1C1E" strokeWidth="2.5" strokeDasharray="6 3" />
              {/* Line to Development (Mid Right) */}
              <path d="M 500 100 Q 750 250 850 330" stroke="#1C1C1E" strokeWidth="2.5" strokeDasharray="6 3" />
              {/* Line to Databases (Bottom Left) */}
              <path d="M 500 100 Q 350 400 250 480" stroke="#1C1C1E" strokeWidth="2.5" strokeDasharray="6 3" />
              {/* Line to Data Engineering (Bottom Mid) */}
              <path d="M 500 100 V 480" stroke="#1C1C1E" strokeWidth="2.5" strokeDasharray="6 3" />
              {/* Line to Tools (Bottom Right) */}
              <path d="M 500 100 Q 650 400 750 480" stroke="#1C1C1E" strokeWidth="2.5" strokeDasharray="6 3" />
            </svg>
          </div>

          {/* Skill Branch Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {PORTFOLIO_DATA.skills.map((category, idx) => {
              // Alternate rotations for organic sketch feel
              const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2'];
              const currentRotate = rotations[idx % rotations.length];

              return (
                <div
                  key={category.title}
                  className={`sketch-box-subtle p-5 border-2 border-[#1C1C1E] bg-[#FFFFFF] hover:bg-[#FAF8F5] transition-transform duration-200 transform ${currentRotate} hover:scale-105 shadow-sketch`}
                >
                  {/* Category Title */}
                  <div className="flex items-center justify-between border-b-2 border-dashed border-[#1C1C1E] pb-2 mb-3">
                    <h4 className="font-bold font-sans text-lg text-[#1C1C1E] tracking-tight">
                      {category.title}
                    </h4>
                    <span className="font-mono text-xs px-2 py-0.5 bg-[#F4F1EA] border border-[#1C1C1E] rounded">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Skill Items */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-sm font-sans font-medium bg-[#FAF8F5] border border-[#1C1C1E] rounded shadow-sketch-subtle hover:bg-[#F4F1EA] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Handwritten Notes */}
          <div className="mt-12 pt-6 border-t-2 border-dashed border-[#1C1C1E] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
            <span className="font-hand text-xl text-[#1C1C1E]">
              "Always adding new tools & refining core data structures & algorithms."
            </span>
            <span className="font-mono text-xs text-[#5A5A5E] bg-[#F4F1EA] px-3 py-1 border border-[#1C1C1E] rounded">
              python • sql • algorithms • data pipelines
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
