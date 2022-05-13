<template>
  <h2>v-for v-if v-else-if v-else</h2>
  <p>Marca: {{ brand }}</p>
  <p>Marca: {{ model }}</p>
  <p>Potencias</p>
  <ul>
    <!--     
      <li v-for="(power, index) in powers" :key="index">
      <template v-if="power < 300">
        {{ power }}
      </template>
    </li> -->
    <div v-for="(power, index) in powers" :key="index">
      <li v-if="power < 280">Urbana: {{ power }}</li>
      <li v-else-if="power === 280">Hibrido {{ power }}</li>
      <li v-else>Carrera: {{ power }}</li>
    </div>
  </ul>
  <hr />
  <!--   <p>Potencias Mayores a 300</p>
  <ul>
    <template v-for="(power, index) in powers" :key="index">
    <li v-if="power > 300">
      {{power}}
    </li>
    </template>
  </ul> -->
</template>

<script>
export default {
  name:'Vif',
  setup() {
    const brand = "Audi";
    const model = "A4";
    const powers = [60, 80, 120, 200, 280, 300, 390, 540, 160, 500];

    return {
      brand,
      model,
      powers,
    };
  },
};
</script>

<style></style>
