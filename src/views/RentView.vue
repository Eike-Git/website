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
          <label for="rentalFrom" class="formLabel">Ausleihdatum von</label>
          <input type="date" class="formControl" id="rentalFrom" v-model="rentalFrom" placeholder="Ausleihdatum von" required>
        </div>
        <div class="form">
          <label for="rentalTo" class="formLabel">Ausleihdatum bis</label>
          <input type="date" class="formControl" id="rentalTo" v-model="rentalTo" placeholder="Ausleihdatum bis" required>
        </div>
        <button type="submit" class="btn btn-primary">Formular absenden</button>
      </form>
    </div>
    <div class="placeholder"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { setMoviesAsRented, saveRentalData } from '@/services/RentalService';

interface RentalData {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  plz: string;
  rentalFrom: Date;
  rentalTo: Date;
  movieId: string;
}


export default defineComponent({
  props: ['name', 'id'],
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const street = ref('');
    const city = ref('');
    const plz = ref('');
    const rentalFrom = ref(new Date());
    const rentalTo = ref(new Date());
    const defaultDate = new Date();
    const movieId = ref('');


    const extractIdFromUrl = (url: string): string | null => {
      const parts = url.split('/');
      const id = parts[parts.length - 1];
      if (!isNaN(Number(id))) {
        return id;
      } else {
        return null;
      }
    };

    onMounted(() => {
      movieId.value = extractIdFromUrl(window.location.href) || '';
    });



    const submitForm = async () => {
      console.log('Form submitted');
      const rentalData: RentalData = {
        firstName: firstName.value,
        lastName: lastName.value,
        street: street.value,
        city: city.value,
        plz: plz.value,
        rentalFrom: rentalFrom.value!,
        rentalTo: rentalTo.value!,
        movieId: movieId.value
      };

      try {
        console.log('Calling setMoviesAsRented');
        await setMoviesAsRented();
        console.log('Calling saveRentalData');
        await saveRentalData(rentalData);
        resetForm();

        console.log('first Name:', firstName.value);
        console.log('last Name:', lastName.value);
        console.log('Street:', street.value);
        console.log('City:', city.value);
        console.log('PLZ:', plz.value);
        console.log('Rental from Datum:', rentalFrom.value);
        console.log('Rental to Datum:', rentalTo.value);

      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    const resetForm = () => {
      firstName.value = '';
      lastName.value = '';
      street.value = '';
      city.value = '';
      plz.value = '';
      rentalFrom.value = new Date(defaultDate);
      rentalTo.value = new Date(defaultDate);
    };

    return {
      firstName,
      lastName,
      street,
      city,
      plz,
      rentalFrom,
      rentalTo,
      movieId,
      submitForm
    };
  }
});
</script>


<style scoped>
.form-container {
  margin: 0 auto;
  padding: 60px 2vw 60px 2vw;
  max-width: 400px;
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
  height: 200px;
}
</style>
