
import React, { useState } from 'react';
import { StudAILogo, MenuIcon, CloseIcon } from './Icons';

const navItems = ['Product', 'Pricing', 'Docs', 'Company'];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-8 lg:px-12 backdrop-blur-sm bg-black/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <StudAILogo className="h-6 w-auto" />
          <span className="font-space-grotesk font-bold text-lg text-white">Osmiq</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-full border border-gray-600 hover:border-white">
            Sign In
          </button>
          <button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Get early access
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
            {navItems.map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider">
                {item}
              </a>
            ))}
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-full border border-gray-600 hover:border-white w-40">
              Sign In
            </button>
            <button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors w-40">
              Get early access
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
   
