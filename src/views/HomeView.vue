<template>
  <div class="home">
    <MoviesApi/>
  </div>
  <HeaderSlider></HeaderSlider>
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
