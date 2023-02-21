/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
           screens: {
            'sM': '375px',
            // => @media (min-width: 375px) { ... }
      
            'mM': '425px',
            // => @media (min-width: 425px) { ... }
        },
        },
       
      },
    plugins: [],
  }