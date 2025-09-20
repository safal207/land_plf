// 📁 src/utils/constants.ts
// All constants, colors, and static data for LIMINAL

import type { FeatureData, StoryData, StatData, ColorScheme } from '../types';

/**
 * Application color scheme
 */
export const COLORS: ColorScheme = {
  primary: '#00ffee',
  secondary: '#ff59a5', 
  accent: '#c6fff7',
  dark: '#181818',
  background: '#0f0f0f'
} as const;

/**
 * Characters for Matrix rain
 */
export const MATRIX_CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

/**
 * Animation settings
 */
export const ANIMATION_CONFIG = {
  PARTICLE_COUNT: 50,
  PARTICLE_SPEED: 6,
  MATRIX_INTERVAL: 200,
  CLOCK_UPDATE_INTERVAL: 10,
  HEART_ANIMATION_DURATION: 3000,
  FADE_IN_DURATION: 800
} as const;

/**
 * Data for feature cards
 */
export const FEATURES_DATA: FeatureData[] = [
  {
    icon: '🚀',
    title: 'Lightning Deploy',
    description: 'Deploy AI models in seconds, not hours. Our quantum-optimized infrastructure reduces deployment time by 90%.',
    benefit: 'Average deployment: 12 seconds vs industry 2 hours',
    iconClass: 'rocket'
  },
  {
    icon: '⚡',
    title: 'Quantum Speed',
    description: 'Experience breakthrough performance with our quantum-enhanced processing cores and neural acceleration.',
    benefit: 'Performance boost: 15x faster inference',
    iconClass: 'lightning'
  },
  {
    icon: '🛡️',
    title: 'Fortress Security',
    description: 'Military-grade encryption and AI-powered threat detection keep your models and data absolutely secure.',
    benefit: 'Security rating: ISO 27001 + SOC 2 certified',
    iconClass: 'shield'
  },
  {
    icon: '💎',
    title: 'Crystal Scaling',
    description: 'Seamlessly scale from prototype to production with our adaptive resource allocation technology.',
    benefit: 'Auto-scaling: 0-100K requests/sec in 3 seconds',
    iconClass: 'crystal'
  },
  {
    icon: '🎯',
    title: 'Precision Analytics',
    description: 'Deep insights into your AI performance with real-time monitoring and predictive optimization.',
    benefit: 'Accuracy improvement: Up to 23% better model performance',
    iconClass: 'target'
  },
  {
    icon: '🌟',
    title: 'Infinite Potential',
    description: 'Break the boundaries of what\'s possible with our cutting-edge AI infrastructure platform.',
    benefit: 'Innovation rate: 3x faster time-to-market',
    iconClass: ''
  }
];

/**
 * Customer success stories
 */
export const STORIES_DATA: StoryData[] = [
  {
    quote: 'LIMINAL transformed our AI deployment pipeline. We went from 2-week deployments to minutes. The quantum acceleration is mind-blowing!',
    author: {
      name: 'Sarah Chen',
      position: 'Lead AI Engineer, TechNova',
      avatar: 'S'
    }
  },
  {
    quote: 'The performance gains are incredible. Our model inference speed increased by 1,400% and costs dropped by 60%. LIMINAL is the future.',
    author: {
      name: 'Marcus Rodriguez',
      position: 'CTO, DataFlow Systems',
      avatar: 'M'
    }
  },
  {
    quote: 'Security was our biggest concern. LIMINAL\'s military-grade protection and zero breaches gave us complete peace of mind.',
    author: {
      name: 'Aisha Patel',
      position: 'Security Director, FinanceAI',
      avatar: 'A'
    }
  }
];

/**
 * Statistical data
 */
export const STATS_DATA: StatData[] = [
  { number: '99.99%', label: 'Uptime Guarantee' },
  { number: '15x', label: 'Faster Performance' },
  { number: '2,847', label: 'Active Developers' },
  { number: '$2.3M', label: 'Cost Savings Generated' }
];

/**
 * CSS selectors
 */
export const SELECTORS = {
  PARTICLES_CONTAINER: '#particles',
  MATRIX_CONTAINER: '#matrixRain',
  CLOCK_TIME: '#clockTime',
  CLOCK_DATE: '#clockDate',
  CLOCK_MS: '#clockMs',
  EMAIL_FORM: '.email-form',
  EMAIL_INPUT: '#emailInput',
  SUBMIT_BUTTON: '.submit-btn',
  SUCCESS_MESSAGE: '#successMessage',
  HEART_BEAT: '.heart-beat',
  HEART_BROKEN: '.heart-broken',
  CLOSE_EYES_BTN: '.close-eyes-btn',
  EYES_OVERLAY: '#eyesClosedOverlay',
  FEATURE_CARDS: '.feature-card',
  STORY_CARDS: '.story-card',
  // Selectors for Feedback Form
  FEEDBACK_FORM: '#feedbackForm',
  FEEDBACK_EMAIL_INPUT: '#feedbackEmailInput',
  FEEDBACK_TYPE_SELECT: '#feedbackTypeSelect',
  FEEDBACK_MESSAGE_TEXTAREA: '#feedbackMessageTextarea',
  FEEDBACK_SUBMIT_BUTTON: '#feedbackSubmitBtn'
} as const;

/**
 * Text constants
 */
export const TEXT = {
  HERO_TITLE: 'AI Infrastructure\nRevolutionized',
  HERO_SUBTITLE: 'Deploy AI Infrastructure 10x Faster with 99.9% Uptime Guarantee',
  BETA_BADGE: '🚀 BETA ACCESS - LIMITED SPOTS',
  CTA_BUTTON: 'Get Beta Access',
  URGENCY_TEXT: 'Only 153 spots remaining • Beta closes in 72 hours',
  EMAIL_PLACEHOLDER: 'Enter your email for beta access',
  SUCCESS_MESSAGE: '❤️ Welcome to the future! Check your email for next steps.',
  ERROR_INVALID_EMAIL: 'Please enter a valid email address',
  ERROR_GENERAL: 'Something went wrong. Please try again.',
  PROCESSING: 'Processing...',
  EYES_CLOSED_TEXT: 'Darkness... silence... peace...',
  OPEN_EYES: 'Open Eyes',
  CLOSE_EYES: 'Close Eyes'
} as const;

/**
 * Regular expressions
 */
export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
} as const;