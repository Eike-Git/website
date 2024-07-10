<template>
    <div>
      <h2>{{ name }}</h2>
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <div class="form">
            <label for="firstName" class="formLabel">Vorname</label>
            <input type="text" class="formControl" id="firstName" v-model="firstName" placeholder="Vorname" required>
          </div>
          <div class="form">
            <label for="lastName" class="formLabel">Nachname</label>
            <input type="text" class="formControl" id="lastName" v-model="lastName" placeholder="Nachname" required>
          </div>
          <div class="form">
            <label for="street" class="formLabel">Straße</label>
            <input type="text" class="formControl" id="street" v-model="street" placeholder="Straße" required>
          </div>
          <div class="form">
            <label for="city" class="formLabel">Ort</label>
            <input type="text" class="formControl" id="city" v-model="city" placeholder="Ort" required>
          </div>
          <div class="form">
            <label for="plz" class="formLabel">PLZ</label>
            <input type="text" class="formControl" id="plz" v-model="plz" placeholder="PLZ" required>
          </div>
          <div class="form">
            <label for="rentalDates" class="formLabel">Ausleihdatum von bis</label>
            <div class="row">
              <div class="col-sm-6">
                <input type="date" class="formControl" id="rentalFrom" v-model="rentalFrom" placeholder="Ausleihdatum von" required>
              </div>
              <div class="col-sm-6 mt-2 mt-sm-0">
                <input type="date" class="formControl" id="rentalTo" v-model="rentalTo" placeholder="Ausleihdatum bis" required>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Formular absenden</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RentView',
    props: ['name', 'id'],
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
      submitForm() {
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
  .form-container {
    margin-top: 20px;
    padding: 60px 2vw 60px 2vw;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
  
  .form {
    margin-bottom: 16px;
  }
  
  .formLabel {
    font-size: 16px;
    color: #ccc;
  }
  
  .formControl {
    width: 50%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: transparent;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  </style>
  