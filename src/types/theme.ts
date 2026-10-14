export type ThemeId = 'dunkerley' | 'bowser' | 'beach' | 'yoshi' | 'choco' | 'classic';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  palette: {
    bg: string;
    surface: string;
    accent: string;
    accentSecondary: string;
    text: string;
  };
  metaColor: string;
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  dunkerley: {
    id: 'dunkerley',
    name: 'Dunkerley Void',
    palette: {
      bg: '#090a13',
      surface: '#111424',
      accent: '#3b82f6',
      accentSecondary: '#60a5fa',
      text: '#f8fafc',
    },
    metaColor: '#090a13',
  },
  bowser: {
    id: 'bowser',
    name: "Bowser's Castle",
    palette: {
      bg: '#120d24',
      surface: '#1d163a',
      accent: '#a855f7',
      accentSecondary: '#ec4899',
      text: '#faf5ff',
    },
    metaColor: '#120d24',
  },
  beach: {
    id: 'beach',
    name: 'Koopa Beach',
    palette: {
      bg: '#05181e',
      surface: '#0c2731',
      accent: '#14b8a6',
      accentSecondary: '#2dd4bf',
      text: '#f0fdfa',
    },
    metaColor: '#05181e',
  },
  yoshi: {
    id: 'yoshi',
    name: 'Yoshi Valley',
    palette: {
      bg: '#08170e',
      surface: '#0f291a',
      accent: '#10b981',
      accentSecondary: '#34d399',
      text: '#ecfdf5',
    },
    metaColor: '#08170e',
  },
  choco: {
    id: 'choco',
    name: 'Choco Mountain',
    palette: {
      bg: '#171210',
      surface: '#271e1a',
      accent: '#f59e0b',
      accentSecondary: '#fbbf24',
      text: '#fffbeb',
    },
    metaColor: '#171210',
  },
  classic: {
    id: 'classic',
    name: 'Classic Paper',
    palette: {
      bg: '#f8f9fa',
      surface: '#e9ecef',
      accent: '#2563eb',
      accentSecondary: '#0284c7',
      text: '#0f172a',
    },
    metaColor: '#f8f9fa',
  },
};
