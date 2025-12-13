/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          dark: '#0f1f38',
          light: '#2d5280',
        },
        secondary: {
          DEFAULT: '#4a5568',
          dark: '#2d3748',
          light: '#718096',
        },
        midnight: {
          DEFAULT: '#003366',
          dark: '#002147',
          light: '#004080',
        },
        ocean: {
          DEFAULT: '#0077b6',
          dark: '#005f8a',
          light: '#0096e0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.700'),
            h2: {
              color: theme('colors.midnight.DEFAULT'),
              fontWeight: '700',
              marginTop: '2.5rem',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.midnight.DEFAULT'),
              fontWeight: '600',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            p: {
              marginBottom: '1.5rem',
              lineHeight: '1.75',
            },
            li: {
              marginBottom: '0.5rem',
            },
            strong: {
              color: theme('colors.midnight.DEFAULT'),
              fontWeight: '600',
            },
            a: {
              color: theme('colors.ocean.DEFAULT'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            table: {
              width: '100%',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              borderCollapse: 'collapse',
            },
            th: {
              backgroundColor: theme('colors.gray.50'),
              padding: '0.75rem',
              fontWeight: '600',
              textAlign: 'left',
              borderBottomWidth: '2px',
              borderBottomColor: theme('colors.gray.200'),
            },
            td: {
              padding: '0.75rem',
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.gray.200'),
            },
            ul: {
              paddingLeft: '1.5rem',
            },
            ol: {
              paddingLeft: '1.5rem',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
