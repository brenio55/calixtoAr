import React from 'react';

const MainBanner = () => {
  return (
    <section id="home" className="w-layout-blockcontainer container-2 w-container">
      <div className="w-layout-blockcontainer container-3 w-container">
        <img src="/img/airconditioner.svg" loading="lazy" alt="Ar Condicionado" className="image heroAirConditioner" />
        <h1 className="heading">Mais de <span className="text-span">2 Mi</span> de BTUs Sob Nossa Responsabilidade</h1>
        <div className="text-block subTitleHeroBanner">Garantindo o conforto e Economia para Sua Empresa, <span className="text-span-2">desde 1968</span></div>
        <a href="#quem-somos" className="button w-button">Conhecer</a>
      </div>
    </section>
  );
};

export default MainBanner; 