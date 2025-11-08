
import React, { useState, useEffect } from 'react';
import { OrbitcLogo, CloudcLogo, AmsterdamLogo, FieldLogo } from './Icons';

const Typewriter: React.FC<{ text: string; speed?: number }> = ({ text, speed = 70 }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayText}
      <span className={`transition-opacity duration-300 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 relative z-10">
      <div className="flex flex-col items-center">
        <div className="inline-block bg-gray-800/50 border border-gray-700 rounded-full px-4 py-1.5 text-xs text-gray-300 mb-6">
          THE AI LAYER THAT BRINGS
        </div>
        <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-white animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          clarity to complexity.
        </h1>
        <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-400 font-light">
          <Typewriter text="Study smarter. Automate assessments. Save educators time." />
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition-colors w-48 text-center">
            Generate a Paper
          </button>
          <button className="border border-gray-600 text-gray-300 font-medium px-6 py-3 rounded-full hover:border-white hover:text-white transition-all w-48 text-center">
            See demo
          </button>
        </div>
        <div className="mt-24 flex flex-col items-center">
          <p className="text-sm text-gray-500 mb-6">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex items-center space-x-8 text-gray-500">
             <FieldLogo className="h-5 w-auto" />
             <OrbitcLogo className="h-6 w-auto" />
             <CloudcLogo className="h-6 w-auto" />
             <AmsterdamLogo className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
   