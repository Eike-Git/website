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

export default {
  name: "FilmListe",
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
