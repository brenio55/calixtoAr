import React from 'react';

const Clientes = () => {
  return (
    <section className="hero-heading-left">
      <div className="container-4">
        <div className="hero-wrapper">
          <div className="hero-split">
            <h1>Clientes de Confiança</h1>
            <p className="margin-bottom-24px">
              Ao longo de nossa trajetória, construímos parcerias sólidas com empresas que confiam em nossa expertise 
              para garantir o melhor em climatização. Nossa carteira de clientes inclui empresas de diversos setores, 
              desde indústrias até centros comerciais.
            </p>
            <a href="#depoimentos" className="button-primary-2 w-button">Ver Depoimentos</a>
          </div>
          <div className="hero-split">
            <img src="/img/clients.svg" loading="lazy" alt="Nossos Clientes" className="shadow-two" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientes; 