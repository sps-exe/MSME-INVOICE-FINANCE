/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        msme: {
          background: 'var(--color-background)',
          surface: 'var(--color-surface)',
          text: {
            primary: 'var(--color-text-primary)',
            secondary: 'var(--color-text-secondary)',
          },
          accent: {
            DEFAULT: 'var(--color-accent)',
            hover: 'var(--color-accent-hover)',
          },
          border: 'var(--color-border)',
        }
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      keyframes: {
        warp: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(2%, 2%) rotate(2deg)' },
          '50%': { transform: 'translate(-2%, 4%) rotate(-1deg)' },
          '75%': { transform: 'translate(-1%, -1%) rotate(1deg)' },
        },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        'warp-slow': 'warp 8s ease-in-out infinite',
        'warp-slower': 'warp 12s ease-in-out infinite reverse',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-up': 'fade-up 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}
