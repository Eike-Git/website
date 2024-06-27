<template>
  <div class="home">
    <HeaderSlider :film="filmInfo" />
  </div>
</template>

<script>
import HeaderSlider from '@/components/HeaderSlider.vue';
import axios from 'axios'; 

export default {
  name: 'HomeView',
  components: {
    HeaderSlider,
  },
  data() {
    return {
      filmInfo: null,
    };
  },
  async created() {
    try {
      const response = await axios.get('http://100.68.230.120:1337/movies/'); // Beispiel-URL anpassen
      this.filmInfo = response.data;
    } catch (error) {
      console.error('Error fetching film info:', error);
    }
  },
};
</script>

<style scoped>
.home {
  background-color: #f5f5f5; /* Hintergrundfarbe für den gesamten Bereich */
}
</style>
