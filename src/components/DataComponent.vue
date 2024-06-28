<template>
  <div>
    <FilterComponent
        :uniqueGenres="uniqueGenres"
        v-model:selectedGenre="selectedGenre" />
    <!-- Film Grid Section -->
    <div v-if="filteredData.length > 0" class="film-grid">
      <MovieVisuals v-for="film in filteredData" :key="film.id" :film="film" />
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import axios from 'axios';
import MovieVisuals from './MovieVisuals.vue';
import FilterComponent from './FilterComponent.vue';

export default {
  name: "DataComponent",
  components: {
    MovieVisuals,
    FilterComponent,
  },
  data() {
    return {
      dataFromApi: [],
      selectedGenre: ""
    };
  },
  computed: {
    uniqueGenres() {
      const genres = this.dataFromApi ? [...new Set(this.dataFromApi.map(film => film.genre))] : [];
      return genres;
    },
    filteredData() {
      if (this.selectedGenre === "") {
        return this.dataFromApi || [];
      }
      return this.dataFromApi.filter(film => film.genre === this.selectedGenre);
    },
  },
  async created() {
    try {
      const res = await axios.get('http://100.68.230.120:1337/movies');
      this.dataFromApi = res.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
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
