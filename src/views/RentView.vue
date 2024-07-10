<template>
    <div>
      <h2>{{ name }}</h2>
    </div>
    <div class="form-container">
        <form @submit.prevent="submitForm">
        <div class="form">
            <label for="firstName" class="formLabel">Vorname</label>
            <input type="text" class="formControl" id="firstName" v-model="firstName" required>
        </div>
        <div class="form">
            <label for="lastName" class="formLabel">Nachname</label>
            <input type="text" class="formControl" id="lastName" v-model="lastName" required>
        </div>
        <div class="form">
            <label for="street" class="formLabel">Straße</label>
            <input type="text" class="formControl" id="street" v-model="street" required>
        </div>
        <div class="form">
            <label for="city" class="formLabel">Ort</label>
            <input type="text" class="formControl" id="city" v-model="city" required>
        </div>
        <div class="form">
            <label for="plz" class="formLabel">PLZ</label>
            <input type="text" class="formControl" id="plz" v-model="plz" required>
        </div>
        <div class="form">
            <label for="rentalDates" class="formLabel">Ausleihdatum von bis</label>
            <div class="row">
            <div class="col-sm-6">
                <input type="date" class="formControl" id="rentalFrom" v-model="rentalFrom" required>
            </div>
            <div class="col-sm-6 mt-2 mt-sm-0">
                <input type="date" class="formControl" id="rentalTo" v-model="rentalTo" required>
            </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Formular absenden</button>
        </form>
  </div>
  </template>
  
  <script>
  export default {
    name: 'RentView',
    props: ['name', 'id'],
    mounted() {
        console.log('Prop "name" received:', this.name, 'id:', this.id);
    },
    data() {
        return {
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            plz: '',
            rentalFrom: '',
            rentalTo: ''
        };
    },  
    methods: {
        name: 'MinimalForm',
        submitForm() 
        {
            console.log('Form submitted with data:', {
                firstName: this.firstName,
                lastName: this.lastName,
                street: this.street,
                city: this.city,
                plz: this.plz,
                rentalFrom: this.rentalFrom,
                rentalTo: this.rentalTo
            });
            this.firstName = '';
            this.lastName = '';
            this.street = '';
            this.city = '';
            this.plz = '';
            this.rentalFrom = '';
            this.rentalTo = '';
        }
  }
  };
  </script>
  
  <style scoped>
  </style>
  