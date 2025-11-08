
import React from 'react';
import { VoiceIntelligenceIcon, VideoAiIcon, ImageGenerationIcon, TextEditorIcon, SecureByDesignIcon, SmartAssistantIcon, ArrowRightIcon } from './Icons';

const features = [
  {
    icon: <VoiceIntelligenceIcon className="h-5 w-5 mb-4 text-gray-300" />,
    title: 'Voice Intelligence',
    description: 'Convert speech to text, generate realistic audio, and integrate voice commands with seamless AI interaction.',
  },
  {
    icon: <VideoAiIcon className="h-5 w-5 mb-4 text-gray-300" />,
    title: 'Video AI',
    description: 'Analyze, generate, and edit video content with AI-powered tools that save time and unlock creativity.',
  },
  {
    icon: <ImageGenerationIcon className="h-5 w-5 mb-4 text-gray-300" />,
    title: 'Image Generation',
    description: 'Generate high-quality images, graphics, and concepts using cutting-edge generative AI tuned for creativity and speed.',
  },
  {
    icon: <TextEditorIcon className="h-5 w-5 mb-4 text-gray-300" />,
    title: 'Text Editor',
    description: 'Generate, analyze, and optimize text with natural language processing designed for clarity, tone, and impact.',
  },
  {
    icon: <SecureByDesignIcon className="h-5 w-5 mb-4 text-gray-300" />,
    title: 'Secure by design',
    description: 'From encrypted data handling to access controls and model integrity, ensure every action is protected.',
  },
  {
    icon: <SmartAssistantIcon className="h-5 w-5 mb-4 text-gray-300" />,
    title: 'Smart Assistant',
    description: 'Automate workflows, answer questions, and provide real-time support with a conversational AI that learns and adapts.',
  },
];

const FeatureHub: React.FC = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-space-grotesk text-3xl md:text-5xl text-center font-medium text-white mb-16 max-w-2xl mx-auto">
          Explore the powerful AI features that drive business growth
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-r border-gray-800">
          {features.map((feature, index) => (
            <div key={index} className="border-b border-l border-gray-800 p-8 group">
              {feature.icon}
              <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{feature.description}</p>
               <a href="#" className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors flex items-center">
                Learn more <ArrowRightIcon className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHub;
   