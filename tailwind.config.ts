import type { Config } from 'tailwindcss'

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          25: '#e5ebec',
          50: '#ccd8da',
          100: '#b4c4c7',
          200: '#9bb1b5',
          300: '#6c8c92',
          400: '#547a81',
          500: '#245860',
          600: '#004c56',
          700: '#014750',
          800: '#013d44',
          900: '#013239',
          950: '#00282e',
          yellow: '#F1C400'
        }
      },
      backgroundColor: {
        active: 'var(--colors-gray-light-mode-50)',
        'brand-primary': 'var(--colors-brand-50)',
        'brand-primary-alt': 'var(--colors-brand-50)',
        'brand-secondary': 'var(--colors-brand-100)',
        'brand-section': 'var(--colors-brand-800)',
        'brand-section-subtle': 'var(--colors-brand-700)',
        'brand-solid': 'var(--colors-brand-600)',
        'brand-solid-hover': 'var(--colors-brand-700)',
        disabled: 'var(--colors-gray-light-mode-100)',
        'disabled-subtle': 'var(--colors-gray-light-mode-50)',
        'error-primary': 'var(--colors-error-50)',
        'error-secondary': 'var(--colors-error-100)',
        'error-solid': 'var(--colors-error-600)',
        'error-hover': 'var(--colors-error-700)',
        overlay: 'var(--colors-gray-light-mode-950)',
        primary: 'var(--colors-base-white)',
        'primary-solid': 'var(--colors-gray-light-mode-950)',
        'primary-alt': 'var(--colors-base-white)',
        'primary-hover': 'var(--colors-gray-light-mode-50)',
        quaternary: 'var(--colors-gray-light-mode-200)',
        secondary: 'var(--colors-gray-light-mode-50)',
        'secondary-solid': 'var(--colors-gray-light-mode-600)',
        'secondary-alt': 'var(--colors-gray-light-mode-50)',
        'secondary-hover': 'var(--colors-gray-light-mode-100)',
        'secondary-subtle': 'var(--colors-gray-light-mode-25)',
        'success-primary': 'var(--colors-success-50)',
        'success-secondary': 'var(--colors-success-100)',
        'success-solid': 'var(--colors-success-600)',
        info: 'var(--colors-blue-light-50)',
        tertiary: 'var(--colors-gray-light-mode-100)',
        'warning-primary': 'var(--colors-warning-50)',
        'warning-secondary': 'var(--colors-warning-100)',
        'warning-solid': 'var(--colors-warning-600)'
      },
      borderColor: {
        brand: 'var(--colors-brand-300)',
        'brand-solid': 'var(--colors-brand-600)',
        'brand-solid-alt': 'var(--colors-brand-600)',
        disabled: 'var(--colors-gray-light-mode-300)',
        'disabled-subtle': 'var(--colors-gray-light-mode-200)',
        error: 'var(--colors-error-300)',
        'error-solid': 'var(--colors-error-600)',
        'error-hover': 'var(--colors-error-700)',
        success: 'var(--colors-success-300)',
        warning: 'var(--colors-warning-300)',
        info: 'var(--colors-blue-light-200)',
        primary: 'var(--colors-gray-light-mode-300)',
        secondary: 'var(--colors-gray-light-mode-200)',
        tertiary: 'var(--colors-gray-light-mode-100)'
      },
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      textColor: {
        'brand-primary-900': 'var(--colors-brand-900)',
        'brand-secondary-700': 'var(--colors-brand-700)',
        'brand-tertiary-600': 'var(--colors-brand-600)',
        'brand-tertiary-alt': 'var(--colors-brand-600)',
        disabled: 'var(--colors-gray-light-mode-500)',
        error: 'var(--colors-error-600)',
        info: 'var(--colors-blue-light-600)',
        placeholder: 'var(--colors-gray-light-mode-400)',
        'placeholder-subtle': 'var(--colors-gray-light-mode-300)',
        'primary-900': 'var(--colors-gray-light-mode-900)',
        'primary-on-brand': 'var(--colors-base-white)',
        'quaternary-500': 'var(--colors-gray-light-mode-500)',
        'quaternary-on-brand': 'var(--colors-brand-300)',
        'secondary-700': 'var(--colors-gray-light-mode-700)',
        'secondary-hover': 'var(--colors-gray-light-mode-800)',
        'secondary-on-brand': 'var(--colors-brand-200)',
        'success-primary-600': 'var(--colors-success-600)',
        'tertiary-600': 'var(--colors-gray-light-mode-600)',
        'tertiary-hover': 'var(--colors-gray-light-mode-700)',
        'tertiary-on-brand': 'var(--colors-brand-200)',
        'warning-400': 'var(--colors-warning-400)',
        'warning-primary-600': 'var(--colors-warning-600)',
        white: 'var(--colors-base-white)'
      }
    }
  },
  animation: {
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out'
  },
  keyframes: {
    'accordion-down': {
      from: { height: '0' },
      to: { height: 'var(--radix-accordion-content-height)' }
    },
    'accordion-up': {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: '0' }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
