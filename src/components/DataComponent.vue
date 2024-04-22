<template>
  <div>
    <h1>Daten von der lokalen JSON-API</h1>
    <ul v-if="dataFromApi">
      <li v-for="item in dataFromApi" :key="item.field_film_id">{{ item.field_film_titel }}</li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dataFromApi: []
    };
  },
  mounted() {
    axios.get('https://easy-weekly-werewolf.ngrok-free.app/api/filme')
      .then(response => {
        this.dataFromApi = response.data;
      })
      .catch(error => {
        console.error('Fehler beim Abrufen der Daten:', error);
      });
  }
};
</script>
