/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        blue: "#27AAE1", //B500
        silver: "#A7A9AC", //S400
        white: colors.white,
        black: colors.black,
        // old color, to be removed
        darkest: "#041116",
        darker: "#10445A",
        dark: "#1B779E",
        DEFAULT: "#27AAE1",
        light: "#68C4EA",
        lighter: "#A9DDF3",
        lightest: "#E9F7FC",
      },
      secondary: {
        eden: "#245A52",
        sandwisp: "#EEE8A9",
        // old color, to be removed
        darkest: "#111111",
        darker: "#434445",
        dark: "#757678",
        DEFAULT: "#A7A9AC",
        light: "#C1C3C5",
        lighter: "#DCDDDE",
        lightest: "#F6F6F7",
      },
      tertiary: {
        jellybean: "#0086A9",
        goldentainoi: "#FFC647",
        affair: "#754C7F",
        conifer: "#8BDA52",
        punch: "#DB3920",
        neoncarrot: "#FF9A42",
        bermuda: "#71E0D0",
      },
      emphasis: {
        high: "#BFE5F8", //B200
        body: "#27AAE1", //B500
        medium: "#1181B8", //B600
        low: "#0F6895", //B700
        barely: "#134967", //B900
      },
      background: {
        base: "#353536", //S950
        top: "#134967", //B900
        box: "#10587C", //B800
        white: "#FFFFFF",
      },
      status: {
        success: "#1CC66B",
        warning: "#FFD504",
        danger: "#FC2F19",
        info: "#218FFF",
      },
      bluetint: {
        950 : "#0D2F44",
        900 : "#134967",
        800 : "#10587C",
        700 : "#0F6895",
        600 : "#1181B8",
        500 : "#27AAE1",
        400 : "#46BAEA",
        300 : "#86D2F3",
        200 : "#BFE5F8",
        100 : "#E2F2FC",
        50 : "#F1F9FE",
      },
      silvertint: {
        950 : "#353536",
        900 : "#525356",
        800 : "#646569",
        700 : "#78797D",
        600 : "#85878B",
        500 : "#96989B",
        400 : "#A7A9AC",
        300 : "#C6C8CA",
        200 : "#DEDEDF",
        100 : "#ECECED",
        50 : "#F7F7F7",
      },
      // below this is all old color, to be removed
      black: colors.black,
      white: colors.white,
      body: '#242424',
      dark: "#221F1F",
      success: "#2AD79D",
      danger: "#FF341C",
    },
    fontSize: {
      displaylarge: ["2.625rem", "2.875rem"], //42px
      "h1": ["2rem", "2.25rem"], //32px
      "h2": ["1.75rem", "2rem"], //28px
      "h3": ["1.5rem", "2rem"], //24px
      "h4": ["1.25rem", "1.5rem"], //20px
      "h5": ["1rem", "1.25rem"], //16px
      "h6": ["0.75rem", "1rem"], //12px
      xl: ["1.25rem", "1.5rem"], //20px
      lg: ["1.125rem", "1.375rem"], //18px
      base: ["1rem", "1.25rem"], //16px
      sm: ["0.875rem", "1.125rem"], //14px
      xs: ["0.75rem", "1rem"], //12px   
    },
    width: {
      0: 0,
      0.25: "0.25rem",      
      1: "1rem",
      1.25: "1.25rem",
      1.5: "1.5rem",      
      1.75: "1.75rem",
      2: "2rem",
      2.5: "2.5rem",
      3.5: "3.5rem",
      "thumbnail": "80px",
      "container": "400px",
      auto: "auto",
      full: "100%",
      screen: "100vw",
    },
    height: {
      0: 0,
      0.25: "0.25rem",      
      1: "1rem",
      1.5: "1.5rem",      
      1.75: "1.75rem",
      2: "2rem",
      2.5: "2.5rem",
      3.5: "3.5rem",
      "photo": "10rem",
      auto: "auto",
      full: "100%",
      screen: "100vh",
    },
    spacing: {
      0: "0",
      0.25: "0.25rem",
      0.5: "0.5rem",
      0.75: "0.75rem",
      1: "1rem",
      1.5: "1.5rem",
      1.75: "1.75rem",
      2: "2rem",
      3: "3rem",
      4: "4rem",
    },
    extend: {},
  },
  plugins: [],
}
