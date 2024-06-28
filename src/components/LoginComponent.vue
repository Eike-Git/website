<template>
  <div class="loginWrapper">
    <div class="loginContainer">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="identifier" type="text" placeholder="Email or Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { login } from '@/services/AuthService';

export default defineComponent({
  setup() {
    const identifier = ref('');
    const password = ref('');

    const handleLogin = async () => {
      try {
        const response = await login(identifier.value, password.value);
        alert('Login successful!');
        console.log('JWT Token:', response.jwt);
        localStorage.setItem('jwtToken', response.jwt); // Store the JWT in localStorage
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed');
      }
    };

    return {
      identifier,
      password,
      handleLogin,
    };
  },
});
</script>

<style scoped>
.loginWrapper {
  display: flex;
  justify-content: center;
  height: 100vh;
}

.loginContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

h2 {
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  color: #fff;
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
  border-bottom: 1px solid #ddd;
  background: transparent;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  color: #fff;
}

input::placeholder {
  color: #ccc;
}

button {
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 6px;
  background: transparent;
  color: white;
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
