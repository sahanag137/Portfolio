import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PencilUnderline, SketchArrow, SketchStar } from './SketchDoodles';

export const Learning: React.FC = () => {
  return (
    <section id="learning" className="py-16 md:py-24 relative bg-[#F4F1EA]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#1C1C1E] inline-block relative">
            Currently Learning...
            <PencilUnderline className="w-full h-3 mt-1" />
          </h2>
          <p className="font-hand text-xl text-[#5A5A5E] mt-2">
            active study topics pinned in my notebook 📌
          </p>
        </div>

        {/* Notebook Card Container */}
        <div className="relative sketch-box p-6 sm:p-12 bg-[#FFFFFF] shadow-sketch-lg">
          
          {/* Tape / Pin graphic on top */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-1 bg-[#FAF8F5] border-2 border-[#1C1C1E] font-hand text-lg font-bold rotate-[-1deg] shadow-sketch-subtle">
            📌 Daily Learning Log
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {PORTFOLIO_DATA.currentlyLearning.map((topic, index) => {
              const rotations = ['rotate-1', '-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1', '-rotate-2'];
              const currentRotation = rotations[index % rotations.length];

              return (
                <div
                  key={topic}
                  className={`sketch-box-subtle p-5 bg-[#FAF8F5] border-2 border-[#1C1C1E] rounded-lg relative ${currentRotation} hover:bg-[#FFFFFF] transition-all duration-200 shadow-sketch`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#8E8E93] uppercase">
                      TOPIC 0{index + 1}
                    </span>
                    <SketchStar className="w-4 h-4 text-[#1C1C1E]" />
                  </div>
                  
                  <h3 className="font-bold font-sans text-lg text-[#1C1C1E]">
                    {topic}
                  </h3>

                  <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#5A5A5E] border-t border-dashed border-[#8E8E93] pt-2">
                    <span>STATUS:</span>
                    <span className="font-bold text-[#1C1C1E]">IN PROGRESS ⚡</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connected Arrows and Handwritten Bottom Annotation */}
          <div className="mt-12 pt-8 border-t-2 border-dashed border-[#1C1C1E] flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 text-center">
            <div className="flex items-center space-x-2">
              <SketchArrow direction="right" className="w-8 h-6 text-[#1C1C1E]" />
              <span className="font-hand text-2xl font-bold text-[#1C1C1E] rotate-[-2deg]">
                "still figuring it out :)"
              </span>
            </div>
            <span className="text-sm font-sans text-[#5A5A5E]">
              (No fake percentages — just continuous learning & experimentation)
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
