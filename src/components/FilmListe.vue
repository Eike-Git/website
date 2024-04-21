// FilmListe.vue
<template>
  <div>
    <h1>Filmliste</h1>
    <ul>
      <li v-for="film in filme" :key="film.field_film_id">{{ film.field_film_titel }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      filme: []
    };
  },
  mounted() {
    axios.get('https://easy-weekly-werewolf.ngrok-free.app/api/filme')
      .then(response => {
        this.filme = response.data;
      })
      .catch(error => {
        console.error('Fehler beim Abrufen der Benutzerliste:', error);
      });
  }
};
</script>
