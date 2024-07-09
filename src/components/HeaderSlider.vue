<template>
  <header class="flex-header" v-if="currentFilm">
    <div class="left-column">
      <h1>{{ currentFilm.name }}</h1>
    </div>
    <div class="right-column">
      <img :src="currentFilm.imageURL" alt="Film Image" class="film-image" />
    </div>
  </header>
  <p v-else>Loading...</p>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HeaderSlider',
  data() {
    return {
      films: [],
      currentFilmIndex: 0
    };
  },
  computed: {
    currentFilm() {
      return this.films[this.currentFilmIndex];
    }
  },
  methods: {
    async fetchFilms() {
      try {
        const res = await axios.get('http://100.68.230.120:1337/movies');
        this.films = res.data;
        if (this.films.length > 0) {
          this.startFilmRotation();
        }
      } catch (e) {
        console.error(e);
      }
    },
    startFilmRotation() {
      setInterval(() => {
        this.currentFilmIndex = (this.currentFilmIndex + 1) % this.films.length;
      }, 10000); // Alle 10 Sekunden wechseln
    }
  },
  created() {
    this.fetchFilms();
  }
};
</script>

<style scoped>
.flex-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96vw;
  padding: 1rem;
  background-color: #f8f9fa;
}

.left-column {
  flex: 1;
}

.right-column {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.film-image {
  width: 100px;
  height: auto;
}

@media (max-width: 768px) {
  .flex-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .right-column {
    justify-content: flex-start;
    margin-top: 1rem;
  }

  .film-image {
    margin-top: 1rem;
  }
}
</style>
