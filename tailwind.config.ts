import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      // Configure your color palette here
      onyx: '#474448',
      white: '#ffffff',
      gray: '#848C8E',
      purple: '#9730db',
      black: '#272932',
      keppel: '#1ac5b0',
      blue: '#37ebf3',
      yellow: '#fdf500',
      pink: '#e455ae',
      ['smoky-black']: '#0e1212',
      ['steel-pink']: '#cb1dcd',
      ['pale-silver']: '#d1c5c0',
      green: '#06D6A0',
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1.5rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        // '2xl': '1496px',
      },
    },
  },
  plugins: [],
};
export default config;
