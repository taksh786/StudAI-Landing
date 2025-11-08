
import React from 'react';
import { AiChatIcon, TimeManagementIcon, TranscriptionIcon, PlusIcon } from './Icons';

const ChatMockup: React.FC = () => (
    <div className="w-full h-full bg-blue-500/10 border border-blue-400/20 rounded-2xl p-6 relative overflow-hidden backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        <div className="relative flex flex-col h-full">
            <div className="flex-grow"></div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-full p-2 flex items-center space-x-2">
                <button className="bg-gray-700 h-8 w-8 rounded-full flex items-center justify-center">
                    <PlusIcon className="h-4 w-4 text-white" />
                </button>
                <input type="text" placeholder="Ask anything..." className="bg-transparent text-white placeholder-gray-400 flex-grow focus:outline-none" />
                <button className="bg-gray-700 h-8 w-8 rounded-full flex items-center justify-center"><TranscriptionIcon className="h-4 w-4 text-white" /></button>
            </div>
        </div>
    </div>
)

const features = [
  {
    icon: <AiChatIcon className="h-4 w-4 text-gray-300" />,
    tag: 'AI Chat',
    title: 'Chat experience for fast and smart conversations',
    description: 'A conversational AI assistant that understands your questions, provides intelligent answers, and helps you get things done fast from casual chats to complex tasks.',
    mockup: <ChatMockup />
  },
  {
    icon: <TimeManagementIcon className="h-4 w-4 text-gray-300" />,
    tag: 'AI Assistant',
    title: 'Save educators time with auto-marking',
    description: 'Let the AI schedule meetings, set reminders, and automatically attach relevant files. Save time and stay better organized with intelligent and context aware planning.',
    mockup: <div className="w-full h-full bg-green-500/10 border border-green-400/20 rounded-2xl"></div>
  },
  {
    icon: <TranscriptionIcon className="h-4 w-4 text-gray-300" />,
    tag: 'AI Transcription',
    title: 'Audio transcription for fast and accurate text',
    description: 'Automatically convert speech into accurate, editable text in real time. Perfect for meetings, interviews, voice notes, and more, powered by advanced speech recognition technology.',
    mockup: <div className="w-full h-full bg-purple-500/10 border border-purple-400/20 rounded-2xl"></div>
  }
];

const ProductFeatures: React.FC = () => {
  return (
    <section className="py-24 md:py-32 space-y-32">
      {features.map((feature, index) => (
        <div key={index} className="max-w-6xl mx-auto px-4">
          <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
            <div className="md:w-1/2">
              <div className="flex items-center space-x-2 mb-4">
                {feature.icon}
                <span className="text-sm font-medium text-gray-300">{feature.tag}</span>
              </div>
              <h2 className="font-space-grotesk text-3xl md:text-5xl font-medium text-white leading-tight mb-6">
                {feature.title}
              </h2>
              <p className="text-gray-400 mb-8 max-w-md">{feature.description}</p>
              <button className="border border-gray-600 text-gray-300 font-medium px-5 py-2.5 rounded-full hover:border-white hover:text-white transition-all text-sm">
                Get started
              </button>
            </div>
            <div className="md:w-1/2 w-full aspect-square">
              {feature.mockup}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductFeatures;
   