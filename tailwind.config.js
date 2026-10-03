module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FDFBF7',
          rose: '#E2A9A0',
          rosedark: '#C8887F',
          sage: '#B5C99A',
          charcoal: '#222222',
          softbg: '#FAFAFA',
          roseplus: '#F1998D'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        title: ['Playfair Display', 'serif']
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite'
      }
    }
  },
  plugins: []
}