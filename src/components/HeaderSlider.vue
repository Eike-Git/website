<template>
    <div v-if="film" class="sliderContainer">
      <div class="sliderRow">
        <div class="sliderCol headerContent">
          <h1>{{ film.title }}</h1>
          <h3>{{ film.tagline }}</h3>
          <p>{{ film.description }}</p>
        </div>
        <div class="sliderCol imgContainer" :style="{ backgroundImage: 'url(' + film.imageURL + ')' }">
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    name: 'HeaderSlider',
    setup() {
      const film = ref(null);
  
      onMounted(async () => {
        try {
          const response = await axios.get('http://100.68.230.120:1337/movies/1'); // Beispiel-API-Aufruf
          film.value = response.data;
        } catch (error) {
          console.error('Error fetching film:', error);
        }
      });
  
      return { film };
    },
  });
  </script>
  
  <style scoped>
  .sliderContainer {
    padding: 0 0 0 0vw;
    text-align: left;
    color: #fff;
  }
  .sliderRow {
    display: flex;
    flex-wrap: wrap;
  }
  .sliderCol {
    flex: 1 1 300px;
  }
  .headerContent {
    padding: 10vw 3vw 10px 3vw;
  }
  .sliderRow > .imgContainer {
    height: auto;
    width: 90%;
    min-height: 400px;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
    box-shadow: 4px 4px 20px 2px #0b0b0b;
    margin: 10vw 20px 10px 10px;
  }
  @media (max-width: 900px) {
    .sliderRow {
      flex-direction: column; 
    }
  }
  </style>
  