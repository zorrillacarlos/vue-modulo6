<template>
  <div class="container mb-5">
    <h1>Directivas Condicionales</h1>

    <p>
      Las directivas de Vue v-show y v-if nos permiten establecer condiciones
      directamente en nuestro etiquetado HTML, sin tener que recurrir a lógica
      Javascript o realizar código más complejo. Esto nos permite crear
      múltiples posibilidades directamente en nuestra parte del template,
      haciendo el código mucho más sencillo.
    </p>
    <ul>
      <li>
        v-show Muestra/oculta el elemento, alternando con un display: none.
      </li>
      <li>
        v-if Equivalente a un if de Javascript. Acepta una expresión Javascript
        por parámetro.
      </li>
      <li>
        v-else-if Equivalente a un else if de Javascript. Acepta una expresión
        Javascript por parámetro.
      </li>
      <li>v-else Equivalente a un else de Javascript. No tiene parámetros.</li>
    </ul>
    <h2>v-for, v-if, v-else-if, v-else</h2>

    <!-- <div v-for="elemento in usuarios" :key="elemento.id">
      <h2>El id es {{ elemento.id }} de la persona {{ elemento.nombre }} {{elemento.apellido}}</h2>
    </div> -->

    <div v-for="(item, index) in potencias" :key="index">
<!--       <li>El valor de las potencias es: {{ item }}</li> -->
      <li v-if="item < 280">Menor a 280: {{ item }}</li>
      <li v-else-if="item === 280">Igual a 280: {{ item }}</li>
      <li v-else>Mayor a 280: {{ item }}</li>
    </div>

    <h2 v-if ='valor < 100'> es menor a 100</h2>
    <h2 v-else-if='valor === 100'> es igual a 100</h2>
    <h2 v-else> El valor es mayor a 100</h2>
    
    <button class="btn btn-danger mt-3 mb-3" @click="imprimir()">
      FUNCION IMPRIMIR
    </button>

    <h2>v-show</h2>
    <p>
      La directiva v-show se define como una directiva que muestra u oculta
      algo, dependiendo del valor que tenga: si es true lo muestra, si es false
      lo oculta con CSS, mediante un display: none. Un ejemplo para ilustrar
      esto:
    </p>
    <div>
      Usuario: Juan
      <span v-show="login">(Usuario existe en la BD)</span>
    </div>
  </div>

</template>

<script>

export default {
  name: "AboutView",
  /*
La propiedad name permite establecer un nombre al componente. Aunque no sea obligatorio, es una buena práctica establecer siempre un nombre al componente, ya que si estamos utilizando la extensión Vue Dev Tools (Chrome) o Vue Dev Tools (Firefox), en los componentes se nos mostrará el nombre y no Anonymous Component.
*/
  components: {
    // Donde vamos a nombrar a nuestros componentes que estamos llamando luego de importarlos afuera del export default
  },

  data() {
    /*
La opción data es un lugar donde Vue guarda todas las variables locales al componente. Esta opción se define como una  que devuelve un objeto. Dicho objeto tiene en su interior una colección de propiedades que son las variables de Vue que podremos utilizar en nuestro componente.
*/
    return {
      potencias: [60, 80, 120, 200, 280, 300, 390, 540, 160, 500],
      login: true,
      mensaje: "Hola Mundo",
      valor: 100,
      usuarios: [
        {
          id: 1,
          nombre: "Carlos",
          apellido: "Zorrilla",
        },
        {
          id: 2,
          nombre: "Oscar",
          apellido: "Rojas",
        },
      ],
    };
  },
  methods: {
    /* 
    El apartado methods de las opciones permite añadir funciones en el componente. Al igual que en data guardamos variables de Vue, podemos tener funciones de Vue en methods. Dichas funciones pueden ser utilizadas desde las templates o desde la parte de los scripts, ejecutándolas y obteniendo la información que devuelven. 
    */
    imprimir() {
      const hola = 'nuevo mensaje'
      console.log(hola);
    },
  },
};
</script>
