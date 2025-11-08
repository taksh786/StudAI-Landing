
import React from 'react';
import { IntegrationIcons } from './Icons';

const Integrations: React.FC = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 md:gap-24 items-center">
        <div className="md:w-1/2">
          <h2 className="font-space-grotesk text-3xl md:text-5xl font-medium text-white leading-tight mb-6">
            Seamless integrations with your favorite tools
          </h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Connect our AI with the apps you already use, including calendars, docs, messaging platforms, and more.
          </p>
          <button className="border border-gray-600 text-gray-300 font-medium px-5 py-2.5 rounded-full hover:border-white hover:text-white transition-all text-sm">
            Get started
          </button>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-8 text-gray-500">
            {IntegrationIcons.map((Icon, index) => (
              <div key={index} className="flex items-center justify-center">
                 <Icon className="h-8 w-8 hover:text-white transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
   