<template>
  <div>
    <label for="genre-filter">Filter nach Genre</label>
    <select id="genre-filter" v-model="selectedGenre" @change="updateSelectedGenre">
      <option v-for="(genre, index) in genres" :key="index" :value="genre.value">
        {{ genre.label }}
      </option>
    </select>
    <p>Ausgewähltes Genre: {{ selectedGenre }}</p>
  </div>
</template>

<script>
export default {
  name: 'DropdownFilter',
  data() {
    return {
      selectedGenre: null,
      genres: [
        { value: '', label: 'Alle Genres' },
        { value: 'action', label: 'Action' },
        { value: 'comedy', label: 'Comedy' },
        { value: 'drama', label: 'Drama' },
        { value: 'horror', label: 'Horror' },
        { value: 'science-fiction', label: 'Science Fiction' },
        { value: 'thriller', label: 'Thriller' }
      ]
    };
  },
  methods: {
    updateSelectedGenre() {
      this.$emit('genre-changed', this.selectedGenre);
    }
  }
};
</script>

<style scoped>
/* Stile für die Dropdown-Komponente */
</style>
