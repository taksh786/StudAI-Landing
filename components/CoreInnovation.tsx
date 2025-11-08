
import React from 'react';
import { FeatureIcon1, FeatureIcon2, FeatureIcon3 } from './Icons';

const features = [
  {
    icon: <FeatureIcon1 className="h-8 w-8 text-gray-400" />,
    title: 'AI Automation',
    description: 'Automate routine tasks like lead handling and customer replies to let your team focus on what matters most.',
  },
  {
    icon: <FeatureIcon2 className="h-8 w-8 text-gray-400" />,
    title: 'Data Insights',
    description: 'Discover trends, predict user behavior, and segment your audience with precision to make smarter, data-backed business decisions.',
  },
  {
    icon: <FeatureIcon3 className="h-8 w-8 text-gray-400" />,
    title: 'Adaptive AI',
    description: 'We build AI systems that grow with your business, adapt to your data, and keep you ahead in a changing market.',
  },
];

const CoreInnovation: React.FC = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-space-grotesk text-3xl md:text-4xl text-center font-medium text-white mb-16">
          The core of smarter innovation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-800 border border-gray-800">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#050505] p-8 text-center flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full border border-gray-700 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreInnovation;
   