<template>
  <div class="container mb-5">
    <h2>Cart</h2>
    <ul v-for="item in baseDeDatos" :key="item.name">
      <li>{{ item.nombre }} - Precio: {{ item.precio }}$</li>
      <button class="btn btn-danger" @click="agregarCarrito(item)">
        Agregar al carrito
      </button>
    </ul>
    <h2>Carrito</h2>
    <div v-for="(item, index) in carrito" :key="index">
      <div>{{ item.nombre }} - cantidad {{item.cantidad}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",

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
    };
  },

  methods: {
    agregarCarrito(item) {
        let encontrar = this.carrito.some (product => product.id == item.id)

        if(encontrar){
          item.cantidad ++
        }else {
        this.carrito.push(item)
        item.cantidad = 1
        }

    },
  },

};
</script>

<style></style>
