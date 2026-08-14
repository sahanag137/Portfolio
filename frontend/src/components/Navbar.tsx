import React, { useState } from 'react';
import { Menu, X, Edit3 } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-sm border-b-2 border-[#1C1C1E] transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 text-2xl font-bold font-sans tracking-tight text-[#1C1C1E] hover:opacity-80 transition-opacity"
          >
            <span>Sahana.</span>
            <Edit3 className="w-5 h-5 text-[#5A5A5E] transform -rotate-12 inline-block" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative py-1 text-base font-medium text-[#1C1C1E] transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1C1C1E] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
            
            {/* Direct Contact Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="sketch-button px-4 py-1.5 bg-[#FFFFFF] text-[#1C1C1E] text-sm font-semibold font-sans tracking-wide hover:bg-[#F4F1EA]"
            >
              Let's Talk ✏️
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-[#1C1C1E] hover:bg-[#F4F1EA] focus:outline-none border-2 border-[#1C1C1E]"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-[#1C1C1E] bg-[#FAF8F5] px-4 pt-2 pb-6 space-y-3 shadow-sketch">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-2 text-lg font-medium text-[#1C1C1E] border-b border-dashed border-[#8E8E93] hover:bg-[#F4F1EA]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block text-center sketch-button w-full py-2 bg-[#FFFFFF] text-[#1C1C1E] font-semibold"
            >
              Let's Connect ✏️
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
