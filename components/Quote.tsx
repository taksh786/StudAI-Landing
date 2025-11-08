
import React from 'react';

const Quote: React.FC = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center px-4">
        <blockquote className="font-space-grotesk text-2xl md:text-4xl text-white leading-snug mb-8">
          "It's been a game-changer. The AI saves us hours each week and delivers insights that help us make faster, smarter decisions."
        </blockquote>
        <div className="flex items-center justify-center space-x-4">
          <img
            src="https://picsum.photos/id/1027/40/40"
            alt="Linda Evans"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="font-medium text-white">Linda Evans</p>
            <p className="text-sm text-gray-400">Head of Marketing at Lumexa Labs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
   