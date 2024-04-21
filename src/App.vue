<template>
  <div id="app">
    <!-- Andere Teile deiner App -->
    <Film-Liste></Film-Liste>
  </div>
</template>

<script>
import FilmListe from './components/FilmListe.vue'

export default {
  name: 'App',
  components: {
    'Film-Liste': FilmListe
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
