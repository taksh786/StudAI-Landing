
import React from 'react';

const FinalCta: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
       <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[300px] opacity-30"
        style={{
          background: 'linear-gradient(90deg, rgba(28, 58, 243, 0.8) 0%, rgba(13, 227, 255, 0.8) 50%, rgba(6, 255, 154, 0.8) 100%)',
          filter: 'blur(80px)',
          transform: 'translateX(-50%) translateY(-50%)',
        }}
      ></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="font-space-grotesk text-3xl md:text-5xl font-medium text-white mb-8">
          Ready to automate everything?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition-colors w-40 text-center">
            Get started
          </button>
          <button className="border border-gray-600 text-gray-300 font-medium px-6 py-3 rounded-full hover:border-white hover:text-white transition-all w-40 text-center">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
   