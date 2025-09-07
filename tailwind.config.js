module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      spacing: {
        big: '48rem',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      mycolor: '#555',
    },
    fontFamily: {
      nunito: ['Nunito', 'sans - serif'],
    },
  },
  plugins: [],
};
