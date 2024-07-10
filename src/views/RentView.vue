<template>
    <div>
      <h2>{{ name }}</h2>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'RentView',
    props: ['name'],
    mounted() {
        console.log('Prop "name" received:', this.name);
    }
  };
  </script>
  
  <style scoped>
  </style>
  