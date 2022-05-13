<template>
  <div class="container pl-0">
    <h2>Router</h2>
    <p>Vue permite crear páginas web SPA, es decir, el usuario tiene la sensación de que está navegando entre las páginas pero lo que de verdad ocurre es que Vue por debajo está cambiando el HTML al vuelo sin tener que recargar la página. <br><br>
    Por ejemplo, si estás en la página principal de una aplicación SPA y navegas a la URL /users, Vue lo que hace es renderizar el componente asociado a esa</p>
    <h5>Rutas Estaticas</h5>
    <p>Le llamamos rutas estáticas, al mapeo de un path sin ningún tipo de segmento dinámico o atributo que pueda cambiar, hacia un componente que se carga cuando se visita el path. Es la manera más directa y sencilla de enrutar y en cualquier proyecto siempre tendrás este tipo de rutas para secciones estáticas.
    </p>
    <h5>Rutas Dinamicas</h5>
    <p></p>
    <h3>Texto dinamico desde el router: {{ $route.params.id }}</h3>
    <br />
  </div>
</template>

<script>
export default {
  name: "Router",
  
};
</script>

<style></style>
