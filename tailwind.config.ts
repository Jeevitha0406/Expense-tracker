import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: '#cfcaf3',
        input: '#cfcaf3',
        ring: '#9b87f5',
        background: '#f6f3fd',
        foreground: '#232046',
        primary: {
          DEFAULT: '#9b87f5',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#ede9fa',
          foreground: '#342760'
        },
        card: {
          DEFAULT: '#f8f6fd',
          foreground: '#232046'
        },
        accent: {
          DEFAULT: '#ece4fc',
          foreground: '#3a3162'
        },
        muted: {
          DEFAULT: '#eceafa',
          foreground: '#8276b6'
        },
        destructive: {
          DEFAULT: '#DE528C',
          foreground: '#fff'
        },
        sidebar: {
          DEFAULT: '#f4f0fb',
          foreground: '#3d3272',
          primary: '#9b87f5',
          'primary-foreground': '#fff'
        },
        expense: {
          purple: {
            light: '#ece4fc',
            DEFAULT: '#9b87f5',
            dark: '#7E69AB'
          }
        }
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'accent-bounce': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s cubic-bezier(0.4,0,0.2,1) both',
        'accent-bounce': 'accent-bounce 2.2s infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
