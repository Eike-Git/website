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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { setMoviesAsRented, saveRentalData, resetMovieStatus, deleteRentalData } from '@/services/RentalService';

interface RentalData {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  plz: string;
  rentalFrom: Date;
  rentalTo: Date;
}

export default defineComponent({
  props: ['name', 'id'],
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const street = ref('');
    const city = ref('');
    const plz = ref('');
    const rentalFrom = ref<Date | null>(null);
    const rentalTo = ref<Date | null>(null);

    const submitForm = async () => {
      console.log('Form submitted');
      const rentalData: RentalData = {
        firstName: firstName.value,
        lastName: lastName.value,
        street: street.value,
        city: city.value,
        plz: plz.value,
        rentalFrom: rentalFrom.value!,
        rentalTo: rentalTo.value!
      };

      try {
        console.log('Calling setMoviesAsRented');
        await setMoviesAsRented();
        console.log('Calling saveRentalData');
        await saveRentalData(rentalData);
        resetForm();

        console.log('Rental to Datum:', rentalTo.value);

        const rentalEndDate = rentalTo.value!;
        const now = new Date();
        const timeUntilRentalEnd = rentalEndDate.getTime() - now.getTime();

        setTimeout(async () => {
          console.log('Timeout reached, resetting movie status and deleting rental data');
          await resetMovieStatus();
          await deleteRentalData(rentalData.rentalTo);
        }, timeUntilRentalEnd);
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
      rentalFrom.value = null;
      rentalTo.value = null;
    };

    return {
      firstName,
      lastName,
      street,
      city,
      plz,
      rentalFrom,
      rentalTo,
      submitForm
    };
  }
});
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
