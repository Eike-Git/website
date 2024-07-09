<template>
  <div>
    <HeaderComponent/>
    <DropdownFilter @genre-changed="applyGenreFilter" />
    <div v-if="filteredData.length > 0" class="film-grid">
      <MovieVisuals v-for="film in filteredData" :key="film.id" :film="film" />
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import axios from 'axios';
import MovieVisuals from './MovieVisuals.vue';
import DropdownFilter from './DropdownFilter.vue';
import HeaderComponent from './HeaderSlider.vue';

export default {
  name: "DataComponent",
  components: {
    MovieVisuals,
    DropdownFilter,
    HeaderComponent
  },
  data() {
    return {
      dataFromApi: [],
      filteredData: [],
      selectedGenre: ""
    };
  },
  methods: {
    applyGenreFilter(genre) {
      this.selectedGenre = genre;
      this.filterData();
    },
    filterData() {
      if (this.selectedGenre === "") {
        this.filteredData = this.dataFromApi;
      } else {
        this.filteredData = this.dataFromApi.filter(film => film.genre === this.selectedGenre);
      }
    }
  },
  async created() {
    try {
      const res = await axios.get('http://100.68.230.120:1337/movies');
      this.dataFromApi = res.data;
      this.filteredData = this.dataFromApi; 
    } catch (e) {
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
