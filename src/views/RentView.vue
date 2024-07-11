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
  <div class="placeholder">
  </div>
</template>

<script>
import axios from 'axios';

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
      const rentalData = {
        firstName: this.firstName,
        lastName: this.lastName,
        street: this.street,
        city: this.city,
        plz: this.plz,
        rentalFrom: this.rentalFrom,
        rentalTo: this.rentalTo
      };

      axios.get('http://100.68.230.120:1337/movies')
          .then(response => {
            const movies = response.data;
            movies.forEach(movie => {
              if (!movie.geliehen) {
                axios.put(`http://100.68.230.120:1337/movies/${movie.id}`, { geliehen: true });
              }
            });
          });

      axios.post('http://100.68.230.120:1337/verleih', rentalData)
          .then(response => {
            console.log('Verleih data saved:', response.data);
            this.resetForm();
          });

      const rentalEndDate = new Date(this.rentalTo);
      const now = new Date();
      const timeUntilRentalEnd = rentalEndDate - now;

      setTimeout(() => {
        this.resetRentalStatus();
      }, timeUntilRentalEnd);
    },
    resetForm() {
      this.firstName = '';
      this.lastName = '';
      this.street = '';
      this.city = '';
      this.plz = '';
      this.rentalFrom = '';
      this.rentalTo = '';
    },
    resetRentalStatus() {
      axios.get('http://100.68.230.120:1337/movies')
          .then(response => {
            const movies = response.data;
            movies.forEach(movie => {
              if (movie.geliehen) {
                axios.put(`http://100.68.230.120:1337/movies/${movie.id}`, { geliehen: false });
              }
            });
          });

      axios.get('http://100.68.230.120:1337/verleih')
          .then(response => {
            const verleihData = response.data;
            const currentDate = new Date().toISOString().split('T')[0]; // Aktuelles Datum im ISO-Format
            verleihData.forEach(entry => {
              const entryRentalTo = new Date(entry.rentalTo).toISOString().split('T')[0];
              if (entryRentalTo === currentDate) {
                axios.delete(`http://100.68.230.120:1337/verleih/${entry.id}`);
              }
            });
          });
    }
  }

};
</script>

<style scoped>
.form-container {
  margin: 20px 17vw 20px 17vw;
  padding: 60px 2vw 60px 2vw;
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
}

.form {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.formLabel {
  font-size: 16px;
  color: #ccc;
  margin-bottom: 4px;
}

.formControl {
  width: 80%;
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

input[type="date"] {
  color: #ccc;
}

.placeholder {
  width: auto;
  height: 100px;
}
</style>
