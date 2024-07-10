<template>
    <div>
      <h1>Film ausleihen: {{ name }}</h1>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'RentView',
    props: ['id', 'name'],
    data() {
      return {
        film: {}
      };
    },
  };
  </script>
  
  <style scoped>
  /* Füge bei Bedarf Stil hinzu */
  </style>
  