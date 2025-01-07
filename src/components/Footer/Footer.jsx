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
      <div className="footer-content">
        <div className="footer-brand" data-aos="fade-up">
          <img src="/img/logoCalixto.png" alt="Calixto Ar Logo" className="footer-logo" />
          <h2 className="brand-name">Calixto Ar</h2>
          <p className="brand-description">
            +50 anos de tradição e experiência, cuidando da saúde do seu ar-condicionado.
          </p>
        </div>

        <div className="footer-certificates" data-aos="fade-up" data-aos-delay="200">
          <h3 className="certificates-title">Certificações</h3>
          <div className="certificates-container">
            {certificacoes.map((certificado) => (
              <div key={certificado.id} className="certificate-item">
                <img src={certificado.src} alt={certificado.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="footer-rights" data-aos="fade-up" data-aos-delay="400">
          <p>© 2024 Calixto Ar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 