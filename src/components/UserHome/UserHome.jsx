import React from 'react';
import Navbar from '../Navbar/Navbar';
import MainBanner from '../MainBanner/MainBanner';
import QuemSomos from '../QuemSomos/QuemSomos';
import Diferenciais from '../Diferenciais/Diferenciais';
import Clientes from '../Clientes/Clientes';
import Equipe from '../Equipe/Equipe';
import Tecnologia from '../Tecnologia/Tecnologia';

const UserHome = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <QuemSomos />
      <Diferenciais />
      <Tecnologia />
      <Clientes />
      <Equipe />
    </>
  );
};

export default UserHome; 