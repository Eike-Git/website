<template>
  <div id="app">
    <!-- Andere Teile deiner App -->
    <data-component></data-component>
  </div>
</template>

<script>
import DataComponent from './components/DataComponent.vue'; // Stelle sicher, dass der Pfad korrekt ist

export default {
  components: {
    'data-component': DataComponent
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
