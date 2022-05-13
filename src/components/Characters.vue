<template>
  <div class="container mb-5">
    <h1 class="text-center mb-5">CHARACTERS RICK AND MORTY</h1>
    <div class="row justify-content-center">
      <div
        class="card col-6 col-sm-2 m-3 p-0"
        v-for="(item, index) in result"
        :key="index"
      >
        <img
          class="card-img-top"
          v-bind:src="item.image"
          v-bind:alt="item.name"
        />
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text">Origen: {{ item.origin.name }}</p>
          <p class="card-text">Estado: {{ item.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Axios
// https://codingpotions.com/vue-axios
// https://es.vuejs.org/v2/guide/list.html

// Cotenido dinamico v-bind
// https://www.youtube.com/watch?v=B8rVlxQm8Cs

//Fetch Data
// https://youtu.be/7iDGJolHFmU

//import axios from "axios";

export default {
  name: Characters,
  /*   data: () => ({
    result: null,
  }),
  created() {
   axios.get("https://rickandmortyapi.com/api/character").then((result) => {
      this.result = result.data.results;
    });
  }, */

  data() {
    return {
      result: null,
    };
  },

  mounted() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => (this.result = data.results));
  },
};
</script>

<style></style>
