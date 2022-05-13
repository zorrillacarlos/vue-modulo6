<template>
  <h1>COCHE - Composition API - Vue3</h1>
  <h2>Marca: {{ brand }}</h2>
  <h2>Modelo: {{ model }}</h2>
  <h2>Potencia: {{ power }}</h2>
  <button @click="upPower()" class="rojo">Aumentar</button>
  <button @click="downPower()">Disminuir</button>
  <button @click="resetPower()">Reiniciar</button>
</template>

<script>
export default {
  name:'CarComposition',
  setup() {
    const brand = "Audi";
    const model = "A3";
    const power = 200;
    let sum = 0;

    const upPower = () => {
      sum = sum + power;
      console.log(sum);
    };
    const downPower = () => {
      sum = sum - power;
      console.log(sum);
    };
    const resetPower = () => {
      sum = 0;
    };

    return {
      brand,
      model,
      power,
      upPower,
      downPower,
      resetPower,
      sum,
    };
  },
};
</script>

<style>

</style>
