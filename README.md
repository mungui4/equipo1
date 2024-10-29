# Proyecto React + Vite
Este proyecto está configurado para iniciar rápidamente una aplicación React utilizando Vite. Incluye Hot Module Replacement (HMR) para un desarrollo en tiempo real y reglas básicas de ESLint para mantener la calidad del código.

Estructura del Proyecto
src/context/TokenContext.jsx: Contexto de React para el manejo del token de autenticación y estado de usuario.
src/pages: Contiene las páginas principales de la aplicación como Bootcamps, HomeContent, Login, Register, y NavBar.
src/components: Carpeta destinada a componentes reutilizables como el Footer.
App.jsx: Archivo principal que configura las rutas y el enrutamiento de la aplicación.

# Requisitos Previos
Para trabajar en este proyecto, necesitas tener instalado:

Node.js v14 o superior
Yarn o npm


# Instalación
Clona el repositorio
Instala las dependencias
Inicia el proyecto en modo de desarrollo
El proyecto debería estar disponible en http://localhost:3000.

# Componentes
Footer Component
El componente Footer proporciona un pie de página que aparece en la parte inferior de todas las páginas de la aplicación. Este componente es ideal para elementos de navegación secundaria o información general, como derechos de autor.

## Implementación
Ubicación del archivo: src/components/Footer.jsx
Props: No requiere props.
Estilos: Los estilos se manejan en App.css, con variables CSS para personalización.

# Scripts Disponibles
npm run dev: Inicia el servidor de desarrollo.
npm run build: Compila la aplicación para producción.
npm run serve: Sirve la aplicación de producción localmente.
npm run lint: Verifica la calidad del código con ESLint.

# Tecnologías Utilizadas
React: Librería de JavaScript para construir interfaces de usuario.
Vite: Herramienta de construcción rápida con HMR.
ESLint: Linter para asegurar la calidad del código.
React Router: Librería para manejar el enrutamiento en la aplicación.

#  Personalización
Puedes cambiar los colores de la aplicación en App.css modificando las variables CSS para reflejar tu marca. Además, puedes agregar o eliminar componentes según tus necesidades.


# Contribución          
Si deseas contribuir con este proyecto, puedes hacerlo de las siguientes maneras:
Haz un fork del proyecto.
Crea una rama con tu función (git checkout -b feature/nueva-funcion).
Haz commit de tus cambios (git commit -m 'Agrega nueva función').
Haz push a la rama (git push origin feature/nueva-funcion).
Abre un Pull Request.

