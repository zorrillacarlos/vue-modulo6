<template>

  <div class="container mb-5">

    <h2>Cart</h2>

    <ul v-for="(item, index) in baseDeDatos" :key="index">
      <li>{{ item.nombre }} - Precio: {{ item.precio }}$</li>

      <button class="btn btn-danger" @click="agregarCarrito(item)">
        Agregar al carrito</button>
    </ul>

<button>ABRIR CARRITO</button>



<ModalCarrito :carritoProps='carrito' />

  </div>


</template>

<script>

import ModalCarrito from '@/components/ModalCarrito.vue'

export default {
  name: "Cart",
  components:{
    ModalCarrito
  },

  data() {
    return {
      baseDeDatos: [
        {
          id: 1,
          nombre: "Patata",
          precio: 1,
          imagen: "patata.jpg",
        },
        {
          id: 2,
          nombre: "Cebolla",
          precio: 1.2,
          imagen: "cebolla.jpg",
        },
        {
          id: 3,
          nombre: "Calabacin",
          precio: 2.1,
          imagen: "calabacin.jpg",
        },
        {
          id: 4,
          nombre: "Fresas",
          precio: 0.6,
          imagen: "fresas.jpg",
        },
      ],

      carrito: [],
      nombre:'Nicole'
    };
  },

  methods: {
    agregarCarrito(item) {
        this.carrito.push(item)
    },
  },

};
</script>

<style></style>
