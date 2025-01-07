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
      <section id="inicio">
        <MainBanner />
      </section>
      <section id="quem-somos">
        <QuemSomos />
      </section>
      <section id="diferenciais">
        <Diferenciais />
      </section>
      <section id="tecnologia">
        <Tecnologia />
      </section>
      <section id="clientes">
        <ClientesDeConfianca />
      </section>
      <section id="equipe">
        <Equipe />
      </section>
      <section id="contato">
        <Contato />
      </section>
      <Footer />
    </>
  );
};

export default UserHome; 