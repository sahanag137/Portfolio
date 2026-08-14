import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PencilUnderline, SketchArrow,} from './SketchDoodles';
import { Github, ExternalLink } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#1C1C1E] inline-block relative">
            Where I Code
            <PencilUnderline className="w-full h-3 mt-1" />
          </h2>
          <p className="font-hand text-xl text-[#5A5A5E] mt-2">
            open source repositories & code experiments 💻
          </p>
        </div>

        {/* Sketched Laptop Container */}
        <div className="sketch-box p-6 sm:p-10 bg-[#FFFFFF] shadow-sketch-lg relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: GitHub Link & Callout */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[#1C1C1E] text-[#FFFFFF] rounded-lg">
                  <Github className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-sans text-[#1C1C1E]">
                    GitHub Profile
                  </h3>
                  <p className="font-mono text-sm text-[#5A5A5E]">
                    @sahanag137
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#1C1C1E] font-sans leading-relaxed">
                "{PORTFOLIO_DATA.personal.profileDescription}"
              </p>

              {/* GitHub CTA Button & Handwritten Annotation */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sketch-button inline-flex items-center space-x-3 px-6 py-3 bg-[#1C1C1E] text-[#FFFFFF] font-bold text-base hover:bg-[#2A2A2E]"
                >
                  <Github className="w-5 h-5" />
                  <span>Visit GitHub Profile</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>

                {/* Annotation */}
                <div className="flex items-center space-x-2">
                  <SketchArrow direction="curved-right" className="w-8 h-6 text-[#1C1C1E]" />
                  <span className="font-hand text-xl font-bold text-[#1C1C1E] rotate-[-2deg]">
                    more experiments →
                  </span>
                </div>
              </div>

             
            </div>

            {/* Right Column: Mini Pencil Laptop Drawing */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm sketch-box-subtle p-6 bg-[#FAF8F5] border-2 border-[#1C1C1E] text-center space-y-4">
                
                {/* SVG Mini Laptop Screen */}
                <div className="border-2 border-[#1C1C1E] rounded-md p-4 bg-[#FFFFFF]">
                  <div className="flex items-center justify-between border-b border-[#1C1C1E] pb-2 mb-3">
                    <div className="flex space-x-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1C1C1E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#8E8E93]" />
                    </div>
                    <span className="font-mono text-[10px] text-[#5A5A5E]">git push origin main</span>
                  </div>

                  <div className="text-left font-mono text-xs text-[#1C1C1E] space-y-1">
                    <p className="text-[#8E8E93]">$ git status</p>
                    <p className="font-bold">On branch main</p>
                    <p className="text-[#5A5A5E]">Your branch is up to date.</p>
                    <p className="pt-2 font-bold text-[#1C1C1E]">2 public repos pinned</p>
                  </div>
                </div>

                <div className="h-3 w-4/5 mx-auto bg-[#F4F1EA] border-2 border-[#1C1C1E] rounded-b-md" />

                <span className="font-hand text-lg text-[#1C1C1E] block">
                  "code, commit, push, repeat"
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
