import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      throw { message: 'Erreur de connexion au serveur' };
    } else {
      throw { message: error.message };
    }
  }
);

export const inscrirePartenaire = async (data) => {
  const response = await api.post('/partenaires/inscription', data);
  return response.data;
};

export default api;