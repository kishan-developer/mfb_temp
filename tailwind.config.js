/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        '1': '0.01em',  // 1% letter-spacing
        '2': '0.02em',  // 2% letter-spacing
        '3': '0.03em',  // 3% letter-spacing
        '4': '0.04em',  // 4% letter-spacing
        '5': '0.05em',  // 5% letter-spacing
        '6': '0.06em',  // 6% letter-spacing
        '7': '0.07em',  // 7% letter-spacing
        '8': '0.08em',  // 8% letter-spacing
        '9': '0.09em',  // 9% letter-spacing
        '10': '0.10em', // 10% letter-spacing
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        ESDokument: ['ESDokument', 'sans-serif'], // Custom font
        Spezia: ['Spezia', 'sans-serif'], 
      },
    },
    
    fontFamily: {
      body: ['ES Dokument', 'sans-serif'],
    },
  },
  plugins: [],
};
