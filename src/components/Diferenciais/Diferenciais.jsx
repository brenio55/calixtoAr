import React from 'react';

const Diferenciais = () => {
  return (
    <section className="hero-heading-left">
      <div className="container-4">
        <div className="hero-wrapper">
          <div className="hero-split">
            <h1>Nossos Diferenciais</h1>
            <p className="margin-bottom-24px">
              • Equipe técnica altamente qualificada<br />
              • Atendimento 24/7<br />
              • Manutenção preventiva e corretiva<br />
              • Tecnologia de ponta<br />
              • Soluções personalizadas<br />
              • Compromisso com eficiência energética
            </p>
            <a href="#servicos" className="button-primary-2 w-button">Nossos Serviços</a>
          </div>
          <div className="hero-split">
            <img src="/img/diferenciais.svg" loading="lazy" alt="Nossos Diferenciais" className="shadow-two" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais; 