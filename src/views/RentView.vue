<template>
    <div>
      <h1>Film ausleihen: {{ name }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RentView',
    props: ['name'],
    data() {
      return {
        film: {}
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  