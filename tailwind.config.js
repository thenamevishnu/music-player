/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        boxShadow:{
          "shadow-bold":["inset 1px 1px 1px #777","inset -1px -1px 1px #777"]
        }
    },
  },
  plugins: [],
})