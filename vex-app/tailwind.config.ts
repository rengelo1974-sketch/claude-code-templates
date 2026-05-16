import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'deco-gold': '#D4A853',
        'deco-amber': '#C8860A',
        'deco-brass': '#8B6914',
        'cave-black': '#050403',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.8' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.6' },
          '97%': { opacity: '1' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pulse_glow: {
          '0%, 100%': { boxShadow: '0 0 4px rgba(212,168,83,0.3)' },
          '50%': { boxShadow: '0 0 12px rgba(212,168,83,0.7)' },
        },
      },
      animation: {
        flicker: 'flicker 8s infinite',
        scanline: 'scanline 6s linear infinite',
        pulse_glow: 'pulse_glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
