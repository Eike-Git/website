<template>
    <div>
      <h1>Film ausleihen: {{ film.name }}</h1>
      <p><strong>Genre:</strong> {{ film.genre }}</p>
      <p><strong>Year:</strong> {{ film.year }}</p>
      <p>{{ film.synopsis }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'RentView',
    data() {
      return {
        film: {}
      };
    },
    async created() {
      const filmId = this.$route.params.id;
      try {
        const res = await axios.get(`http://100.68.230.120:1337/movies/${filmId}`);
        this.film = res.data;
      } catch (e) {
        console.error(e);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Füge bei Bedarf Stil hinzu */
  </style>
  