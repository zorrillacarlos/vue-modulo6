<template>
<div class="mb-5">
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand text-light" href="#">BOOTCAMP VUE</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
              <li class="nav-item">
          <a class="nav-link" href=""><router-link class='text-light' to="/">Directivas</router-link></a>
        </li>   
        <li class="nav-item">
          <a class="nav-link" href=""><router-link class='text-light' to="/condicionales">Directivas Condicionales</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""><router-link class='text-light' to="/bind">Bind</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""><router-link class='text-light' to="/props">Props</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""><router-link class='text-light' to="/forms">Forms</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""><router-link class='text-light' to="/computed">Computed</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""><router-link class='text-light' to="/eventos">Eventos</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""><router-link class='text-light' to="/router">Router</router-link></a>
        </li>
    </ul>
  </div>
</nav>
</div>
</template>

<script>
export default {
  name:'Nav',

}
</script>

<style>
</style>