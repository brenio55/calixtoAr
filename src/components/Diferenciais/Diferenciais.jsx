import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const marcas = [
  { id: 1, src: '/img/Marcas/samsung.svg', alt: 'Samsung' },
  { id: 2, src: '/img/Marcas/trane.svg', alt: 'Trane' },
  { id: 3, src: '/img/Marcas/carrier.svg', alt: 'Carrier' },
  { id: 4, src: '/img/Marcas/midea.svg', alt: 'Midea' },
  { id: 5, src: '/img/Marcas/lg.svg', alt: 'LG' },
  { id: 6, src: '/img/Marcas/daikin.svg', alt: 'Daikin' },
];

const Diferenciais = () => {
  return (
    <section className="hero-heading-left nossosDiferenciais">
      <div className="container-4">
        <h1 className="section-title" data-aos="fade-down">Nossos Diferenciais</h1>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="hero-wrapper">
        <div className="hero-split" data-aos="fade-right">
          <img src="/img/nossoDiferenciaisEquip.svg" loading="lazy" alt="Nossa História" className="shadow-two dropDownShadowImage nossosDiferenciaisEquipImg" />
        </div>

        <div className="hero-split hero-split-right" data-aos="fade-left" data-aos-delay="200">    
          <p className="titleLightTextBeside titleLightTextBesideRight"><strong>Equipe Própria, Treinada e Certificada</strong></p>
          <p className="margin-bottom-24px lighterTextBeside lightTextBesideRight">
            Nossos técnicos são <span className="text-span-black">especializados</span> em todas as marcas e modelos de ar condicionado, passando por <span className="text-span-black">treinamentos contínuos</span> e atualizações
          </p>

          <p className="margin-bottom-24px lighterTextBeside lightTextBesideRight">
            Contamos com os padrões mais altos de <span className="text-span-black">certificação</span> do mercadoa tual
          </p>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <br></br>
        <br></br>
        <br></br>

        <h2>Trabalhamos com as marcas mais reconhecidas de todo o mercado</h2>
        <p>Entre as marcas das quais trabalhamos e nossos funcionários possuem conhecimento técnico avançado, estão:</p>

        <div className="slider slider-nossos-diferenciais">
           <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            className="swiper-marcas"
          >
            {marcas.map((marca) => (
              <SwiperSlide key={marca.id}>
                <div className="marca-item">
                  <img src={marca.src} alt={marca.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais; 