import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto py-3 text-center">
      <div className="container">
        <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/about" className="text-white">
              Sobre Nosotros
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/contact" className="text-white">
              Contacto
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/privacy" className="text-white">
              Política de Privacidad
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
