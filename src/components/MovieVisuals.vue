<template>
    <div class="film-tile">
      <img :src="film.imageURL" alt="Film Image" class="film-image"/>
      <h2>{{ film.name }}</h2>
      <p>{{ film.synopsis }}</p>
      <p><strong>Year:</strong> {{ film.year }}</p>
      <p><strong>Genre:</strong> {{ film.genre }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "MovieVisuals",
    props: {
      film: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .film-tile {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 16px;
    margin: 16px;
    text-align: center;
    transition: transform 0.2s;
    flex: 1 1 calc(25% - 32px); 
    box-sizing: border-box;
  }
  
  .film-tile:hover {
    transform: translateY(-5px);
  }
  
  .film-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 8px;
  }
  
  h2 {
    margin: 8px 0;
    font-size: 1.5em;
  }
  
  p {
    margin: 4px 0;
  }
  
  @media (max-width: 768px) {
    .film-tile {
      flex: 1 1 calc(50% - 32px); 
    }
  }
  
  @media (max-width: 480px) {
    .film-tile {
      flex: 1 1 100%; 
    }
  }
  </style>
  