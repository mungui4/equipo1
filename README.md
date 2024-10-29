# K-Bootcamps -React + Vite
Este proyecto es una plataforma de bootcamps desarrollada con React y Vite. Incluye características de autenticación, creación y edición de bootcamps, y una navegación que permite al usuario explorar los programas ofrecidos.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

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




