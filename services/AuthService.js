// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://100.68.230.120:1337'; // URL deiner Strapi-API

export const register = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/auth/local/register`, {
    username,
    email,
    password,
  });
  return response.data;
};

export const login = async (identifier, password) => {
  const response = await axios.post(`${API_URL}/auth/local`, {
    identifier,
    password,
  });
  return response.data;
};
