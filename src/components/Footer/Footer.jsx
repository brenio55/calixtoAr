import React from 'react';
import './Footer.scss';

const Footer = () => {
  const certificacoes = [
    { id: 1, src: '/img/Certificacoes/creasp.svg', alt: 'CREA-SP' },
    { id: 2, src: '/img/Certificacoes/empresaSustentavel.svg', alt: 'Empresa Sustentável' },
    { id: 3, src: '/img/Certificacoes/ibama.svg', alt: 'IBAMA' },
    { id: 4, src: '/img/Certificacoes/segurancaDoTrabalho.svg', alt: 'Segurança do Trabalho' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo e Tradição */}
          <div className="footer-brand">
            <img src="/img/logoCalixto.png" alt="Calixto Ar Logo" className="footer-logo" />
            <h2 className="brand-name">Calixto Ar</h2>
            <p className="brand-description">
              +50 anos de tradição e experiência, cuidando da saúde do seu ar-condicionado.
            </p>
          </div>

          {/* Certificações */}
          <div className="footer-certificates">
            <h3 className="certificates-title">Certificações</h3>
            <div className="certificates-container">
              {certificacoes.map((cert) => (
                <div key={cert.id} className="certificate-item">
                  <img src={cert.src} alt={cert.alt} />
                </div>
              ))}
            </div>
          </div>

          {/* Direitos Reservados */}
          <div className="footer-rights">
            <p>
              Todos os Direitos Reservados, Calixto Ar 2024<br />
              Desenvolvido por DiVSeC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 