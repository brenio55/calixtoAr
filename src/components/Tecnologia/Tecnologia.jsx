function Tecnologia() {
  return (
    <section className="tecnologia">
       <div className="container-4" data-aos="fade-down" data-aos-delay="400">
        <h1 className="section-title">Tecnologia de Ponta</h1>
      </div>
      <br></br>
      <br></br>
      <br></br>
      
      <div className="hero-wrapper">

      <div className="hero-split hero-split-right equipePropria" data-aos="fade-right" data-aos-delay="200">    
        <p className="titleLightTextBeside titleLightTextBesideLeft"><strong className="strongWhite">Equipe Própria, Treinada e Certificada</strong></p>
        <p className="margin-bottom-24px lighterTextBeside titleLightTextBesideLeft">
          Utilizamos equipamentos <span className="text-span-black strongWhite">modernos</span> e procedimentos que asseguram a máxima  <span className="text-span-black strongWhite">eficiência</span> do seu sistema de ar condicionado. 
        </p>
        <p className="margin-bottom-24px lighterTextBeside titleLightTextBesideLeft">
        Nosso exclusivo Kit Select, com tecnologia de limpeza a vapor de 150 graus, elimina bactérias e <span className="text-span-black strongWhite">aumenta a vida útil</span> dos equipamentos, <span className="text-span-black strongWhite"> reduzindo custos </span> operacionais e <span className="text-span-black strongWhite">prevenindo problemas</span> futuros.
        </p>
      </div>
      <div className="hero-split " data-aos="fade-left" data-aos-delay="400">
        <img src="/img/Tecnologia/consertoAr.svg" loading="lazy" alt="Nossa História" className="shadow-two dropDownShadowImage nossosDiferenciaisEquipImg" />
      </div>
      </div>

      <div className="container-4">
        <h2 className="section-title strongWhite" data-aos="fade-down" data-aos-delay="400">Responsabilidade & Experiência</h2>
      </div>

      <div className="timeline">
        <div className="hero-wrapper">
          <div className="hero-split" data-aos="fade-right">
            <img src="/img/Tecnologia/arCondicionadoTopPredio.svg" loading="lazy" alt="Nossa História" className="shadow-two dropDownShadowImage nossosDiferenciaisEquipImg" />
          </div>
        
          <div className="hero-split hero-split-right equipePropria" data-aos="fade-left" data-aos-delay="200">    
            <p className="margin-bottom-24px lighterTextBeside lighterTextBesideRight">
              Com + de 2 milhões de BTUs sob nossa responsabilidade, somos líderes e referência em contratos de manutenção preventiva e corretiva no mercado empresarial.
            </p>
          </div>
        </div>

        <div className="timelineSvg" data-aos="fade-up" data-aos-delay="400">
          <img src="/img/Tecnologia/timelineTecnologia.svg" alt="" />
        </div>

        <div className="hero-wrapper desde1968">
          <div className="hero-split hero-split-right equipePropria" data-aos="fade-right">    
            <p className="margin-bottom-24px lighterTextBeside lighterTextBesideLeft">
              Desde 1968, oferecemos confiança, qualidade e tranquilidade aos nossos clientes, garantindo que seus sistemas de climatização estejam sempre em perfeito estado.
            </p>
          </div>

          <div className="hero-split" data-aos="fade-left" data-aos-delay="200">
            <img src="/img/Tecnologia/arCondicionadoTopPredio2.svg" loading="lazy" alt="Nossa História" className="shadow-two dropDownShadowImage nossosDiferenciaisEquipImg" />
          </div>
        </div>
      </div>
      <img src="/img/icons/pageHolderWhiteTopBlackBottom.svg" alt="Page Holder" className="pageHolder pageHolderTecnologia" />
    </section>
  );
}

export default Tecnologia;