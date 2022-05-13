<template>
<div>
  <h1>COCHE - Options API - Vue2</h1>
  <h2>Marca: {{ brand }}</h2>
  <h2>Modelo: {{ model }}</h2>
  <h2>Precio: {{ price }}</h2>
  <h2>Potencia: {{ sum }}</h2>
  <div v-for="(number, index) in array" :key='index'>
    <p>{{number}}</p>
  </div>
  <button @click="upPower()">Aumentar</button>

  <button @click="downPower()">Disminuir</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      brand: "Seat",
      model: "Leon",
      price: 38000,
      power: 60,
      array: [3,4,5,2,6,1],
      sum: 0,
    };
  },
  methods: {
    upPower() {
      this.sum = this.power + this.sum
    },
    downPower() {
      console.log(this.power);
    },
  },
};
</script>

<style></style>
