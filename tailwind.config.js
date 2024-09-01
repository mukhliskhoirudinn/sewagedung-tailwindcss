/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      container: {
         center: true,
         padding: "16px",
      },
      extend: {
         screens: {
            "2xl": "1320px",
         },
         fontFamily: {
            poppins: "Poppins",
         },
         colors: {
            putih: "#EEEEEE",
            hitamDark: "#3C3C3C",
            hijau: "#31B380",
            orange: "#FFB822",
            abu: "#7F7F7F",
            hijauMuda: "#E7FFF6",
         },
      },
   },
   plugins: [],
};
