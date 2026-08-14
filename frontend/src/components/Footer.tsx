import React from 'react';
import { Edit3 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#FAF8F5] border-t-2 border-[#1C1C1E] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        {/* Tiny Pencil Sketch Icon */}
        <div className="inline-flex items-center justify-center p-2.5 bg-[#FFFFFF] border-2 border-[#1C1C1E] rounded-full shadow-sketch-subtle transform rotate-[-6deg]">
          <Edit3 className="w-5 h-5 text-[#1C1C1E]" />
        </div>

        {/* Primary Copyright & Tagline */}
        <div className="space-y-1">
          <p className="font-bold font-sans text-lg text-[#1C1C1E]">
            Sahana G. © 2026
          </p>
          <p className="font-hand text-xl text-[#5A5A5E]">
            "Designed, coded & probably debugged several times."
          </p>
        </div>

        {/* Minimal Stack note */}
        <div className="pt-2 text-xs font-mono text-[#8E8E93]">
          React • TypeScript • Tailwind CSS • Python Flask API
        </div>

      </div>
    </footer>
  );
};
