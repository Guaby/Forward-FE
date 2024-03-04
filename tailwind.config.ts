import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        'mobile': '500px',
        '4k':'36rem' // Replace 'custom' with your desired class name and '500px' with your desired height value
      },
      maxHeight: {
        'medium': '38rem',
        'lg': '46rem',
        'xl': '52rem',
        'huge': '80rem'
      },
      screens: {
        '3xl': '2040px',
        // => @media (min-width: 992px) { ... }
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '18': 'repeat(18, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
};
export default config;
