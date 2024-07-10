<template>
  <div>
    <div class="film-tile" @click="showModal = true">
      <img :src="film.imageURL" alt="Film Image" class="film-image"/>
      <h2>{{ film.name }}</h2>
    </div>

    <div v-if="showModal" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="showModal = false">&times;</span>
        <iframe v-if="film.trailerURL" :src="getEmbedURL(film.trailerURL)" frameborder="0" allowfullscreen class="modal-film-video"></iframe>
        <h2>{{ film.name }}</h2>
        <p><strong>Genre:</strong> {{ film.genre }}</p>
        <p><strong>Year:</strong> {{ film.year }}</p>
        <p>{{ film.synopsis }}</p>
        <button @click="RentFilm">Ausleihen</button>
      </div>
    </div>
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
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    RentFilm() {
      this.$router.push({ 
        name: 'rent', 
        params: 
          { 
            name: this.film.name, 
            id: this.film.id
          } 
      });
    },
    getEmbedURL(url) {
      const videoId = url.split('v=')[1] || url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}`;
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
  flex: 1 1 calc(10% - 32px);
  box-sizing: border-box;
  max-width: 400px;
  cursor: pointer;
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

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 500px;
  width: 90%;
  position: relative;
}

.modal-content .close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
}

.modal-film-video {
  width: 100%;
  height: 400px;
  border-radius: 4px;
  margin-bottom: 16px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
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
    flex: 1 1 calc(15% - 32px);
  }
}

@media (max-width: 480px) {
  .film-tile {
    flex: 1 1 30%;
  }
}
</style>
