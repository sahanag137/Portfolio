/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF8F5',
          dark: '#F4F1EA',
          card: '#FFFFFF',
          subtle: '#EEEBE1',
        },
        graphite: {
          DEFAULT: '#1C1C1E',
          soft: '#2A2A2E',
          deep: '#0F0F10',
        },
        pencil: {
          DEFAULT: '#5A5A5E',
          light: '#8E8E93',
          faint: '#C7C7CC',
          shade: '#D1CDC2',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'sketch': '3px 4px 0px 0px #1C1C1E',
        'sketch-lg': '5px 6px 0px 0px #1C1C1E',
        'sketch-subtle': '2px 2px 0px 0px #8E8E93',
        'inner-sketch': 'inset 0 2px 4px 0 rgba(28, 28, 30, 0.06)',
      },
      borderRadius: {
        'sketch': '255px 15px 225px 15px/15px 225px 15px 255px',
      }
    },
  },
  plugins: [],
}
