<template>
  <div class="container">
    <h1>{{ mensajeProps }}</h1>
    <br><br>
    <button class="btn btn-danger">Ejecutar funcion</button>
  </div>
</template>

<script>
export default {
  name:'PropsHijo',
  props: {
    mensajeProps: {
      type:String,
      required: true,
    },
  },
};
</script>

<style></style>
