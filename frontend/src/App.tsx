import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsMindMap } from './components/SkillsMindMap';
import { ProjectSection } from './components/ProjectSection';
import { Learning } from './components/Learning';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1C1E] font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsMindMap />
        <ProjectSection />
        <Learning />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
