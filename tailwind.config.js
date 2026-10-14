/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Outfit"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        theme: {
          bg: 'var(--bg)',
          surface: 'var(--bg-surface)',
          card: 'var(--bg-card)',
          subtle: 'var(--bg-subtle)',
          border: 'var(--border)',
          borderSubtle: 'var(--border-subtle)',
          accent: 'var(--accent)',
          accentHover: 'var(--accent-hover)',
          accentSecondary: 'var(--accent-secondary)',
          text: 'var(--text)',
          muted: 'var(--text-muted)',
        }
      },
      boxShadow: {
        'glow': '0 0 30px -5px var(--accent-glow)',
        'glow-lg': '0 0 50px -10px var(--accent-glow)',
      }
    },
  },
  plugins: [],
}