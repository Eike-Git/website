<template>
    <div>
      <h2>{{ name }}</h2>

    </div>
  </template>
  
  <script>
  export default {
    name: 'RentView',
    props: ['name', 'id'],
    mounted() {
        console.log('Prop "name" received:', this.name, 'id:', this.id);
    }
  };
  </script>
  
  <style scoped>
  </style>
  