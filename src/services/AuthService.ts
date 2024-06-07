// src/services/authService.ts
import axios from 'axios';

const API_URL = 'http://100.68.230.120:1337'; // URL Strapi-API

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
  try {
    const response = await axios.post<RegisterResponse>(`${API_URL}/auth/local/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Registration failed:', error.response.data);
      throw new Error(`Registration failed: ${error.response.data.message}`);
    } else {
      console.error('Unexpected error:', error);
      throw new Error('Unexpected error occurred during registration');
    }
  }
};

export const login = async (identifier: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/auth/local`, {
      identifier,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Login failed:', error.response.data);
      throw new Error(`Login failed: ${error.response.data.message}`);
    } else {
      console.error('Unexpected error:', error);
      throw new Error('Unexpected error occurred during login');
    }
  }
};