import React from 'react';

const QuemSomos = () => {
  return (
    <section className="hero-heading-left quemSomos">
      <div className="container-4">
        <h1 className="quemSomos">Quem Somos</h1>
        <div className="hero-wrapper">
          <div className="hero-split">    
            <p className="titleLightTextBeside titleLightTextBesideLeft">Calixto Ar</p>
            <p className="margin-bottom-24px lightTextBeside lightTextBesideLeft">
                Somos a Calixto Ar Condicionado, oferecemos <span className="text-span-2">soluções completas</span> de manutenção preventiva.
            </p>
          </div>
          <div className="hero-split">
            <img src="/img/quemSomosVenda.svg" loading="lazy" alt="Nossa História" className="shadow-two dropDownShadowImage" />
            <p className="align-left">Com mais de 50 anos de experiência no mercado e uma equipe altamente capacitada, somos a escolha certa para quem busca eficiência, segurança e tecnologia de ponta.</p>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div>
        <img src="img/timelineQuemSomos.svg" alt="Timeline Quem Somos" />
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="hero-wrapper">
          <div className="hero-split">
            <img src="/img/quemSomosEquipe.svg" loading="lazy" alt="Nossa História" className="shadow-two dropDownShadowImage" />
            <p className="align-right">CGarantindo Conforto e Economia Para Sua Empresa Desde <strong>1968</strong>, contamos com uma equipe altamente capacitada, gestão sólida e tecnologia de ponta!</p>
          </div>

          <div className="hero-split">    
            <p className="titleLightTextBeside titleLightTextBesideRight">Experiência e Eficiência</p>
            <p className="margin-bottom-24px lightTextBeside lightTextBesideRight">
                <span className="text-span-2">+50 anos</span> de experiência no mercado, equipe altamente qualificada e experiente
            </p>
          </div>
        </div>
    </section>
  );
};

export default QuemSomos; 