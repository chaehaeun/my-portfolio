/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'sans-serif',
        ],
        solano: ['solano-gothic-pro-mvb', 'sans-serif'],
      },
      colors: {
        dayContent: '#333333',
        dayBackground: '#FAFAFA',
        dayGray: '#3F3F3F',
        nightContent: '#E0E0E0',
        nightBackground: '#0A192F',
        dayPoint: '#4E1AC3',
        dayPointHover: '#2C087B',
        nightPoint: '#64FFDA',
        nightPointHover: '#5BD2B6',
      },
      boxShadow: {
        wrap: '4px 4px #000',
        wrapDark: '4px 4px #fff',
      },
    },
  },
  plugins: [],
}
