// src/services/authService.ts
import axios from 'axios';

const API_URL = 'http://100.68.230.120:1337'; // URL deiner Strapi-API

interface RegisterResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

interface LoginResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

export const register = async (username: string, email: string, password: string): Promise<RegisterResponse> => {
  const response = await axios.post<RegisterResponse>(`${API_URL}/auth/local/register`, {
    username,
    email,
    password,
  });
  return response.data;
};

export const login = async (identifier: string, password: string): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}/auth/local`, {
    identifier,
    password,
  });
  return response.data;
};
