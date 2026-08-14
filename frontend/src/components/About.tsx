import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PencilUnderline, SketchStar } from './SketchDoodles';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#1C1C1E] inline-block relative">
            About Me
            <PencilUnderline className="w-full h-3 mt-1" />
          </h2>
          <p className="font-hand text-xl text-[#5A5A5E] mt-2">
            a page straight from my personal journal 📖
          </p>
        </div>

        {/* Notebook Page Card Container */}
        <div className="relative sketch-box p-6 sm:p-10 bg-[#FFFFFF] notebook-lines shadow-sketch-lg">
          
          {/* Ring binder hole punches graphic on the top */}
          <div className="flex justify-around items-center -mt-8 sm:-mt-12 mb-8 border-b-2 border-[#1C1C1E] pb-4">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full bg-[#FAF8F5] border-2 border-[#1C1C1E] shadow-inner-sketch"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Hand-drawn Avatar Placeholder & Orbiting Tags */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-6">
              
              {/* Profile Avatar Frame */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border border-[#1C1C1E] overflow-hidden shadow-sketch">
                <img
                  src="/src/assets/sahana.jpeg"
                  alt="Sahana G"
                 className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Name tag below photo */}
              <div className="mt-4 text-center">
                <span className="font-hand text-xl font-bold text-[#1C1C1E]">Sahana G</span>
                <br />
                <span className="font-mono text-xs text-[#5A5A5E]">@sahanag137</span>
              </div>

              {/* Orbiting Handwritten Badges around avatar */}
              <div className="absolute -top-2 left-2 bg-[#FAF8F5] border border-[#1C1C1E] px-3 py-1 rounded-full font-hand text-lg text-[#1C1C1E] shadow-sketch-subtle rotate-[-6deg]">
                ✨ curious
              </div>
              <div className="absolute top-12 -right-4 bg-[#FAF8F5] border border-[#1C1C1E] px-3 py-1 rounded-full font-hand text-lg text-[#1C1C1E] shadow-sketch-subtle rotate-[4deg]">
                🛠️ builder
              </div>
              <div className="absolute bottom-10 -left-4 bg-[#FAF8F5] border border-[#1C1C1E] px-3 py-1 rounded-full font-hand text-lg text-[#1C1C1E] shadow-sketch-subtle rotate-[-4deg]">
                🧩 problem solver
              </div>
              <div className="absolute -bottom-4 right-4 bg-[#FAF8F5] border border-[#1C1C1E] px-3 py-1 rounded-full font-hand text-lg text-[#1C1C1E] shadow-sketch-subtle rotate-[6deg]">
                📚 always learning
              </div>

            </div>

            {/* Right Column: Natural Bio & Handwritten Note */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-sans text-[#1C1C1E]">
                  Data Science Student & Code Explorer
                </h3>
                
                <p className="text-lg text-[#1C1C1E] font-sans leading-relaxed">
                  {PORTFOLIO_DATA.personal.aboutBio}
                </p>
              </div>

              {/* Hand-drawn callout box for Philosophy */}
              <div className="p-4 bg-[#F4F1EA] border-2 border-dashed border-[#1C1C1E] rounded-lg relative">
                <div className="flex items-center space-x-2 mb-2">
                  <SketchStar className="w-5 h-5 text-[#1C1C1E]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1C1C1E]">
                    Developer Philosophy
                  </span>
                </div>
                <p className="font-hand text-2xl text-[#1C1C1E] leading-snug">
                  "debug → learn → build"
                </p>
                <p className="text-sm font-sans text-[#5A5A5E] mt-1">
                  Understanding why code breaks is half the fun of making it work.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
