// Source - https://stackoverflow.com/a/76754235
// Posted by Wongjn
// Retrieved 2026-03-25, License - CC BY-SA 4.0

tailwind.config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': {
            'border-color': 'transparent'
          },
          '50%': {
            'border-color': 'white'
          },
        },
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
      },
    },
  },
}