/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        myTeal: '#00C4D4',
        lightgreen: '#E7F740',
        myindigo: '#4F56F6',
        myindigo2: '#4045C3',
        hotpink: '#F11AA8',
        mywhite: '#FAFAFA',
        navy: '#0D052E',
        gradient:'linear-gradient(to right, #4F56F6, #F11AA)',
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(to right, #4F56F6, #F11AA)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
