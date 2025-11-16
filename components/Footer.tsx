import React from 'react';
import { StudAILogo, LinkedInIcon, XIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-gray-400 py-16 rounded-t-3xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <StudAILogo className="h-10 w-auto text-white" />

        <p className="mt-6 text-lg text-gray-300 max-w-md">
          Osmiq, where intelligence finds its flow.
        </p>

        <div className="mt-8">
            <p className="text-gray-500">Contact us on X</p>
            <a href="#" className="text-white hover:underline">@osmiq</a>
        </div>
        
        <div className="w-full border-t border-gray-700 my-12"></div>
        
        <div className="w-full flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
          <div className="flex items-center text-gray-500">
            <p>© {new Date().getFullYear()} Osmiq. All rights reserved</p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><LinkedInIcon className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white transition-colors" aria-label="X"><XIcon className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram"><InstagramIcon className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;