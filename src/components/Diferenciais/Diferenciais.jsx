import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Diferenciais = () => {
  return (
    <section className="hero-heading-left nossosDiferenciais">
      <div className="container-4">
        <h1 className="section-title">Nossos Diferenciais</h1>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="hero-wrapper">
        <div className="hero-split ">
          <img src="/img/nossoDiferenciaisEquip.svg" loading="lazy" alt="Nossa História" className="shadow-two dropDownShadowImage nossosDiferenciaisEquipImg" />
        </div>

        <div className="hero-split hero-split-right">    
          <p className="titleLightTextBeside titleLightTextBesideRight"><strong>Equipe Própria, Treinada e Certificada</strong></p>
          <p className="margin-bottom-24px lighterTextBeside lightTextBesideRight">
            Nossos técnicos são <span className="text-span-black">especializados</span> em todas as marcas e modelos de ar condicionado, passando por <span className="text-span-black">treinamentos contínuos</span> e atualizações
          </p>

          <p className="margin-bottom-24px lighterTextBeside lightTextBesideRight">
            Contamos com os padrões mais altos de <span className="text-span-black">certificação</span> do mercadoa tual
          </p>
        </div>
      </div>

      <div>
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
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="marcas-slider"
          >
            {[...Array(8)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="marca-item">
                  <img 
                    src={`https://placehold.co/160x108?text=Marca ${index + 1}`}
                    alt={`Marca ${index + 1}`}
                    width={160}
                    height={108}
                  />
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