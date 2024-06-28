<template>
  <select :value="selectedGenre" @change="emitSelectedGenreChange">
    <option value="">Alle Genres</option>
    <option v-for="genre in uniqueGenres" :key="genre" :value="genre">
      {{ genre }}
    </option>
  </select>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class FilterComponent extends Vue {
  @Prop({ type: Array, required: true }) uniqueGenres!: string[];
  @Prop({ type: String, required: true }) selectedGenre!: string;

  @Emit('update:selectedGenre')
  emitSelectedGenreChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    return target.value;
  }
}
</script>

<style scoped>
/* Add any custom styles for the filter component here */
</style>
