/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     './app/**/*.{ts,tsx}',
     './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#0a0a08',
          surface: '#111110',
          elevated: '#1a1a17',
          card: '#151513',
        },
        text: {
          primary: '#f5f0e8',
          secondary: '#a8a29e',
          muted: '#6b6560',
        },
        accent: {
          DEFAULT: '#d4a057',
          light: '#e8c48a',
          dark: '#b8874a',
          glow: 'rgba(212, 160, 87, 0.15)',
        },
        border: 'rgba(245, 240, 232, 0.08)',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        sidebar: '20rem',
      },
      spacing: {
        'sidebar': '20rem',
      },
    },
  },
  plugins: [],
};
