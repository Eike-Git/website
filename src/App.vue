<template>
  <div class="background">
    <div class="container">
      <div class="row">
        <div class="col">
          <nav class="navbar">
            <router-link to="/" tag="img" src="src/assets/IconHome.png"></router-link>
            <router-link to="/" tag="img" src="src/assets/IconFilter.png"></router-link>
          </nav>
        </div>
      </div>
    </div>
  </div>
  
  <router-view/>
</template>

<style>
/* .background {
  background-image: url('src/assets/backgroundHome.png');
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  height: 100vh;
} */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
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

.navbar > router-link img {
  width: 30px;
  height: 30px;
}

</style>
