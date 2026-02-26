import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f4',
        sand: {
          light: '#f5f0e8',
          DEFAULT: '#e8dfd2',
          dark: '#c4b49a',
        },
        gold: {
          warm: '#b69a6a',
          deep: '#97794a',
          champagne: '#d4c5a9',
        },
        ocean: {
          light: '#2ba5b5',
          DEFAULT: '#1a7a8a',
          deep: '#0d5f6e',
        },
        lagoon: '#48b5c4',
        navy: '#1a2f3a',
        charcoal: '#2c3e42',
        'prose-dark': '#2a2a28',
        'prose-mid': '#5a5a55',
        'prose-light': '#8a8a82',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Raleway', 'Helvetica Neue', 'sans-serif'],
      },
      maxWidth: {
        content: '1400px',
      },
    },
  },
  plugins: [],
}
export default config
