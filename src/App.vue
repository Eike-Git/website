<template>
  <div class="background">
    <nav>
      <div class="navContainer">
        <div class="navItem"><router-link to="/"><img src="./assets/IconHome.png" alt=""></router-link> </div>
        <div class="navItem"><router-link to="/suche"><img src="./assets/IconFilter.png" alt=""></router-link></div>
        <div class="navItem"><router-link to="/konto"><img src="./assets/IconKonto.png" alt=""></router-link></div>
        <div class="navItem"><router-link to="/warenkorb"><img src="./assets/IconWarenkorb.png" alt=""></router-link></div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
h1 {
    font-size: 3rem;
    margin: 0;
}
h3 {
  margin: 10px 0 10px 0;
}
.background {
  background-image: url(./assets/backgroundHome.png);
  background-size: cover;
  height: 100vh;
}

nav {
  padding: 30px;
}
.navContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 200px; 
  margin: 0 auto; 
}
.navItem {
  width: 200px;
  padding: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  flex: 1 1 calc(10px + 1em); 
}

.navItem img {
  width: auto;
  height: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

