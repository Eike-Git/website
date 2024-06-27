<template>
  <div class="loginConateiner">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="identifier" type="text" placeholder="Email or Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
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
        console.log('JWT Token:', response.jwt); // Hier könntest du den JWT-Token speichern
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

.loginConateiner {
  height: 100%;
  width: auto;
  margin: 0;
}

</style>
