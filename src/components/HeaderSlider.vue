<template>
  <header class="flex-header">
    <div class="left-column">
      <h1>Logo</h1>
    </div>
    <div class="right-column">
      <img :src="film.imageURL" alt="Film Image" class="film-image" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    film: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped>
.flex-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96vw;
  padding: 1rem;
  background-color: #f8f9fa;
}

.left-column {
  flex: 1;
}

.right-column {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.film-image {
  width: 100px; 
  height: auto;
}

@media (max-width: 768px) {
  .flex-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .right-column {
    justify-content: flex-start;
    margin-top: 1rem;
  }

  .film-image {
    margin-top: 1rem;
  }
}
</style>
