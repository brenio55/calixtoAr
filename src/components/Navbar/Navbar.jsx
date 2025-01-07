import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar-logo-left">
      <div className="navbar-logo-left-container shadow-three">
        <div className="container">
          <div className="navbar-wrapper">
            <img src="/img/logoCalixto.png" alt="Logo Calixto Ar" className="logo" />
            <nav className="nav-menu-wrapper">
              <ul className="nav-menu-two">
                <li><a href="#inicio" className="nav-link">Início</a></li>
                <li><a href="#quem-somos" className="nav-link">Quem Somos</a></li>
                <li><a href="#diferenciais" className="nav-link">Diferenciais</a></li>
                <li><a href="#tecnologia" className="nav-link">Tecnologia</a></li>
                <li><a href="#clientes" className="nav-link">Clientes</a></li>
                <li><a href="#equipe" className="nav-link">Equipe</a></li>
                <li><a href="#contato" className="nav-link">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 