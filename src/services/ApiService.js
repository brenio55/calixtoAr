import axios from 'axios';

const PIPERUN_API_TOKEN = '0aa22f9f-cd75-4ae2-a7fc-92ca162dd393';
const PIPERUN_BASE_URL = 'https://app.pipe.run/webservice/integradorJson';

const apiClient = axios.create({
  baseURL: PIPERUN_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const submitContactForm = async (formData) => {
  try {
    const payload = {
      rules: {
        update: true,
        equal_pipeline: true,
        filter_status_update: "open",
        status: "open"
      },
      leads: [{
        id: formData.email,
        title: `${new Date().toLocaleString()} - Novo Contato Website`,
        name: `${formData.nome} ${formData.sobrenome}`,
        email: formData.email,
        last_conversion: {
          source: "Website Calixto Ar"
        },
        notes: [
          `Assunto: ${formData.assunto}\n` +
          `Mensagem: ${formData.mensagem}\n` +
          `Data do contato: ${new Date().toLocaleString()}\n` +
          `Origem: Formulário de Contato do Website`
        ]
      }]
    };

    const response = await apiClient.post(`?hash=${PIPERUN_API_TOKEN}`, payload);
    
    if (!response.data.success) {
      throw new Error(response.data.message || 'Erro ao enviar formulário');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error submitting form to PipeRun:', error);
    throw error;
  }
}; 
