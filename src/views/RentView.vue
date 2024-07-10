<template>
    <div>
      <h1>Film ausleihen: {{ name }}</h1>
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
  