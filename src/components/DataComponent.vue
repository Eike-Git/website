<template>
  <div>
    <h1>Daten von der lokalen JSON-API</h1>
    <div v-if="dataFromApi" class="film-grid">
      <FilmTile v-for="film in dataFromApi" :key="film.id" :film="film" />
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import axios from 'axios';
import FilmTile from '@/components/MovieVisuals.vue';

export default {
  name: "DataComponent",
  components: {
    FilmTile
  },
  data() {
    return {
      dataFromApi: []
    };
  },
  async created() {
    try {
      const res = await axios.get('http://100.68.230.120:1337/movies');
      this.dataFromApi = res.data;
    } catch(e) {
      console.error(e);
    }
  }
};
</script>

<style scoped>
.film-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 16px;
}
</style>
