import React, { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`navbar-logo-left ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo-left-container shadow-three">
        <div className="container">
          <div className="navbar-wrapper">
            <img src="/img/logoCalixto.png" alt="Logo Calixto Ar" className="logo" />
            
            {isMobile ? (
              <>
                <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                  <img src="/img/menu.webp" alt="Menu" width="40" height="40" />
                </button>
                <nav className={`nav-menu-wrapper mobile ${isMobileMenuOpen ? 'open' : ''}`}>
                  <ul className="nav-menu-two">
                    <li><a href="#inicio" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Início</a></li>
                    <li><a href="#quem-somos" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Quem Somos</a></li>
                    <li><a href="#diferenciais" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Diferenciais</a></li>
                    <li><a href="#tecnologia" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Tecnologia</a></li>
                    <li><a href="#clientes" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Clientes</a></li>
                    <li><a href="#equipe" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Equipe</a></li>
                    <li><a href="#contato" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contato</a></li>
                  </ul>
                </nav>
              </>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 