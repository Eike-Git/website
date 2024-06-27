<template>
  <HeaderSlider></HeaderSlider>
  <div class="home">
    <MoviesApi/>
  </div>
</template>

<script>
// @ is an alias to /src
import MoviesApi from '@/components/DataComponent.vue'
import HeaderSlider from '@/components/HeaderSlider.vue'; 

export default {
  name: 'HomeView',
  components: {
    MoviesApi,
    HeaderSlider
  }
}
</script>
