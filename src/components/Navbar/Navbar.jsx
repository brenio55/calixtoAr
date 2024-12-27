import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-logo-left">
      <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar-logo-left-container shadow-three w-nav">
        <div className="container">
          <div className="navbar-wrapper">
            <Link to="/" className="navbar-brand w-nav-brand">
              <img className="logo" src="/img/logoCalixto.png" loading="lazy" alt="Calixto Ar Logo" srcSet="/img/logoCalixto.png 500w, /img/logo_calixto_landing-1-p-800.png 800w, /img/logo_calixto_landing-1.png 1080w" sizes="(max-width: 479px) 63vw, 200px" />
            </Link>
            <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
              <ul role="list" className="nav-menu-two w-list-unstyled">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/quem-somos" className="nav-link">Quem Somos</Link></li>
                <li><Link to="/diferenciais" className="nav-link">Nossos Diferenciais</Link></li>
                <li><Link to="/clientes" className="nav-link">Clientes de Confiança</Link></li>
                <li><Link to="/equipe" className="nav-link">Nossa Equipe Técnica</Link></li>
              </ul>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 