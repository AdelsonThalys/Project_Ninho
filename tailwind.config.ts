/** @type {import ('tailwindcss').Config  */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        dark: "#212529",
        gradientPurple: "#6a11cb",
        gradientBlue: "#2575fc",
        corFundo: "#9C9FBF"
      }
      
      
    },
  },
  plugins: [],
}
export default config
