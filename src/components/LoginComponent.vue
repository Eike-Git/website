<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="identifier" type="text" placeholder="Email or Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { login } from '@/services/authService';

export default {
  data() {
    return {
      identifier: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await login(this.identifier, this.password);
        alert('Login successful!');
        console.log('JWT Token:', response.jwt); // Hier könntest du den JWT-Token speichern
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed');
      }
    },
  },
};
</script>
