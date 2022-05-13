<template>
  <div class="home container">
    <h1>Directivas Vue</h1>

    <p>
      Las directivas de Vue son atributos especiales que se colocan en las
      etiquetas HTML y están prefijados por v-, como por ejemplo, v-for, v-bind
      o v-on, entre muchas otras. Estas directivas permiten realizar acciones
      dinámicas potentes (bucles, condicionales, etc...) que no se pueden
      realizar en HTML por si solo, pero que Vue permite utilizar en sus
      etiquetas template. <br><br>

<!-- https://lenguajejs.com/vuejs/directivas-vue/que-son-directivas/ -->

      Dichas directivas están formadas por varias partes:</p>
      <ul>
        <li>
          Directiva: El nombre de la directiva, que a veces, es posible abreviarlo
          con un carácter.
        </li>
        <li>
          Argumento: En ciertas directivas se indica un parámetro.
        </li>
        <li>
          Modificador: En ciertas directivas se puede modificar el comportamiento.
        </li>
        <li>
          Valor: En ciertas directivas, se requiere establecer un valor. Se escribe
          como el valor de un atributo HTML.
        </li>
      </ul>

    <hr />

    <h2 v-text="name == 'Pablo' ? 'Hola Alumno!' : 'Hola ' + name + ', no eres un Alumno.'"></h2>
    <h2 v-text="'hola '+ name"></h2>
    <h2>Nombre: {{ name }}</h2>
    <hr />

    <hr />
    <!-- Utilizando directiva v-html, se renderiza el HTML -->
    <h2 v-html="resaltar"></h2>
    <!-- Se muestra la etiqueta HTML literalmente -->
    <h2>{{ resaltar }}</h2>
    <hr />

    <hr />
    <!-- Si queremos que aparezca en el texto y no se rendericen los {{}} -->
    <h2 v-pre>{{ resaltar }}</h2>
    <hr />

    <hr />
    <h2>Directiva v-model</h2>
    <p>
      Esta directiva permite crear un modelo de datos bidireccional entre un
      elemento HTML concreto y una variable de Vue. <br />
      Esto es un ejemplo de una de las características estrella de Vue, la
      reactividad.
    </p>
    <p>
      Los sistemas reactivos son aquellos que mantienen una interacción
      constante con su entorno. Son sistemas que permiten el cambio de estado
      interno por medio de eventos (externos o internos) que manejan acciones
      cuando son accionados.
    </p>
    <input v-model="userdata" />
    <h2>{{ userdata }}</h2>
    <hr />

    <hr />
    <div>
      <h2>Modificadores v-model</h2>
      <ul>
        <li>
          .lazy : Se actualizará cuando pulsemos TAB o salgamos del campo de
          texto (pierda el foco).
        </li>
        <li>
          .number : pasa el contenido de string a number (solo si es un numero
          valido)
        </li>
        <li>
          .trim : quita los espacios en blancos a los costados del contenido del
          stexto
        </li>
      </ul>
      <div>{{ dataLazy }}</div>
      <textarea v-model.lazy="dataLazy" cols="80" rows="3"></textarea>
    </div>
    <hr />
  </div>
  
</template>

<script>
  export default {
    name: "HomeView",
    components: {},
    data() {
      return {
        name: 'Pablo',
        sintaxis: "sintaxis de plantillas o formato mustache",
        resaltar: "<b> Hola Mundo v-html </b>",
        prueba: "soy un texto de prueba",
        userdata: "escribe aqui",
        dataLazy: "",
      };
    },

  };
</script>