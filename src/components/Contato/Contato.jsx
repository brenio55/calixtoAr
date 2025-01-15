import React, { useState } from 'react';
import './Contato.scss';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    assunto: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="contato">
      <div className="container">
        <h1 className="section-title" data-aos="fade-down">
          Solicite Sua <strong className="text-span-black">Proposta</strong>
        </h1>
        <p className="subTitleHeroBanner" data-aos="fade-up" data-aos-delay="200">
          Garanta a Eficiência e Segurança do Seu Sistema de Ar Condicionado
        </p>
        <p className="tertiary-title" data-aos="fade-up" data-aos-delay="600">
        Seja você uma pequena, média ou grande empresa, nossos contratos de manutenção garantem a longevidade dos equipamentos, economia de energia e redução de falhas. Entre em contato agora e saiba como podemos ajudar sua empresa a ter o melhor clima interno, com máxima segurança e eficiência.
        </p>

        <br />
        

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="sobrenome">Sobrenome</label>
                <input
                  type="text"
                  id="sobrenome"
                  name="sobrenome"
                  value={formData.sobrenome}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="assunto">Assunto</label>
              <input
                type="text"
                id="assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows="5"
              />
            </div>

            <button type="submit" className="submit-button">
              Entrar em Contato
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato; 