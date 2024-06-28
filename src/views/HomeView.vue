<template>
  <div class="home">
    <DropdownFilter />
    <MoviesApi />
    <HeaderSlider />
  </div>
</template>

<script>
import MoviesApi from '@/components/MoviesApi.vue'; 
import HeaderSlider from '@/components/HeaderSlider.vue'; 
import DropdownFilter from '@/components/DropdownFilter.vue'; 

export default {
  name: 'HomeView',
  components: {
    MoviesApi,
    HeaderSlider,
    DropdownFilter
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
