import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const launchpadAPI = {
  getAll: () => api.get('/launchpad'),
  getById: (id) => api.get(`/launchpad/${id}`),
  create: (data) => api.post('/launchpad/create', data),
  update: (id, data) => api.put(`/launchpad/${id}`, data),
};

export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  logout: () => api.post('/auth/logout'),
  verify: () => api.get('/auth/verify'),
};

export const smartContractAPI = {
  contribute: (data) => api.post('/smartcontract/contribute', data),
  claim: (data) => api.post('/smartcontract/claim', data),
  getStatus: (address) => api.get(`/smartcontract/status/${address}`),
  getUserContribution: (address) => api.get(`/smartcontract/contribution/${address}`),
};

export const presaleAPI = {
  getAll: () => api.get('/presale'),
  getById: (id) => api.get(`/presale/${id}`),
  participate: (data) => api.post('/presale/participate', data),
  getHistory: () => api.get('/presale/history/user'),
};

export const userAPI = {
  getProfile: () => api.get('/user/profile'),
  updateProfile: (data) => api.put('/user/profile', data),
  getPortfolio: () => api.get('/user/portfolio'),
  getNotifications: () => api.get('/user/notifications'),
  connectWallet: (data) => api.post('/user/connect-wallet', data),
};

export default api;
