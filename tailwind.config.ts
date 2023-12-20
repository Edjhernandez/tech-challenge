import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bgrimac1': '#fafbff',
        'textllamanos': '#6464fa',
        'nuevo': '#494F66',
        'tracking': '#FF1C44'
      },
      fontSize: {
        xs2: '0.625rem',
        xl: '1.75rem',
      },
      letterSpacing: {
        wider: '.08em',
        theh1: '-.002em',
        dejanos: '-.008em',
        politicas: '0.0125em'
      },
      boxShadow: {
        'div-juan': '0px 0px 10px 0px rgba(163, 171, 204, 0.12)'
      },
    },
  },
  plugins: [],
}
export default config
