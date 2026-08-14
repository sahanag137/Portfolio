import React from 'react';

export const SketchArrow: React.FC<{ className?: string; direction?: 'down' | 'right' | 'curved-right' | 'curved-left' }> = ({
  className = "w-8 h-8",
  direction = 'down'
}) => {
  if (direction === 'curved-right') {
    return (
      <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 Q 50 5, 80 45" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="150" strokeDashoffset="0" />
        <path d="M68 35 L 80 45 L 85 30" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (direction === 'curved-left') {
    return (
      <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M90 10 Q 50 5, 20 45" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 35 L 20 45 L 15 30" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (direction === 'right') {
    return (
      <svg className={className} viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 15 C 25 12, 50 17, 70 15" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M58 7 L 70 15 L 56 22" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5 C 18 20, 22 35, 20 50" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 40 L 20 50 L 30 40" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const SketchStar: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3 L 23 15 L 35 15 L 25 22 L 29 35 L 20 27 L 11 35 L 15 22 L 5 15 L 17 15 Z" stroke="#1C1C1E" strokeWidth="2" strokeLinejoin="round" fill="none" />
  </svg>
);

export const PencilUnderline: React.FC<{ className?: string }> = ({ className = "w-full h-3" }) => (
  <svg className={className} viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6 C 40 2, 90 9, 140 4 C 170 1, 190 7, 198 5" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M10 9 C 60 5, 110 11, 180 7" stroke="#6E6E73" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

export const HeroLaptopSketch: React.FC<{ className?: string }> = ({ className = "w-full max-w-lg h-auto" }) => (
  <svg className={className} viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Pencil Background Crosshatch Grid pattern */}
    <defs>
      <pattern id="crosshatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="10" stroke="#8E8E93" strokeWidth="0.8" opacity="0.3" />
      </pattern>
    </defs>

    {/* Laptop Screen Frame */}
    <rect x="70" y="40" width="360" height="220" rx="12" stroke="#1C1C1E" strokeWidth="3" fill="#FFFFFF" />
    <rect x="82" y="52" width="336" height="196" rx="4" stroke="#5A5A5E" strokeWidth="1.5" fill="#FAF8F5" />
    
    {/* Code Editor Window Header */}
    <path d="M82 52 H418 V76 H82 Z" fill="#F4F1EA" stroke="#5A5A5E" strokeWidth="1" />
    <circle cx="98" cy="64" r="4" fill="#1C1C1E" />
    <circle cx="112" cy="64" r="4" fill="#5A5A5E" />
    <circle cx="126" cy="64" r="4" fill="#8E8E93" />
    <text x="145" y="68" fontFamily="Fira Code" fontSize="11" fill="#5A5A5E">sahana_portfolio.py</text>

    {/* Hand-Drawn Code Snippets inside screen */}
    <text x="96" y="96" fontFamily="Fira Code" fontSize="12" fill="#1C1C1E" fontWeight="bold">import pandas as pd</text>
    <text x="96" y="116" fontFamily="Fira Code" fontSize="12" fill="#1C1C1E" fontWeight="bold">import torch</text>
    <text x="96" y="136" fontFamily="Fira Code" fontSize="12" fill="#5A5A5E"># ML & Data Pipeline setup</text>
    <text x="96" y="156" fontFamily="Fira Code" fontSize="12" fill="#1C1C1E">class Model(nn.Module):</text>
    <text x="116" y="174" fontFamily="Fira Code" fontSize="11" fill="#1C1C1E">def __init__(self):</text>
    <text x="136" y="192" fontFamily="Fira Code" fontSize="11" fill="#5A5A5E">super().__init__()</text>

    {/* Mini Chart Doodle on Right side of screen */}
    <rect x="290" y="90" width="115" height="100" rx="6" stroke="#1C1C1E" strokeWidth="1.5" strokeDasharray="3 3" fill="#FFFFFF" />
    <path d="M300 170 L320 140 L345 155 L370 110 L395 125" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="370" cy="110" r="3" fill="#1C1C1E" />
    <text x="300" y="183" fontFamily="Caveat" fontSize="14" fill="#1C1C1E">data accuracy 99%</text>

    {/* Laptop Keyboard Base */}
    <path d="M30 260 H470 L490 285 C490 292 482 296 470 296 H30 C18 296 10 292 10 285 L30 260 Z" stroke="#1C1C1E" strokeWidth="3" fill="#F4F1EA" />
    {/* Trackpad */}
    <rect x="210" y="268" width="80" height="20" rx="3" stroke="#1C1C1E" strokeWidth="1.5" fill="#FFFFFF" />

    {/* Outer Floating Sketch Elements Around Laptop */}
    {/* Python Symbol Sketch */}
    <g transform="translate(15, 20)">
      <circle cx="30" cy="30" r="22" stroke="#1C1C1E" strokeWidth="2" strokeDasharray="4 2" fill="#FFFFFF" />
      <text x="18" y="36" fontFamily="Space Grotesk" fontSize="18" fontWeight="bold" fill="#1C1C1E">py</text>
    </g>

    {/* Database Cylinder Doodle */}
    <g transform="translate(420, 15)">
      <ellipse cx="30" cy="15" rx="25" ry="8" stroke="#1C1C1E" strokeWidth="2" fill="#FFFFFF" />
      <path d="M5 15 V45 C5 49, 16 53, 30 53 C44 53, 55 49, 55 45 V15" stroke="#1C1C1E" strokeWidth="2" fill="none" />
      <path d="M5 30 C5 34, 16 38, 30 38 C44 38, 55 34, 55 30" stroke="#1C1C1E" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="18" y="68" fontFamily="Caveat" fontSize="15" fill="#1C1C1E">SQL DB</text>
    </g>

    {/* Code Brackets Doodle */}
    <g transform="translate(30, 200)">
      <text x="0" y="30" fontFamily="Fira Code" fontSize="32" fontWeight="bold" fill="#1C1C1E">&#123; &#125;</text>
      <text x="-5" y="45" fontFamily="Caveat" fontSize="15" fill="#5A5A5E">code & data</text>
    </g>

    {/* Neural Net Node Doodle */}
    <g transform="translate(425, 190)">
      <circle cx="15" cy="15" r="5" stroke="#1C1C1E" strokeWidth="2" fill="#FFFFFF" />
      <circle cx="45" cy="8" r="5" stroke="#1C1C1E" strokeWidth="2" fill="#FFFFFF" />
      <circle cx="45" cy="35" r="5" stroke="#1C1C1E" strokeWidth="2" fill="#FFFFFF" />
      <circle cx="75" cy="20" r="5" stroke="#1C1C1E" strokeWidth="2" fill="#1C1C1E" />
      <line x1="20" y1="15" x2="40" y2="8" stroke="#1C1C1E" strokeWidth="1.5" />
      <line x1="20" y1="15" x2="40" y2="35" stroke="#1C1C1E" strokeWidth="1.5" />
      <line x1="50" y1="8" x2="70" y2="20" stroke="#1C1C1E" strokeWidth="1.5" />
      <line x1="50" y1="35" x2="70" y2="20" stroke="#1C1C1E" strokeWidth="1.5" />
      <text x="15" y="55" fontFamily="Caveat" fontSize="14" fill="#1C1C1E">neural net</text>
    </g>

    {/* Handwritten Sketch Arrows */}
    <path d="M 60 50 Q 40 80 75 80" stroke="#1C1C1E" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M 65 74 L 75 80 L 72 68" stroke="#1C1C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

  </svg>
);

export const LibraryProjectSketchSvg: React.FC<{ className?: string }> = ({ className = "w-full h-auto" }) => (
  <svg className={className} viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background Paper Card Frame */}
    <rect x="10" y="10" width="430" height="280" rx="8" stroke="#1C1C1E" strokeWidth="2.5" strokeDasharray="6 3" fill="#FAF8F5" />
    
    {/* Library Bookshelf Doodle */}
    <g transform="translate(30, 40)">
      {/* Books Shelf 1 */}
      <line x1="10" y1="90" x2="170" y2="90" stroke="#1C1C1E" strokeWidth="3" strokeLinecap="round" />
      <rect x="20" y="30" width="18" height="60" stroke="#1C1C1E" strokeWidth="2" fill="#FFFFFF" />
      <rect x="42" y="20" width="22" height="70" stroke="#1C1C1E" strokeWidth="2" fill="#F4F1EA" />
      <rect x="68" y="38" width="16" height="52" stroke="#1C1C1E" strokeWidth="2" fill="#FFFFFF" />
      <rect x="88" y="25" width="24" height="65" stroke="#1C1C1E" strokeWidth="2" fill="#E5E2DA" />
      <path d="M 120 40 L 145 48 L 140 89 L 115 81 Z" stroke="#1C1C1E" strokeWidth="2" fill="#FFFFFF" />
      <text x="30" y="110" fontFamily="Caveat" fontSize="15" fill="#1C1C1E">Book Inventory</text>
    </g>

    {/* Borrow / Return Flow Arrows */}
    <g transform="translate(190, 80)">
      <path d="M 10 20 Q 50 0, 90 20" stroke="#1C1C1E" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
      <path d="M 80 10 L 90 20 L 78 28" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="25" y="-5" fontFamily="Caveat" fontSize="16" fill="#1C1C1E">Borrow ➔</text>

      <path d="M 90 50 Q 50 70, 10 50" stroke="#1C1C1E" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
      <path d="M 22 42 L 10 50 L 20 60" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="25" y="80" fontFamily="Caveat" fontSize="16" fill="#1C1C1E">🔂 Return</text>
    </g>

    {/* Flask Backend & SQLite Database Node */}
    <g transform="translate(300, 45)">
      {/* Computer Monitor */}
      <rect x="10" y="10" width="110" height="75" rx="6" stroke="#1C1C1E" strokeWidth="2.5" fill="#FFFFFF" />
      <path d="M 50 85 L 80 85 M 65 85 V 100 M 45 100 H 85" stroke="#1C1C1E" strokeWidth="2" strokeLinecap="round" />
      <text x="22" y="35" fontFamily="Fira Code" fontSize="11" fill="#1C1C1E" fontWeight="bold">Flask API</text>
      <text x="22" y="55" fontFamily="Fira Code" fontSize="10" fill="#5A5A5E">Auth + SQLite</text>
      
      {/* DB Cylinder below */}
      <ellipse cx="65" cy="130" rx="35" ry="10" stroke="#1C1C1E" strokeWidth="2" fill="#F4F1EA" />
      <path d="M 30 130 V 165 C 30 172, 45 178, 65 178 C 85 178, 100 172, 100 165 V 130" stroke="#1C1C1E" strokeWidth="2" fill="none" />
      <text x="45" y="158" fontFamily="Space Grotesk" fontSize="12" fontWeight="bold" fill="#1C1C1E">SQLite DB</text>
    </g>

    {/* Code snippet footer annotation */}
    <rect x="30" y="195" width="390" height="70" rx="6" stroke="#1C1C1E" strokeWidth="1.5" fill="#FFFFFF" />
    <text x="45" y="220" fontFamily="Fira Code" fontSize="11" fill="#1C1C1E">@app.route('/api/borrow', methods=['POST'])</text>
    <text x="45" y="238" fontFamily="Fira Code" fontSize="11" fill="#5A5A5E">def borrow_book(): db.commit(); return jsonify(status="ok")</text>
    <text x="45" y="255" fontFamily="Caveat" fontSize="14" fill="#1C1C1E"># clean Flask REST controller & SQL transactions</text>
  </svg>
);

export const RetailFlowArchitectureSvg: React.FC<{ className?: string }> = ({ className = "w-full h-auto" }) => (
  <svg className={className} viewBox="0 0 650 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Notebook grid line background box */}
    <rect x="15" y="15" width="620" height="250" rx="12" stroke="#1C1C1E" strokeWidth="2.5" fill="#FAF8F5" />

    {/* Header Title */}
    <text x="35" y="48" fontFamily="Caveat" fontSize="22" fontWeight="bold" fill="#1C1C1E">RetailFlow Data Pipeline Architecture</text>

    {/* Flowchart Node 1: Raw Data */}
    <g transform="translate(35, 80)">
      <rect x="0" y="0" width="90" height="90" rx="8" stroke="#1C1C1E" strokeWidth="2" fill="#FFFFFF" />
      <text x="45" y="38" textAnchor="middle" fontFamily="Space Grotesk" fontSize="13" fontWeight="bold" fill="#1C1C1E">Raw Data</text>
      <text x="45" y="62" textAnchor="middle" fontFamily="Caveat" fontSize="15" fill="#5A5A5E">CSV / JSON</text>
    </g>

    {/* Arrow 1 */}
    <path d="M 125 125 H 153" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 145 118 L 153 125 L 145 132" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Flowchart Node 2: ETL Engine */}
    <g transform="translate(155, 80)">
      <rect x="0" y="0" width="100" height="90" rx="8" stroke="#1C1C1E" strokeWidth="2.5" fill="#F4F1EA" strokeDasharray="4 2" />
      <text x="50" y="30" textAnchor="middle" fontFamily="Space Grotesk" fontSize="14" fontWeight="bold" fill="#1C1C1E">ETL</text>
      <text x="50" y="52" textAnchor="middle" fontFamily="Fira Code" fontSize="11" fill="#5A5A5E">Python script</text>
      <text x="50" y="72" textAnchor="middle" fontFamily="Caveat" fontSize="15" fill="#1C1C1E">Transform</text>
    </g>

    {/* Arrow 2 */}
    <path d="M 255 125 H 283" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 275 118 L 283 125 L 275 132" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Flowchart Node 3: PostgreSQL */}
    <g transform="translate(285, 80)">
      <ellipse cx="50" cy="14" rx="46" ry="12" stroke="#1C1C1E" strokeWidth="2" fill="#FFFFFF" />
      <path d="M 4 14 V 76 C 4 84, 24 90, 50 90 C 76 90, 96 84, 96 76 V 14" stroke="#1C1C1E" strokeWidth="2" fill="none" />
      <text x="50" y="46" textAnchor="middle" fontFamily="Space Grotesk" fontSize="12" fontWeight="bold" fill="#1C1C1E">PostgreSQL</text>
      <text x="50" y="66" textAnchor="middle" fontFamily="Fira Code" fontSize="10" fill="#5A5A5E">SQLAlchemy</text>
    </g>

    {/* Arrow 3 */}
    <path d="M 385 125 H 413" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 405 118 L 413 125 L 405 132" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Flowchart Node 4: SQL Analytics */}
    <g transform="translate(415, 80)">
      <rect x="0" y="0" width="105" height="90" rx="8" stroke="#1C1C1E" strokeWidth="2" fill="#FFFFFF" />
      <text x="52.5" y="30" textAnchor="middle" fontFamily="Space Grotesk" fontSize="12" fontWeight="bold" fill="#1C1C1E">SQL Analytics</text>
      <text x="52.5" y="52" textAnchor="middle" fontFamily="Fira Code" fontSize="10" fill="#5A5A5E">Aggregations</text>
      <text x="52.5" y="73" textAnchor="middle" fontFamily="Caveat" fontSize="14" fill="#1C1C1E">metrics 📊</text>
    </g>

    {/* Arrow 4 */}
    <path d="M 520 125 H 548" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 540 118 L 548 125 L 540 132" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Flowchart Node 5: Power BI */}
    <g transform="translate(550, 80)">
      <rect x="0" y="0" width="75" height="90" rx="8" stroke="#1C1C1E" strokeWidth="2" fill="#F4F1EA" />
      <text x="37.5" y="40" textAnchor="middle" fontFamily="Space Grotesk" fontSize="13" fontWeight="bold" fill="#1C1C1E">Power BI</text>
      <text x="37.5" y="62" textAnchor="middle" fontFamily="Caveat" fontSize="14" fill="#5A5A5E">Reports 📈</text>
    </g>

    {/* Architectural Notes Annotations */}
    <path d="M 205 170 Q 205 220 280 220" stroke="#1C1C1E" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
    <text x="290" y="225" fontFamily="Caveat" fontSize="18" fill="#1C1C1E">Automated pipeline flow ✏️</text>
  </svg>
);
