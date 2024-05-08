<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <nav class="navbar">
          <router-link to="/"><img src="src/assets/Gruppe 9.png" alt="homeIcon"></router-link> |
          <router-link to="/about"><img src="src/assets/Gruppe 16.png" alt="filterIcon"></router-link>
        </nav>
      </div>
    </div>
  </div>
  
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
