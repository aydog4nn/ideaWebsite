/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html"
  ],
  theme: {
    extend: {
        fontFamily :{
            headersTitle:["Barlow", "sans-serif"],
            nameFont:["Montserrat","sans-serif"]
        },
        colors: {
            "hoverTextColor":"#EAC89A",
            "firstSectionColor":"#252525",
            "secondSectionColor":"#EAC89A",
            "cardColor" : "#121212"
        }
    },
  },
  plugins: [],
}

