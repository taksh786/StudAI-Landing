
import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from './Icons';

const features = [
  {
    title: 'Multilingual AI',
    description: 'Translate, transcribe, and generate content across global markets.',
    gradient: 'from-purple-600 to-red-500',
  },
  {
    title: 'Continual Learning',
    description: 'Your AI improves automatically as it learns from new data.',
    gradient: 'from-yellow-500 to-green-600',
  },
  {
    title: 'Modular Architecture',
    description: 'Enable or disable components to tailor the platform for your use case.',
    gradient: 'from-green-500 to-blue-500',
  },
  {
    title: 'Smart Analytics',
    description: 'Get instant answers from your data with automated dashboards.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Agent Assist',
    description: 'Automatically suggests responses and surfaces relevant documents.',
    gradient: 'from-red-500 to-orange-500',
  },
];

const NextGenCarousel: React.FC = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainer.current) {
            const scrollAmount = scrollContainer.current.clientWidth * 0.8;
            scrollContainer.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    }

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-medium text-white">
            Next-gen AI features
            </h2>
            <div className="flex items-center space-x-2">
                <button onClick={() => scroll('left')} className="h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                    <ChevronLeftIcon className="h-5 w-5 text-gray-300" />
                </button>
                <button onClick={() => scroll('right')} className="h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                    <ChevronRightIcon className="h-5 w-5 text-gray-300" />
                </button>
            </div>
        </div>

        <div ref={scrollContainer} className="flex overflow-x-auto space-x-6 hide-scrollbar snap-x snap-mandatory pb-4">
          {features.map((feature, index) => (
            <div key={index} className={`flex-shrink-0 w-4/5 sm:w-1/3 md:w-1/4 snap-start rounded-2xl p-6 bg-gradient-to-br ${feature.gradient} relative flex flex-col`}>
              <button className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <PlusIcon className="h-4 w-4 text-white" />
              </button>
              <div className="flex-grow"></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextGenCarousel;
   