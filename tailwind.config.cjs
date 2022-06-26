/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'blueDeep': '#00204A',
      'blueLight': '#005792',
      'blueLighter': '#00BBF0',
      'altBlue': '#F5FDFF',
      'yellow': '#FDB44B',
      'altYellow': '#FFF5E6',
    },
    extend:{
      scale: {
        flip: '-1', //added so I can flip the text on the sides
      },
    },
    fontFamily: {
      hammersmith: ['"Hammersmith One"', 'sans-serif'], //for heading
      ibmplex: ['"IBM Plex Serif"', 'serif'] //for body elements
    },
  },
  plugins: [],
}