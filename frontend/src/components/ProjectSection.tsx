import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { LibraryProjectSketchSvg, RetailFlowArchitectureSvg, PencilUnderline,} from './SketchDoodles';
import {  Github } from 'lucide-react';

export const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#1C1C1E] inline-block relative">
            Featured Projects
            <PencilUnderline className="w-full h-3 mt-1" />
          </h2>
          <p className="font-hand text-xl text-[#5A5A5E] mt-2">
            real code & data engineering projects I've built ✏️
          </p>
        </div>

        <div className="space-y-20">
          
          {/* PROJECT 01 — LIBRARY MANAGEMENT SYSTEM */}
          {(() => {
            const project = PORTFOLIO_DATA.projects[0];
            return (
              <div className="relative sketch-box p-6 sm:p-10 bg-[#FFFFFF] shadow-sketch-lg">
                {/* Handwritten Project Tag Header */}
                <div className="flex items-center justify-between border-b-2 border-dashed border-[#1C1C1E] pb-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="sketch-box px-3 py-1 bg-[#1C1C1E] text-[#FFFFFF] font-mono text-sm font-bold">
                      PROJECT 01
                    </span>
                    <span className="font-hand text-lg text-[#1C1C1E]">
                      "full-stack web app"
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#8E8E93] hidden sm:block">
                    flask • sqlite • rest api
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left Side: Details */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#1C1C1E] tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-base sm:text-lg text-[#1C1C1E] font-sans leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies Pills */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase text-[#8E8E93] tracking-widest block">
                        Technologies:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono bg-[#F4F1EA] border border-[#1C1C1E] rounded shadow-sketch-subtle"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Handwritten Annotations */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.annotations.map((note) => (
                        <span
                          key={note}
                          className="font-hand text-lg text-[#1C1C1E] bg-[#FAF8F5] px-2.5 py-0.5 border border-dashed border-[#1C1C1E] rounded rotate-[-2deg]"
                        >
                          ✏️ "{note}"
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="pt-4 flex items-center space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sketch-button inline-flex items-center space-x-2 px-5 py-2.5 bg-[#1C1C1E] text-[#FFFFFF] font-semibold text-sm hover:bg-[#2A2A2E]"
                      >
                        <Github className="w-4 h-4" />
                        <span>View on GitHub →</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Side: Hand-Drawn Sketch Illustration */}
                  <div className="lg:col-span-7 flex justify-center">
                    <div className="w-full transform transition-transform duration-300 hover:scale-[1.02]">
                      <LibraryProjectSketchSvg className="w-full h-auto drop-shadow-sm" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}

          {/* Pencil Divider */}
          <div className="flex items-center justify-center my-12">
            <div className="w-1/3 border-b-2 border-dashed border-[#1C1C1E]" />
            <span className="px-4 font-hand text-xl text-[#5A5A5E] bg-[#FAF8F5]">
              ✏️ notebook page break ✏️
            </span>
            <div className="w-1/3 border-b-2 border-dashed border-[#1C1C1E]" />
          </div>

          {/* PROJECT 02 — RETAILFLOW */}
          {(() => {
            const project = PORTFOLIO_DATA.projects[1];
            return (
              <div className="relative sketch-box p-6 sm:p-10 bg-[#FFFFFF] shadow-sketch-lg">
                {/* Handwritten Project Tag Header */}
                <div className="flex items-center justify-between border-b-2 border-dashed border-[#1C1C1E] pb-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="sketch-box px-3 py-1 bg-[#1C1C1E] text-[#FFFFFF] font-mono text-sm font-bold">
                      PROJECT 02
                    </span>
                    <span className="font-hand text-lg text-[#1C1C1E]">
                      "data engineering pipeline"
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#8E8E93] hidden sm:block">
                    etl • postgresql • power bi
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left Side: Details */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#1C1C1E] tracking-tight">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="font-hand text-xl font-bold text-[#5A5A5E] mt-1">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    <p className="text-base sm:text-lg text-[#1C1C1E] font-sans leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies Pills */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase text-[#8E8E93] tracking-widest block">
                        Technologies:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono bg-[#F4F1EA] border border-[#1C1C1E] rounded shadow-sketch-subtle"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Handwritten Annotations */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.annotations.map((note) => (
                        <span
                          key={note}
                          className="font-hand text-lg text-[#1C1C1E] bg-[#FAF8F5] px-2.5 py-0.5 border border-dashed border-[#1C1C1E] rounded rotate-[2deg]"
                        >
                          ✏️ "{note}"
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="pt-4 flex items-center space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sketch-button inline-flex items-center space-x-2 px-5 py-2.5 bg-[#1C1C1E] text-[#FFFFFF] font-semibold text-sm hover:bg-[#2A2A2E]"
                      >
                        <Github className="w-4 h-4" />
                        <span>View on GitHub →</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Side: Architecture Sketch Illustration */}
                  <div className="lg:col-span-7 flex justify-center">
                    <div className="w-full transform transition-transform duration-300 hover:scale-[1.02]">
                      <RetailFlowArchitectureSvg className="w-full h-auto drop-shadow-sm" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
};
