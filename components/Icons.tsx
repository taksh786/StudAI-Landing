import React from 'react';

export const StudAILogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <defs>
      <path id="osmiq-arm" d="M -1.2 -11 C -3 -11 -3 -8 -1.2 -8 L -1.2 0 L 1.2 0 L 1.2 -8 C 3 -8 3 -11 1.2 -11 Z" />
    </defs>
    <g transform="translate(12 12)">
      <use href="#osmiq-arm" />
      <use href="#osmiq-arm" transform="rotate(45)" />
      <use href="#osmiq-arm" transform="rotate(90)" />
      <use href="#osmiq-arm" transform="rotate(135)" />
      <use href="#osmiq-arm" transform="rotate(180)" />
      <use href="#osmiq-arm" transform="rotate(225)" />
      <use href="#osmiq-arm" transform="rotate(270)" />
      <use href="#osmiq-arm" transform="rotate(315)" />
    </g>
  </svg>
);

export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const FieldLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 20" fill="currentColor" {...props}>
        <text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">Field</text>
    </svg>
);
export const OrbitcLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 20" fill="currentColor" {...props}>
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <text x="25" y="15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">Orbitc</text>
  </svg>
);
export const CloudcLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 20" fill="currentColor" {...props}>
    <path d="M 10 15 A 8 8 0 0 1 26 15 L 75 15 A 8 8 0 0 1 90 10 A 8 8 0 0 1 75 5 L 26 5 A 8 8 0 0 1 10 15 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <text x="30" y="15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">Cloudc</text>
  </svg>
);
export const AmsterdamLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 20" fill="currentColor" {...props}>
    <text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">Amsterdam</text>
  </svg>
);

export const FeatureIcon1 = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" {...props}><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path><path d="M16.5 12c0-2.485-2.015-4.5-4.5-4.5S7.5 9.515 7.5 12s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5z"></path></svg>
);
export const FeatureIcon2 = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" {...props}><path d="M3 12h18M3 6h18M3 18h18"></path></svg>
);
export const FeatureIcon3 = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" {...props}><path d="M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"></path><path d="M7 11l5 3 5-3"></path></svg>
);
export const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);
export const AiChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" {...props}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path></svg>
);
export const TimeManagementIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);
export const TranscriptionIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" {...props}><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"></path><path d="M19 10v2a7 7 0 01-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
);

export const VoiceIntelligenceIcon = (props: React.SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-14 0m7 10v1M12 18h.01M10 21h4"></path></svg>;
export const VideoAiIcon = (props: React.SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>;
export const ImageGenerationIcon = (props: React.SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1-1m5-5l2 2"></path><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>;
export const TextEditorIcon = (props: React.SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>;
export const SecureByDesignIcon = (props: React.SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12 12 0 0012 21.697a12 12 0 008.618-3.742A11.955 11.955 0 0117.618 7.984z"></path></svg>;
export const SmartAssistantIcon = (props: React.SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>;
export const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>;

export const CloudLogo = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 100 20" {...props}><path d="M15.3,2.4C12,2.4,9.2,4.7,8.5,8c-3.1-0.2-5.7,2.3-5.7,5.4c0,3,2.4,5.4,5.4,5.4h14.7c2.4,0,4.3-1.9,4.3-4.3c0-2.1-1.5-3.8-3.5-4.2C23.2,5.2,19.6,2.4,15.3,2.4z"></path><text x="35" y="15" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">Cloud</text></svg>;
export const ProlineLogo = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 100 20" {...props}><path d="M10,2 L10,18 L15,18 L15,10 L20,10 L20,18 L25,18 L25,2 Z"></path><text x="35" y="15" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">Proline</text></svg>;

const PlaceholderIntegrationIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
);
export const IntegrationIcons = Array(20).fill(PlaceholderIntegrationIcon);

export const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>;
export const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>;

export const CookieIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M21.31,10.68,19.46,8.83a2.53,2.53,0,0,0-3.58,0,2.53,2.53,0,0,0,0,3.58l1.85,1.85a7.1,7.1,0,0,1-1.61,1.17,7.15,7.15,0,0,1-2.2.57,7.21,7.21,0,1,1,5.2-12.43A7.12,7.12,0,0,1,21.31,10.68ZM10,10.25a1.25,1.25,0,1,0-1.25-1.25A1.25,1.25,0,0,0,10,10.25Zm-3,3a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,7,13.25Zm3-7a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,10,6.25Zm4,4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,14,10.25Z"/>
    </svg>
);

export const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
    </svg>
);

export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
    </svg>
);

export const MessageCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
);