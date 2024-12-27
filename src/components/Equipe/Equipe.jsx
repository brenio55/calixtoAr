import React from 'react';

const Equipe = () => {
  return (
    <section className="hero-heading-left">
      <div className="container-4">
        <div className="hero-wrapper">
          <div className="hero-split">
            <h1>Nossa Equipe Técnica</h1>
            <p className="margin-bottom-24px">
              Nossa equipe é formada por profissionais altamente qualificados e certificados, 
              com vasta experiência em sistemas de climatização. Investimos constantemente em 
              treinamento e atualização tecnológica para oferecer o melhor serviço aos nossos clientes.
            </p>
            <a href="#carreiras" className="button-primary-2 w-button">Junte-se a Nós</a>
          </div>
          <div className="hero-split">
            <img src="/img/team.svg" loading="lazy" alt="Nossa Equipe" className="shadow-two" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipe; 