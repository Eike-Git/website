<template>
    <div>
      <h1>Film ausleihen: {{ name }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RentView',
    props: ['name']
  };
  </script>
  
  <style scoped>
  </style>
  