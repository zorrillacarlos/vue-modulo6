<template>
  <PropsHijo :mensajeProps="mensaje" />
</template>

<script>
import PropsHijo from "./PropsHijo.vue";

export default {
  name: "PropsPadre",
  components: {
    PropsHijo,
  },

  data() {
    return {
      mensaje: "En los props podemos mandar variables simples, listas de array, funciones que se declaren en el componente padre y luego se ejecuten en el componente hijo y objetos con mucha informacion para que el componente hijo lo renderice",
    };
  },

 
};
</script>

<style></style>
