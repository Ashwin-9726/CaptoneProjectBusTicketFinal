// src/services/services.js
import axios from 'axios';

// Base URL for the backend API
const API_URL = 'http://localhost:8080/api';

// Create an Axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the JWT token in headers for authenticated requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Authentication Services
export const login = async (username, password) => {
  const response = await api.post('/auth/login', { username, password });
  return response.data; // Returns { token: "..." }
};

export const register = async (username, password, name) => {
  const response = await api.post('/auth/register', { username, password, name });
  return response.data; // Returns success message
};

// Bus Services
export const getAllBuses = async () => {
  const response = await api.get('/buses');
  return response.data; // Returns array of buses
};

export const searchBuses = async (source, destination) => {
  const response = await api.get(`/buses/search?source=${source}&destination=${destination}`);
  return response.data; // Returns array of matching buses
};

// Booking Services
export const createBooking = async (busId, passengerId) => {
  const response = await api.post('/bookings', { busId, passengerId });
  return response.data; // Returns created booking object
};

export const getBookingHistory = async () => {
  const response = await api.get('/bookings/history');
  return response.data; // Returns array of bookings
};

// Passenger Services
export const createPassenger = async (passengerData) => {
  const response = await api.post('/passengers', passengerData);
  return response.data; // Returns created passenger object
};

// User Profile Services
export const getUserProfile = async () => {
  const response = await api.get('/users/profile');
  return response.data; // Returns { name, email }
};

export const updateUserProfile = async (userData) => {
  const response = await api.put('/users/profile', userData);
  return response.data; // Returns success message
};

export const changePassword = async (newPassword) => {
  const response = await api.put('/users/change-password', { newPassword });
  return response.data; // Returns success message
};

export default api;