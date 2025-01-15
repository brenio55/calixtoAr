import React from 'react';

const MainBanner = () => {
  return (
    <div className="w-layout-blockcontainer container-2 w-container">
      <div className="w-layout-blockcontainer container-3 w-container">
        <img src="/img/airconditioner.svg" loading="lazy" alt="Ar Condicionado" className="heroAirConditioner" />
        <h1 className="heading">Mais de <span className="text-span">2 Mi</span> de BTUs Sob Nossa Responsabilidade</h1>
        <div className="subTitleHeroBanner">Garantindo o conforto e Economia para Sua Empresa, <span className="text-span-2">desde 1968</span></div>
        <a href="#quem-somos" className="button w-button buttonMainBanner">
          Conhecer
          <img src="/img/icons/setaRight.png" alt="Seta para baixo" />
        </a>
      </div>
      <img src="/img/icons/pageHolderWhite.svg" alt="Page Holder" className="pageHolder pageHolderMainBanner" />
    </div>
  );
};

export default MainBanner; 