
import React from 'react';

interface FinalCtaProps {
  onJoinWaitlistClick: () => void;
}

const FinalCta: React.FC<FinalCtaProps> = ({ onJoinWaitlistClick }) => {
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
        <button onClick={onJoinWaitlistClick} className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition-colors w-40 text-center">
          Join waitlist
        </button>
      </div>
    </section>
  );
};

export default FinalCta;
