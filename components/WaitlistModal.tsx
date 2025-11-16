import React, { useState, useEffect } from 'react';
import { CloseIcon } from './Icons';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Reset form when modal opens
    if (isOpen) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setEmailError('');
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim().toLowerCase().endsWith('@gmail.com')) {
      setEmailError('Please enter a valid Gmail address.');
      return;
    }
    setEmailError('');
    console.log('Submitted:', { firstName, lastName, email });
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-md m-4 bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors" aria-label="Close modal">
          <CloseIcon className="h-6 w-6" />
        </button>

        {isSubmitted ? (
            <div className="text-center py-8">
                <h2 className="font-space-grotesk text-2xl font-bold mb-4">Thank You!</h2>
                <p className="text-gray-300">You've been added to the waitlist. We'll notify you when we launch.</p>
            </div>
        ) : (
            <>
                <h2 className="font-space-grotesk text-3xl font-bold mb-2 text-center">Join the waitlist</h2>
                <p className="text-center text-gray-300 mb-8 max-w-sm mx-auto">
                You're Early and That’s Genius. Join the waitlist for first access to Osmiq AI’s launch.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <label htmlFor="firstName" className="sr-only">First name</label>
                        <input
                            id="firstName"
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="lastName" className="sr-only">Last name</label>
                        <input
                            id="lastName"
                            type="text"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (emailError) setEmailError('');
                        }}
                        required
                        className={`w-full bg-gray-800/50 border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-blue-500'}`}
                    />
                    {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                    Get notified
                </button>
                </form>
            </>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;