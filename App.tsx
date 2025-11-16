
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import CoreInnovation from './components/CoreInnovation';
import ProductFeatures from './components/ProductFeatures';
import FeatureHub from './components/FeatureHub';
import Customers from './components/Customers';
import Quote from './components/Quote';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

const App: React.FC = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const openWaitlistModal = () => setIsWaitlistModalOpen(true);
  const closeWaitlistModal = () => setIsWaitlistModalOpen(false);

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-black/10 to-transparent z-0"></div>
      <div 
        className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1200px] h-[500px] opacity-20"
        style={{
          background: 'linear-gradient(90deg, rgba(28, 58, 243, 0.8) 0%, rgba(13, 227, 255, 0.8) 50%, rgba(6, 255, 154, 0.8) 100%)',
          filter: 'blur(100px)',
          transform: 'translateX(-50%) rotate(-15deg)',
        }}
      ></div>

      <Header onJoinWaitlistClick={openWaitlistModal} />
      <main className="relative z-10">
        <Hero onJoinWaitlistClick={openWaitlistModal} />
        <Intro />
        <CoreInnovation />
        <ProductFeatures />
        <FeatureHub />
        <Customers />
        <Quote />
        <FinalCta onJoinWaitlistClick={openWaitlistModal} />
      </main>
      <Footer />
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} />
    </div>
  );
};

export default App;