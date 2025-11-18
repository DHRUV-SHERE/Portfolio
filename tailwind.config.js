/**@type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: 'hsl(var(--primary))',
      secondary: 'hsl(var(--secondary))',
      muted: 'hsl(var(--muted))',
      accent: 'hsl(var(--accent))',
      destructive: 'hsl(var(--destructive))',
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
    },
  },
};
export const plugins = [];