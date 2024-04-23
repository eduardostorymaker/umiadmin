/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003a5d', // Ejemplo de color personalizado
        secondary: '#b5bd00',
        textcolor: '#021f30',
        bordercolor: '#86b3e4'
        // Agrega más colores según tus necesidades
      },
    },
  },
  plugins: [],
}
