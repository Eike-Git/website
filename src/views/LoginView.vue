<template>
  <div class="end-user">
    <LoginApi/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginApi from '@/components/LoginComponent.vue'

export default {
  name: 'LoginView',
  components: {
    LoginApi
  }
}
</script>