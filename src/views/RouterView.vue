<template>
  <div class="container mb-5">
    <Router />
    <router-link
      :to="{ name: 'routerID', params: { id: item } }"
      v-for="(item, index) in numeroArreglos"
      :key="index">
      <button class="btn btn-warning mr-5">
        Boton con Url Dinamica {{ item }}
      </button>
    </router-link>
    <br /><br />



    <button class="btn btn-danger" @click="irHome">Enviar al Home</button>
    <br /><br />



    <h5>Crear un historial</h5>
    <br />
    <button class="btn btn-primary mr-5" @click="anterior">Anterior</button>
    <button class="btn btn-secondary" @click="siguiente">Siguiente</button>
  </div>
</template>



<script>
import Router from "@/components/Router.vue";

export default {
  name: "RouterView",
  components: {
    Router,
  },
  data() {
    return {
      numeroArreglos: [1, 2, 3, 4],
    };
  },
  methods: {
    irHome() {
      // con $router.push vamos a poder ir a la direccion o patch asignada a la vista que deseamos
      this.$router.push("/");
    },
    anterior() {
      //con $router.go vamos a poder acceder al historial y poder navegar entre ellos
      this.$router.go(-1);
    },
    siguiente() {
      this.$router.go(1);
    },
  },
};
</script>

<style></style>
