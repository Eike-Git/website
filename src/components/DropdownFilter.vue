<template>
    <div>
      <label for="genre-filter">Filter nach Genre</label>
      <select id="genre-filter" v-model="selectedGenre">
        <option v-for="(genre, index) in genres" :key="index" :value="genre.value">{{ genre.label }}</option>
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
          { value: 'action', label: 'Action' },
          { value: 'comedy', label: 'Comedy' },
          { value: 'drama', label: 'Drama' },
          { value: 'horror', label: 'Horror' },
          { value: 'sci-fi', label: 'Sci-Fi' },
          { value: 'thriller', label: 'Thriller' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Stile für die Dropdown-Komponente */
  </style>
  