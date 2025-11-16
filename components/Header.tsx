import React, { useState } from 'react';
import { StudAILogo, MenuIcon, CloseIcon } from './Icons';

interface HeaderProps {
  onJoinWaitlistClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onJoinWaitlistClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-8 lg:px-12 backdrop-blur-sm bg-black/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <StudAILogo className="h-6 w-auto" />
          <span className="font-space-grotesk font-bold text-lg text-white">Osmiq</span>
        </div>

        <div className="hidden md:block">
          <button onClick={onJoinWaitlistClick} className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Join waitlist
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050505] py-4">
          <nav className="flex flex-col items-center space-y-4">
            <button onClick={() => { onJoinWaitlistClick(); setIsMenuOpen(false); }} className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors w-40">
              Join waitlist
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;