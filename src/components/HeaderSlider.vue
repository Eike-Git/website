<template>
  <header class="flex-header">
    <div class="left-column">
      <h1>Logo</h1>
    </div>
    <div class="right-column">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ResponsiveHeader',
};
</script>

<style scoped>
.flex-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
}

.left-column {
  flex: 1;
}

.right-column {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: #333;
}

@media (max-width: 768px) {
  .flex-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .right-column {
    justify-content: flex-start;
    margin-top: 1rem;
  }

  nav ul {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
