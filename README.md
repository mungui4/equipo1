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


