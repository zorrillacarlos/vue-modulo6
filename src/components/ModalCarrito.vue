<template>
  <div>
      <ul v-for="(elemento, index) in carritoProps" :key="index">
          <li>{{elemento.nombre}} - {{elemento.precio}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'ModalCarrito',
    props:{
        carritoProps:{
            type:Array,
            required: true,
        },
    }

}
</script>

<style>

</style>