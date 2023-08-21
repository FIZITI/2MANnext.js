import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'lg': {'max': '1799px'},
        'lgl': {'max': '1450px'},
        'dmd': {'max': '1300px'},
        'md': {'max': '1284px'},
        'mmd': {'max': '1284px'},
        'mdh': {'max': '1096px'},
        'hm': {'max': '1019px'},
        'lmd': {'max': '980px'},
        'lpl': {'max': '899px'},
        'pa': {'max': '830px'},
        'pl': {'max': '649px'},
        'ppl': {'max': '520px'},
        'sm': {'max': '480px'},
        'lsm': {'max': '479px'},
        'bb': {'max': '440px'},
        'ssm': {'max': '400px'},
        'slm': {'max': '330px'},
      },
    },
  },
  plugins: []
};

export default config;