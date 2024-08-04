import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {  // your preferred purple color
        opacity: {
          40: 'rgba(0, 0, 0, 0.8)',
        },
        
        black: '#000000',
        white: '#FFFFFF',
        purple: {
          50: "#F2EAFA",
          100: "#E4D4F4",
          200: "#C9A9E9",
          300: "#AE7EDE",
          400: "#9353D3",
          500: "#7828C8",
          600: "#6020A0",
          700: "#481878",
          800: "#301050",
          900: "#180828",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
