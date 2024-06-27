<template>
    <div class="sliderContainer">
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
  </template>
  
  <script>
  export default {
    name: 'HeaderSlider',
    props: {
      film: {
        type: Object,
        required: true,
      },
    },
  };
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
    min-width: auto;
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
  