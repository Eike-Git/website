<template>
    <div>
      <h1>Film ausleihen: {{ name }}</h1>
      <p><strong>Genre:</strong> {{ film.genre }}</p>
      <p><strong>Year:</strong> {{ film.year }}</p>
      <p>{{ film.synopsis }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'RentView',
    props: ['id', 'name'],
    data() {
      return {
        film: {}
      };
    },
    async created() {
      try {
        const res = await axios.get(`http://100.68.230.120:1337/movies/${this.id}`);
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
  