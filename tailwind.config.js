/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        xs:'375px',
        xxl:'1536px'
      },
      // colors:{
      //   primary:{
      //     dark:'#CC00CC',
      //     DEFAULT:'rebeccapurple'
      //   }
      // }
      colors(theme) {
        return {
          primary: {
            ...theme.colors.purple,
            DEFAULT: theme.colors.purple[500],
            dark:"#CC00CC"
          },
        };
      },
    },
  },
  plugins: [],
};
