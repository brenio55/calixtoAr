import React from 'react';
import Navbar from '../Navbar/Navbar';
import MainBanner from '../MainBanner/MainBanner';
import QuemSomos from '../QuemSomos/QuemSomos';
import Diferenciais from '../Diferenciais/Diferenciais';
import Clientes from '../Clientes/Clientes';
import Equipe from '../Equipe/Equipe';
import Tecnologia from '../Tecnologia/Tecnologia';
import ClientesDeConfianca from '../ClientesDeConfianca/ClientesDeConfianca';
import Contato from '../Contato/Contato';
import Footer from '../Footer/Footer';

const UserHome = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <QuemSomos />
      <Diferenciais />
      <Tecnologia />
      <ClientesDeConfianca />
      <Equipe />
      <Contato />
      <Footer />
    </>
  );
};

export default UserHome; 