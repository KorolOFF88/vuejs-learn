<template>
  <div id="app">
    <h1>Parrent PizzaName: {{ pizzaName }}</h1>
    <p>Parrent PizzaPrice: {{ pizzaPrice }} </p>

    <!-- 
      Входные параметры дочернего компонента (как атрибуты) связаны (bind)
      с параметрами родительского компонента
    -->
    <app-pizza :pizzaNameParam="pizzaName" :pizzaPriceParam="pizzaPrice"></app-pizza>
  </div>
</template>

<script>
import Pizza from './Pizza.vue'

export default {
  name: 'app',
  data () {
    return {
      // список параметров, которые будут 
      // передаваться в дочерний компонент
      pizzaName: "Деревенская пицца из App.vue",
      pizzaPrice: 400
    }
  },
  components: {
    appPizza: Pizza
  }
}
</script>