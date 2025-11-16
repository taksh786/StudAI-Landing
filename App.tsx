
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