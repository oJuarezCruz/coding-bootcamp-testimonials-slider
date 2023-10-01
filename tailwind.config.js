/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter'
      },
      colors: {
        txtBold: 'hsl(240, 38%, 20%)',
        txtMedium: 'hsl(240, 18%, 77%)'
      },
      backgroundImage: {
        patternBg: "url('/src/images/pattern-bg.svg')",
        patternQuotes: "url('/src/images/pattern-quotes.svg')"
      }
    },
  },
  plugins: [],
}

