import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Equipe.scss';

const Equipe = () => {
  const equipeSlides = [
    { id: 1, src: '/img/NossaEquipe/equipe1.jpg', alt: 'Equipe Calixto Ar 1' },
    { id: 2, src: '/img/NossaEquipe/equipe2.jpg', alt: 'Equipe Calixto Ar 2' },
    { id: 3, src: '/img/NossaEquipe/equipe3.jpg', alt: 'Equipe Calixto Ar 3' },
  ];

  return (
    <section className="equipe">
      <div className="container">
        <h1 className="section-title">Nossa <strong className="text-span-black">Equipe</strong></h1>
        <p className="subTitleHeroBanner">
          Na Calixto, temos uma <strong>Equipe</strong> e <strong>Técnicos</strong> devidamente treinados e capacitados.
        </p>
        <h2 className="secondary-title">
          Seguimos rigorosamente os mais altos padrões de segurança e qualidade do mercado atual, garantindo a longevidade dos seus equipamentos e satisfação com o serviço final.
        </h2>

        <div className="equipe-slider">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            className="equipe-swiper"
          >
            {equipeSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="equipe-slide">
                  <img src={slide.src} alt={slide.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Equipe; 