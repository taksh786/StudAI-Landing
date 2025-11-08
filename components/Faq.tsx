
import React, { useState } from 'react';
import { PlusIcon } from './Icons';

const faqItems = [
  {
    question: 'Is my data safe with your platform?',
    answer: 'Yes, we use end-to-end encryption and follow industry best practices to ensure your data is secure. Our infrastructure is built on top of leading cloud providers with robust security measures.'
  },
  {
    question: 'What kind of customer support do you offer?',
    answer: 'We offer 24/7 email support for all our plans. For enterprise customers, we provide dedicated account managers and priority phone support to ensure you get the help you need, when you need it.'
  },
  {
    question: 'How does the pricing for your web solution work?',
    answer: 'Our pricing is based on a tiered subscription model. We have plans for individuals, small teams, and large enterprises. You can choose a plan that best fits your needs and scale up as you grow.'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Absolutely. You can cancel your subscription at any time from your account dashboard. Your subscription will remain active until the end of the current billing period.'
  },
    {
    question: 'Can I upgrade or downgrade my subscription plan?',
    answer: 'Yes, you can easily upgrade or downgrade your plan at any time. Changes will be prorated, and you will only be charged for what you use.'
  },
];

const AccordionItem: React.FC<{ item: typeof faqItems[0] }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full flex justify-between items-center text-left py-6"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white">{item.question}</span>
        <PlusIcon className={`h-5 w-5 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="pb-6 text-gray-400 max-w-2xl">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-space-grotesk text-3xl md:text-5xl text-center font-medium text-white mb-16">
          We've got answers
        </h2>
        <div>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
   