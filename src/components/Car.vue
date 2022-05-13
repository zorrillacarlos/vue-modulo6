<template>
  <h1>COCHE</h1>
  <h2>Marca: {{ brand }}</h2>
  <h2>Modelo: {{ model }}</h2>
  <h2>Color: {{ colors[2] }}</h2>
  <h2>
    Colores:
    <span v-for="(color, index) in colors" :key="index">
      <br />
      {{ index + 1 }} - {{ color }}
    </span>
  </h2>
  <ul>
    <li v-for="(color, index) in colors" :key="index">
      {{ index }} - {{ color }}
    </li>
  </ul>
  <h2>Precio: {{ price }} $</h2>
  <h2>Poder: {{ power }}</h2>
  <h2>
    Nuestros dos mensajes de objetos son: {{ message.title }} y
    {{ message.text }}
  </h2>
  <hr><hr>
  <Vif />
</template>

<script>
import Vif from "./Vif.vue";

export default {
  name:'Car',
  components: {
    Vif,
  },

  // COMPOSITION API - VUE 3
  // Visualmente es mucho mas amigable que el option, y es una sintaxis mas habituado a JS

  setup() {
    const brand = "Audi";
    const model = "A3";
    const colors = ["Negro", "Blanco", "Morado", "Amarillo"];
    const price = 45000;
    const power = 200;
    const message = {
      title: "Hola chicos",
      text: "Bienvenidos",
    };

    return {
      brand,
      model,
      colors,
      price,
      power,
      message,
    };
  },
};
</script>

<style></style>
