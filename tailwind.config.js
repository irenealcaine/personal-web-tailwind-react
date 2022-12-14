/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'caveat': ['Caveat', 'sans-serif'],
      },
      animation: {
        blob: "blob 7s infinite",
        wiggle: 'wiggle 0.3s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "20%": {
            transform: "translate(15px, 15px) scale(1.1)"
          },
          "40%": {
            transform: "translate(20px, -10px) scale(0.9)"
          },
          "60%": {
            transform: "translate(-15px, 30px) scale(1.05)"
          },
          "80%": {
            transform: "translate(-5px, 20px) scale(0.95)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
