/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
            boxShadow:{
                "bold":["inset 2px 2px 2px #777","inset -2px -2px 2px #777"],
                "head":"0px 2px 2px #000",
                primary:["2px 2px 2px #000","-2px -2px 2px #000"]
            },
            fontFamily:{
                head:['Hanalei Fill', "cursive"]
            }
      },
  },
  plugins: [],
})