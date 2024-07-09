<template>
  <div>
    <label for="genre-filter">Filter nach Genre</label>
    <select id="genre-filter" v-model="selectedGenre" @change="updateSelectedGenre">
      <option v-for="(genre, index) in genres" :key="index" :value="genre.value">
        {{ genre.label }}
      </option>
    </select>
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
        { value: 'Action', label: 'Action' },
        { value: 'Comedy', label: 'Comedy' },
        { value: 'Drama', label: 'Drama' },
        { value: 'Horror', label: 'Horror' },
        { value: 'Science Fiction', label: 'Science Fiction' },
        { value: 'Mystery', label: 'Mystery' },
        { value: 'Adventure', label: 'Adventure' },
        { value: 'Crime', label: 'Crime' },
        { value: 'Anime', label: 'Anime' },
        { value: 'Western', label: 'Western' }
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

#genre-filter {
 margin: 0 0 0 1rem;
 background-color: rgba(28, 28, 28, 0.6);
 padding: 5px;
 border: none;
 border-radius: 6px;
 /* border-bottom: 1px solid #ccc; */
 color: #e7e7e7;
}

select {
  color: #e7e7e7;
}
</style>
