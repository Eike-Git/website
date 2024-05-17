<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="registerUsername" type="text" placeholder="Username" required />
      <input v-model="registerEmail" type="email" placeholder="Email" required />
      <input v-model="registerPassword" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>

    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="loginIdentifier" type="text" placeholder="Email or Username" required />
      <input v-model="loginPassword" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://100.68.230.120:1337';

export default {
  data() {
    return {
      registerUsername: '',
      registerEmail: '',
      registerPassword: '',
      loginIdentifier: '',
      loginPassword: '',
      jwt: '',
    };
  },
  methods: {
    async handleRegister() {
      try {
        const response = await axios.post(`${API_URL}/auth/local/register`, {
          username: this.registerUsername,
          email: this.registerEmail,
          password: this.registerPassword,
        });
        this.jwt = response.data.jwt; // Speichere den JWT-Token
        alert('Registration successful!');
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed');
      }
    },
    async handleLogin() {
      try {
        const response = await axios.post(`${API_URL}/auth/local`, {
          identifier: this.loginIdentifier,
          password: this.loginPassword,
        });
        this.jwt = response.data.jwt; // Speichere den JWT-Token
        alert('Login successful!');
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed');
      }
    },
  },
};
</script>
