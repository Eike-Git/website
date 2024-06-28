<script lang="ts">
import Vue from 'vue';
import Options from 'vue-class-component';

@Options({
  props: {
    uniqueGenres: {
      type: Array,
      required: true
    },
    selectedGenre: {
      type: String,
      required: true
    }
  },
  emits: ['update:selectedGenre']
})
export default class FilterComponent extends Vue {
  emitSelectedGenreChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.$emit('update:selectedGenre', target.value);
  }
}
</script>

<template>
  <select :value="selectedGenre" @change="emitSelectedGenreChange">
    <option value="">Alle Genres</option>
    <option v-for="genre in uniqueGenres" :key="genre" :value="genre">
      {{ genre }}
    </option>
  </select>
</template>

<style scoped>
</style>
