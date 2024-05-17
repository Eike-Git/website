<template>
  <div class="end-user">
    <RegisterApi/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterApi from '@/components/RegisterComponent.vue'

export default {
  name: 'RegisterView',
  components: {
    RegisterApi
  }
}
</script>