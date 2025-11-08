
import React from 'react';

export const StudAILogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5zM2 12l10 5 10-5-10-5-10 5z" />
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

   