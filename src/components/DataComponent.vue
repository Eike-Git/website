<template>
  <div>
    <h1>Daten von der lokalen JSON-API</h1>
    <ul v-if="dataFromApi">
      <li v-for="item in dataFromApi" :key="item.field_film_id">
        {{ item.field_film_titel }}
        {{ item.field_film_beschreibung }}
        {{ item.field_film_erscheinungsdatum }}
        {{ item.field_film_genre }}
        {{ item.field_film_hauptdarsteller_in_1 }}
        {{ item.field_film_hauptdarsteller_in_2 }}
        {{ item.field_film_regisseur_in }}
        <img :src="'https://easy-weekly-werewolf.ngrok-free.app'+item.field_film_poster" style="width:100%;" alt="alternative">
      </li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.headers.common['ngrok-skip-browser-warning'] = `1`;

export default {
  name: "FilmListe",
  metaInfo: {
    meta: [
      {
        httpEquiv: 'Content-Security-Policy',
        content: "img-src 'self' https://easy-weekly-werewolf.ngrok-free.app/sites/default/files/2024-04/* http://192.168.178.16/*"
      }
    ]
  },
  data() {
    return {
      dataFromApi: []
    };
  },
  async created() {
    try {
      const res = await axios.get('https://easy-weekly-werewolf.ngrok-free.app/api/filme')
      
      this.dataFromApi = res.data;
    }catch(e) {
      console.error(e);
    }
  }
};

</script>
