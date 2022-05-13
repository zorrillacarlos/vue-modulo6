<template>
  <div class="container">
    <h2>Computed (Propiedades computadas)</h2>
    <p>
      Básicamente computed es una variable, la diferencia con las Variables de
      Vue (data) es que las computadas normalmente transforman la variable o hacen
      algún tipo de cálculo antes de devolverla (Computed vamos a pasar datos que tengan una logica). 
      Ademas quedan almacenadas en la cache del navegador.
    </p>
    
    <h2>Ejemplo 1</h2>
    <h4>
      El nivel de experiencia es {{ role }} en {{ exp }} años y esos años
      multiplicados por 2 son {{ calExp }}
    </h4>




    <input type="text" v-model="name"  @keyup.enter="agregarProgramador()"/>
    <button class="btn btn-warning"  @click="agregarProgramador()">
      Agregar Programador a la Lista
    </button>
    <br /><br />




    <h3>El nombre ingresado es: {{ name }}</h3>
    <h3 class="mb-5">El nombre invertido es: {{ nombreInvertido }}</h3>




    <h2>LISTA DE PROGRAMADORES</h2>
    <ul v-for="(programador,index) in nombreProgramador" :key="index">
      <li>{{index + 1}} - {{ programador }}</li>
    </ul>
  



  
    <br /><br /><br /><br />
  </div>



</template>

<script>
export default {
  name: "Computed",

  data() {
    return {
      exp: 5,
      name: "Pedro",
      nombreProgramador: [],
    };
  },

  // http://www.etnassoft.com/2011/04/01/operador-ternario-javascript/#:~:text=El%20operador%20ternario%20es%20una,bloques%20if%E2%80%A6else%20o%20switch.
  // https://codingpotions.com/vue-computadas
  computed: {
    role() {
      return this.exp > 12 ? "Expert"
        : this.exp > 8 ? "Senior"
        : this.exp > 4 ? "Middle" : "Junior";
      // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    },




    nombreInvertido() {
      return this.name.split("").reverse().join("");
      //split separa nuestro string en un arreglo
      //reverse invierte el orden de nuestro arreglo
      //join para juntar nuestro arreglo y pasamos un separador
    },




    calExp() {
      return this.exp * 2;
    },



    
  },

  methods: {
    agregarProgramador() {
      this.nombreProgramador.push(this.name)
      this.name = ''
    },
  },
};
</script>

<style></style>
