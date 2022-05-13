<template>
  <div id="app">
    <Nav class="sticky-top"/>
    <transition name="view">
<!--  router-view
      El componenterouter-view representa un componente específico en función de la ubicación de la aplicación, según lo dictado en la instancia del router. -->
      <router-view />
    </transition>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
.view-enter-active,
.vista-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter-active {
  transition-delay: 0.5s;
}
.view-enter {
  opacity: 0;
  transform: translateY(10px);
}
.view-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.view-leave {
  opacity: 1;
  transform: translateY(0px);
}
.view-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
