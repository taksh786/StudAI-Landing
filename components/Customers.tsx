
import React from 'react';
import { CloudLogo, ProlineLogo } from './Icons';

const Customers: React.FC = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-space-grotesk text-3xl md:text-5xl text-center font-medium text-white mb-24 max-w-2xl mx-auto">
          Meet the companies working more efficiently with AI
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center mb-24">
          <div className="md:w-1/2">
            <p className="font-space-grotesk text-2xl md:text-3xl text-white leading-snug mb-8">
              "Working with this AI platform helped us launch faster and smarter than ever before."
            </p>
            <div className="flex items-center space-x-8">
                <div>
                    <div className="text-3xl font-medium text-white">+50%</div>
                    <div className="text-sm text-gray-400">Conversion</div>
                </div>
                <div>
                    <div className="text-3xl font-medium text-white">+145%</div>
                    <div className="text-sm text-gray-400">ROI</div>
                </div>
            </div>
            <button className="mt-8 border border-gray-600 text-gray-300 font-medium px-5 py-2.5 rounded-full hover:border-white hover:text-white transition-all text-sm">
                Get started
              </button>
          </div>
          <div className="md:w-1/2 w-full aspect-square bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl flex items-center justify-center p-8">
            <CloudLogo className="h-10 text-white"/>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center">
            <div className="md:w-1/2">
                <p className="font-space-grotesk text-2xl md:text-3xl text-white leading-snug mb-8">
                "We've seen a 40% drop in support tickets after integrating their AI assistant."
                </p>
                <div className="flex items-center space-x-8">
                    <div>
                        <div className="text-3xl font-medium text-white">+120%</div>
                        <div className="text-sm text-gray-400">Conversion</div>
                    </div>
                    <div>
                        <div className="text-3xl font-medium text-white">+210%</div>
                        <div className="text-sm text-gray-400">ROI</div>
                    </div>
                </div>
                <button className="mt-8 border border-gray-600 text-gray-300 font-medium px-5 py-2.5 rounded-full hover:border-white hover:text-white transition-all text-sm">
                    Get started
                </button>
            </div>
            <div className="md:w-1/2 w-full aspect-square bg-gradient-to-br from-yellow-400 to-purple-600 rounded-3xl flex items-center justify-center p-8">
                <ProlineLogo className="h-10 text-white" />
            </div>
        </div>

      </div>
    </section>
  );
};

export default Customers;
   