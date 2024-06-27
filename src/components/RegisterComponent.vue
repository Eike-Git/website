<template>
  <div class="registerWrapper">
    <div class="registerContainer">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
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

<style scoped>
.registerWrapper {
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5; /* Hintergrundfarbe für den gesamten Bereich */
}

.registerContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.8); /* Halbtransparenter Hintergrund */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Leichter Schatten */
  border-radius: 8px; /* Abgerundete Ecken */
}

h2 {
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  color: #333; /* Dunkler Text */
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #ddd; /* Leichter grauer Rahmen unten */
  background: transparent;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  color: #333; /* Dunkler Text */
}

input::placeholder {
  color: #ccc; /* Heller Platzhaltertext */
}

button {
  padding: 10px;
  border: 1px solid #fff; 
  border-radius: 6px; 
  background: transparent;
  color: #fff; 
  font-size: 16px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-top: 20px;
}

button:hover {
  background-color: #fff; 
  color: #252525; 
}
</style>