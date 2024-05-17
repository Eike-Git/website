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

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { register } from '@/services/AuthService';

export default defineComponent({
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');

    const handleRegister = async () => {
      try {
        const response = await register(username.value, email.value, password.value);
        alert('Registration successful!');
        console.log('JWT Token:', response.jwt); // Hier könntest du den JWT-Token speichern
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed');
      }
    };

    return {
      username,
      email,
      password,
      handleRegister,
    };
  },
});
</script>
