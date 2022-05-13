<template>
  <div class="container mb-5">
    <h2>Eventos</h2>
    <p>
      Principales eventos que se pueden manejar en el DOM Métodos manejadores de
      eventos:
    </p>
    <ul>
      <li>Manejo de eventos</li>
      <li>Escuchar eventos</li>
      <li>
        Podemos usar la directiva v-on para escuchar eventos DOM y ejecutar
        algunos JavaScript cuando se activan.
      </li>
    </ul>
    <br />
    <h3>La directiva v-on</h3>
    <p>
      La directiva v-on (abreviada como @) es una directiva utilizada para
      gestionar los eventos del DOM desde los templates de Vue, haciendo más
      cómodo y práctico su utilización, permitiendo escribir mucho menos código.
      Así pues, nos ahorramos realizar .addEventListener(), y en su lugar
      definimos las acciones de forma mucho más directa.
    </p>


    <!-- https://lenguajejs.com/vuejs/directivas-vue/v-on/ -->  





    <button class="btn btn-primary mr-5" @click="contador--">Disminuir Contador</button>
    <button class="btn btn-primary" @click="contador++">Aumentar Contador</button>
    <br /><br />



    <h4>Mostrar Contador</h4>
    <span v-if="contador >= 10" class="green">{{contador}}</span>
    <span v-else-if="contador >= 0" class="black">{{contador}}</span>    
    <span v-else class="red">{{contador}}</span>












    <h4>Mostrar Saludo : {{ saludo }}</h4>
    <button class="btn btn-primary" @click="saludar()">Saludar</button>
    <br /><br />


    <button @mouseleave="mensajeSaludo('Soy un nuevo mensaje ejecutado en un parametro')" class='btn btn-danger'>Pasando valor por un parametro</button><br><br>







<br><br>
    <h4>Modificadores de eventos</h4>
    <p>Al igual que otras directivas, es posible añadir modificadores después del tipo del evento y así modificar el comportamiento de la directiva.</p>
    <p>Los modificadores lo que realizan es alterar el comportamiento normal del evento con alguna característica concreta.</p>
    <p>Algunos de los modificadores que podríamos utilizar, son los siguientes: </p>


    <ul>
      <li>.stop	Llama al método event.stopPropagation() para parar la propagación del evento.</li>
      <li>.prevent	Llama al método event.preventDefault() para evitar el comportamiento por defecto.</li>
      <li>.capture	Utiliza el modo capture del .addEventListener().</li>
      <li>.self	Sólo se dispara si el evento es generado desde el propio elemento.</li>
      <li>.once	Sólo se dispara la primera vez. Equivalente al parámetro { once: true }.</li>
      <li>.passive	Realiza una escucha pasiva. Equivalente al parámetro { passive: true }.</li>
    </ul>

    <!-- https://es.vuejs.org/v2/guide/events.html -->
<!--     https://vuejs.org/guide/introduction.html -->

<!-- Se detendrá la propagación del evento click. -->
<a v-on:click.stop="hazEsto"></a>

<!-- El evento de enviar ya no volverá a cargar la página. -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- Los modificadores pueden encadenarse -->
<a v-on:click.stop.prevent="hazEsto"></a>

<!-- utilizar el modo de captura al agregar el detector de eventos -->
<!-- es decir, un evento dirigido a un elemento interno se maneja aquí antes de ser manejado por ese elemento -->
<div v-on:click.capture="hazEsto"></div>

<!-- solo activa el controlador si event.target es el elemento en sí -->
<!-- es decir, no de un elemento hijo -->
<div v-on:click.self="hazEso"></div>


<br><br>
    <h4>Modificadores de teclas</h4>
    <p>Aqui esta la lista completa de alias:</p>
    <ul>
      <li>@keyup.enter</li>
      <li>@keyup.tab</li>
      <li>@keyup.delete (captura ambas teclas “Delete” y “Backspace”)</li>
      <li>@keyup.esc</li>
      <li>@keyup.space</li>
      <li>@keyup.up</li>
      <li>@keyup.down</li>
      <li>@keyup.left</li>
      <li>@keyup.right</li>
    </ul>


  </div>
</template>

<script>
export default {
  name: "Eventos",

  data() {
    return {
      contador: 0,
      saludo: "Esperando el saludo",
    };
  },

  methods: {
    saludar() {
      this.saludo = "Hola Mundo";
    },

    mensajeSaludo (parametro){
      this.saludo = parametro
    }
  },
};
</script>

<style>

.red{
  color:red
}
.green{
  color:green
}
.black{
  color:black;
}


span{
  font-size: 40px;
}
</style>
