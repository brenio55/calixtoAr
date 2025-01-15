import React from 'react';

const MainBanner = () => {
  return (
    <section id="home" className="w-layout-blockcontainer container-2 w-container">
      <div className="w-layout-blockcontainer container-3 w-container">
        <img 
          src="/img/airconditioner.svg" 
          loading="lazy" 
          alt="Ar Condicionado" 
          className="image heroAirConditioner"
          data-aos="fade-down"
        />
        <h1 className="heading" data-aos="fade-up" data-aos-delay="200">
          Mais de <span className="text-span">2 Mi</span> de BTUs Sob Nossa Responsabilidade
        </h1>
        <div 
          className="text-block subTitleHeroBanner"
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          Garantindo o conforto e Economia para Sua Empresa, <span className="text-span-2">desde 1968</span>
        </div>
        <a 
          href="#quem-somos" 
          className="button w-button buttonMainBanner"
          data-aos="zoom-in" 
          data-aos-delay="600"
        >
          Conhecer
          <img src="/img/icons/setaRight.png" alt="Arrow Right" className="arrowRight" />
        </a>
      </div>
      <img src="/img/icons/pageHolderWhite.svg" alt="Page Holder" className="pageHolder" />
    </section>
  );
};

export default MainBanner; 