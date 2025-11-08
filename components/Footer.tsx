
import React from 'react';
import { StudAILogo } from './Icons';

const footerLinks = {
  Product: ['About', 'Pricing', 'Changelog', 'Contact'],
  Legal: ['Terms of service', 'Privacy policy', '404'],
  Connect: ['Instagram', 'YouTube', 'LinkedIn', 'Twitter / X'],
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-2 pr-8">
            <div className="flex items-center space-x-2 mb-4">
              <StudAILogo className="h-6 w-auto text-white" />
              <span className="font-space-grotesk font-bold text-lg text-white">Stud AI</span>
            </div>
            <p className="text-sm">Speed, scale, and smarts — deployed.</p>
          </div>
          
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-medium text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Stud AI. All rights reserved</p>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <p>by <a href="#" className="hover:text-white">Dream Studio</a></p>
            <p>Made in <a href="#" className="hover:text-white">Framer</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
   