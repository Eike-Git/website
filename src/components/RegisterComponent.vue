<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { register } from '@/services/authService';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async handleRegister() {
      try {
        const response = await register(this.username, this.email, this.password);
        alert('Registration successful!');
        console.log('JWT Token:', response.jwt); // Hier könntest du den JWT-Token speichern
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed');
      }
    },
  },
};
</script>
