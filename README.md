# K-Bootcamps -React + Vite
Este proyecto es una plataforma de bootcamps desarrollada con React y Vite. Incluye características de autenticación, creación y edición de bootcamps, y una navegación que permite al usuario explorar los programas ofrecidos.

Esta plantilla proporciona una configuración mínima para que React funcione en Vite con HMR y algunas reglas de ESLint.

Actualmente, hay dos complementos oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Estructura del Proyecto
El proyecto sigue una estructura modular donde cada parte de la aplicación se encuentra en una carpeta específica:

src/context/TokenContext.jsx: Contiene el contexto para la autenticación y el estado de sesión del usuario.

src/pages/bootcamps: Página para listar, crear, editar y eliminar bootcamps.

src/pages/homecontent: Página de inicio con detalles de los beneficios del programa.

src/pages/login: Página de inicio de sesión del usuario.

src/pages/register: Página de registro para nuevos usuarios.

src/pages/navbar: Componente de navegación principal.

src/App.jsx: Configura las rutas principales y el proveedor de contexto

# Requisitos Previos
Node.js v14 o superior.
Yarn o npm.

# Instalación
Clona el repositorio: `git clone https://github.com/your-username/your-repo-name.git` , `cd nombre-del-proyecto`

Instala las dependencias: `yarn install` o `npm install`

Inicia el proyecto en modo desarrollo: `npm rum dev`
La aplicación debería estar disponible en http://localhost:3000.

# Autenticación de Usuario
El contexto de autenticación (TokenContext) administra el estado de sesión y el token JWT del usuario. Permite iniciar y cerrar sesión, y controla el acceso a rutas protegidas.

Gestión de Bootcamps
La página Bootcamps permite al usuario visualizar los bootcamps disponibles, crear nuevos, editarlos o eliminarlos. Solo se muestran los bootcamps activos.

Navegación
La barra de navegación (NavBar) cambia dinámicamente según el estado de sesión del usuario. Muestra opciones como Iniciar Sesión, Registrarse, o Cerrar Sesión y el nombre del usuario. Cuando el usuario está autenticado, muestra un enlace a la página de perfil.


# Componentes Principales
Footer Component
El componente Footer proporciona un pie de página que aparece en la parte inferior de todas las páginas de la aplicación. Este componente es ideal para incluir derechos de autor y otros enlaces importantes.

Implementación
Ubicación: src/components/Footer.jsx
Props: No requiere props.
Estilos: Se manejan en App.css, utilizando variables CSS para personalización.

# Scripts Disponibles
npm run dev: Inicia el servidor de desarrollo.
npm run build: Compila la aplicación para producción.
npm run serve: Sirve la aplicación de producción localmente.
npm run lint: Verifica la calidad del código con ESLint.

# Personalización
Puedes cambiar los colores de la aplicación en App.css
 modificando las variables CSS para reflejar tu marca.  

#  Contribución
Haz un fork del proyecto.
Crea una rama con tu función (git checkout -b feature/nueva-funcion).
Haz commit de tus cambios (git commit -m 'Agrega nueva función').
Haz push a la rama (git push origin feature/nueva-funcion).
Abre un Pull Request.

# Contribución

Si tienes alguna sugerencia o problema, no dudes en abrir una issue o contribuir con código.
Haz un fork del proyecto.

Crea una rama con tu función (git checkout -b feature/nueva-funcion).
Haz commit de tus cambios (git commit -m 'Agrega nueva función').
Haz push a la rama (git push origin feature/nueva-funcion).
Abre un Pull Request.



