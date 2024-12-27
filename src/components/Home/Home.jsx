import React from 'react';

const Home = () => {
  return (
    <div className="w-layout-blockcontainer container-2 w-container">
      <div className="w-layout-blockcontainer container-3 w-container">
        <img src="/img/arconditioner.svg" loading="lazy" alt="Ar Condicionado" className="image logo" />
        <h1 className="heading">Mais de <span className="text-span">2 Mi</span> de BTUs Sob Nossa Responsabilidade</h1>
        <div className="text-block">Garantindo o conforto e Economia para Sua Empresa, <span className="text-span-2">desde 1968</span></div>
        <a href="#" className="button w-button">Conhecer</a>
      </div>
    </div>
  );
};

export default Home; 