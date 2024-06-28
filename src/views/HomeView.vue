<template>
  <div class="home">
    <MoviesApi/>
    <HeaderSlider/>
  </div>
</template>

<script>
import MoviesApi from '@/components/DataComponent.vue';
import HeaderSlider from '@/components/HeaderSlider.vue';

export default {
  name: 'HomeView',
  components: {
    MoviesApi,
    HeaderSlider
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
