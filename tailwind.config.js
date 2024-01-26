const { parkwindPlugin } = require('@park-ui/tailwind-plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {},
  },
  plugins: [parkwindPlugin],
}

