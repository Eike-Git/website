<template>
  <div>
    <h1>Daten von der lokalen JSON-API</h1>
    <ul v-if="dataFromApi">
      <li v-for="item in dataFromApi" :key="item.field_film_id">
        {{ item.field_film_titel }}
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
  data() {
    return {
      dataFromApi: []
    };
  },
  async created() {
    try {
      const res = await axios.get('http://127.0.0.1:32804/api/filme')
      
      this.dataFromApi = res.data;
    }catch(e) {
      console.error(e);
    }
  }
};

</script>
