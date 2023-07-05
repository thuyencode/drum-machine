/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'drum-pad-clicked',
    'drum-pad-notclicked',
    'switch-container-on',
    'switch-container-off',
    'switch-on',
    'switch-off'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
