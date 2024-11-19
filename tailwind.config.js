/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Esto se mantiene igual para que Tailwind procese los archivos .html y .js en tu directorio src
  theme: {
    extend: {
      // Aquí agregamos la animación y los keyframes personalizados
      animation: {
        scaleUp: 'scaleUp 0.6s ease-out', // Animación de escala
      },
      keyframes: {
        scaleUp: {
          '0%': {
            transform: 'scale(0)', // Comienza pequeño
            opacity: '0',           // Comienza invisible
          },
          '100%': {
            transform: 'scale(1)',  // Termina en su tamaño original
            opacity: '1',           // Se hace completamente visible
          },
        },
      },
    },
  },
  plugins: [], // Si tienes plugins adicionales, los puedes agregar aquí
}
