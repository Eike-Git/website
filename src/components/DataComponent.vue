<template>
  <div>
    <h1>Daten von der lokalen JSON-API</h1>
    <ul v-if="dataFromApi">
      <li v-for="item in dataFromApi" :key="item.id">
        {{ item.name}}
        <img :src='item.imageURL'>
        {{ item.synopsis }}
        {{ item.year }}
        {{ item.genre }}        
      </li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
// import axiosJsonp from 'axios-jsonp';
import axios from 'axios';
// axios.defaults.adapter = axiosJsonp;

export default {
  name: "FilmListe",
  data() {
    return {
      dataFromApi: []
    };
  },
  async created() {
    try {
      const res = await axios.get('http://100.68.230.120:1337/movies')
      
      this.dataFromApi = res.data;
    }catch(e) {
      console.error(e);
    }
  }
};

</script>