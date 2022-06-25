/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,js,svelte,ts}'],
  },
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'blueDeep': '#00204A',
      'blueLight': '#005792',
      'blueLighter': '#00BBF0',
      'yellow': '#FDB44B',
    },
    fontFamily: {
      hammersmith: ['"Hammersmith One"', 'sans-serif'], //for heading
      ibmplex: ['"IBM Plex Serif"', 'serif'] //for body elements
    },
  },
  plugins: [],
}