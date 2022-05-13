<template>
  <div class="container mb-5">


    <h2>Input</h2>
    <input v-model="message" placeholder="edíteme" />
    <p>El mensaje es: {{ message }}</p>
    <br /><br />



    <h2>Checkbox</h2>
    <label>Elige True o False</label><br />

    <input type="checkbox" id="checkbox" v-model="validar" />
    
    <label for="checkbox"> {{ validar }} </label>
    <br /><br />



    <h2>Texarea</h2>
    <span>El mensaje multilínea es:</span>
    <p style="white-space: pre-line">{{ messageTexarea }}</p>
    <br />
    <textarea v-model="messageTexarea" placeholder="agregar múltiples líneas" ></textarea>
    <br /><br />



    <h2>Multiples Checkbox</h2>
    <div id="example-3">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack"> Jack</label><br />

      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john"> John</label><br />

      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike"> Mike</label>

      <br />
      <span>Lista Checkbox: {{ checkedNames }}</span>
    </div>
    <br /><br />



    <h2>Radio</h2>

    <input type="radio" id="uno" value="Cuatro" v-model="picked" />
    <label for="uno">Cuatro</label>
    <br />

    <input type="radio" id="tres" value="Tres" v-model="picked" />
    <label for="Tres">Tres</label>
    <br />

    <input type="radio" id="Dos" value="Dos" v-model="picked" />
    <label for="Dos">Dos</label>
    <br />

    <span>Eligió: {{ picked }}</span>
    <br /><br /><br />



    <h2>Select</h2>
    <select v-model="selected">
      <option disabled value="">Seleccione un elemento</option>
      <option>Opcion 1</option>
      <option>Soy Otra Opcion</option>
      <option>Solo C</option>
      </select>
      <br />

    <span>Seleccionado: {{ selected }}</span>
    <br /><br /><br />



    <h2>Input con true-value y false-value</h2>
    <input type="checkbox" v-model="variable" true-value="Respondimos con un Si" false-value="No, no quiero nada" />
    <p>la opcion elegida es: {{ variable }}</p>
    <br /><br />



    <h2>Input con modificadores: lazy, number y trim</h2>


    <input v-model.number="contador" />
    <button class="btn btn-primary" @click="contador++">+</button>
    <button class="btn btn-warning" @click="contador--">-</button>
    <br />
    <span>Su contador es: {{ contador }}</span>



    <div class="progress">
      <div
        class="progress-bar bg-success"
        role="progressbar"
        :style="{ width: contador + '%' }"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100">
        </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "Formulario",

  data() {
    return {
      validar: false,
      message: "",
      messageTexarea: "",
      checkedNames: [],
      picked: "",
      selected: "",
      variable: "",
      contador: "",
    };
  },
};
</script>

<style></style>
