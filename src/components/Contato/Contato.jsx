import React, { useState } from 'react';
import './Contato.scss';
import { submitContactForm } from '../../services/ApiService';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    assunto: '',
    email: '',
    mensagem: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, error: null, success: false });
    
    try {
      await submitContactForm(formData);
      setSubmitStatus({ loading: false, error: null, success: true });
      setFormData({
        nome: '',
        sobrenome: '',
        assunto: '',
        email: '',
        mensagem: ''
      });
      alert('Mensagem enviada com sucesso! Em breve nossa equipe entrará em contato.');
    } catch (error) {
      setSubmitStatus({ 
        loading: false, 
        error: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.', 
        success: false 
      });
      alert('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
    }
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
                  disabled={submitStatus.loading}
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
                  disabled={submitStatus.loading}
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
                disabled={submitStatus.loading}
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
                disabled={submitStatus.loading}
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
                disabled={submitStatus.loading}
              />
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={submitStatus.loading}
            >
              {submitStatus.loading ? 'Enviando...' : 'Entrar em Contato'}
            </button>
            <p style={{ textAlign: 'center', margin: '10px 0 -5px 0' }}>--- OU ---</p>
            <a 
              href="https://api.whatsapp.com/send?phone=551921222000&text=Ol%C3%A1,%20Calixto%20Ar,%20vi%20o%20site%20de%20voc%C3%AAs%20e%20queria%20mais%20informa%C3%A7%C3%B5es"
              target="_blank"
              rel="noopener noreferrer"
              className="submit-button whatsapp-button"
              disabled={submitStatus.loading}

            >
              Entrar em Contato pelo <img src="https://static.whatsapp.net/rsrc.php/yA/r/hbGnlm1gXME.svg" alt="Whatsapp" />
            </a>
          </form>
        </div>


      </div>

    </section>
  );
};

export default Contato; 