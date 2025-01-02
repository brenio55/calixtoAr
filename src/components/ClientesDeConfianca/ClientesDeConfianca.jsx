import React from 'react';
import './ClientesDeConfianca.scss';

const ClientesDeConfianca = () => {
  const marcas = [
    { id: 1, src: '/img/ClientesParceiros/USF - CLIENTE.png', alt: 'USF' },
    { id: 2, src: '/img/ClientesParceiros/SILGAN CLIENTE.png', alt: 'SILGAN' },
    { id: 3, src: '/img/ClientesParceiros/sicoob - CLIENTE.png', alt: 'Sicoob' },
    { id: 4, src: '/img/ClientesParceiros/EXPEDITORS CLIENTE.png', alt: 'Expeditors' },
    { id: 5, src: '/img/ClientesParceiros/gardnerdenver - CLIENTE.png', alt: 'Gardner Denver' },
    { id: 6, src: '/img/ClientesParceiros/institucional-azul-pqno - CLIENTE.png', alt: 'Institucional' },
    { id: 7, src: '/img/ClientesParceiros/Panobianco - CLIENTE.png', alt: 'Panobianco' },
    { id: 8, src: '/img/ClientesParceiros/Sapore - CLIENTE.png', alt: 'Sapore' },
    { id: 9, src: '/img/ClientesParceiros/SUBWAY CLIENTE.png', alt: 'Subway' },
    { id: 10, src: '/img/ClientesParceiros/ALPHA CLIENTE.png', alt: 'Alpha' },
    { id: 11, src: '/img/ClientesParceiros/ASVOTEC CLIENTE.png', alt: 'Asvotec' },
    { id: 12, src: '/img/ClientesParceiros/ALGAR CLIENTE.png', alt: 'Algar' },
    { id: 13, src: '/img/ClientesParceiros/tegra cliente.png', alt: 'Tegra' },
    { id: 14, src: '/img/ClientesParceiros/cliente-santa-casa-valinhos.png', alt: 'Santa Casa Valinhos' },
    { id: 15, src: '/img/ClientesParceiros/UNICAMP_logo.svg.png', alt: 'Unicamp' },
    { id: 16, src: '/img/ClientesParceiros/cliente-nacionalgas.png', alt: 'Nacional Gás' },
    { id: 17, src: '/img/ClientesParceiros/jamef-cliente-precon-pre-fabricados-de-concreto-138yfpmx0xojykrl4gc3ox94769joornfm3dx2fz45vzmx1s.png', alt: 'Jamef' }
  ];

  return (
    <section className="clientesDeConfianca">
      <div className="container">
        <h1 className="section-title">Clientes de <strong className="text-span-black">Confiança</strong></h1>
        <p className="subTitleHeroBanner">
          Confira alguns dos <strong>nossos clientes</strong> de confiança das quais tivemos e ainda temos o <strong>prazer</strong> de atender
        </p>
        
        <div className="marcas-container">
          {marcas.map((marca) => (
            <div key={marca.id} className="marca-item">
              <img src={marca.src} alt={marca.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientesDeConfianca; 