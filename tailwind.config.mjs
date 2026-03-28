/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary colors
        navy: '#1a2b4a',
        slate: '#64748b',
        // Accent colors
        blue: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
        },
        // Neutrals
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          800: '#1e293b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Source Serif Pro', 'Georgia', 'serif'],
      },
      fontSize: {
        // Type scale based on 1.25 ratio
        'display': ['3rem', { lineHeight: '1.1', fontWeight: '600' }],      // 48px
        'h1': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }],        // 36px
        'h2': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }],         // 24px
        'h3': ['1.125rem', { lineHeight: '1.4', fontWeight: '500' }],       // 18px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],         // 16px
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],    // 14px
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],   // 12px
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'prose': '768px',
        'content': '1280px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 4px 6px rgba(0,0,0,0.07)',
        'lg': '0 10px 15px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
