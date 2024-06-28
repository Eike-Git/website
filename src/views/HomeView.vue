<template>
  <div class="home">
    <HeaderSlider/>
    <DataComponent/>
  </div>
</template>

<script>
import DataComponent from '@/components/DataComponent.vue';
import HeaderSlider from '@/components/HeaderSlider.vue';

export default {
  name: 'HomeView',
  components: {
    DataComponent,
    HeaderSlider
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
