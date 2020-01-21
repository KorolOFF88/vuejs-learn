<template>
  <div id="app">
    <h1>Parrent PizzaName: {{ pizzaName }}</h1>
    <p>Parrent PizzaPrice: {{ pizzaPrice }} </p>

    <!-- Обработчик события дочернего компонента -->
    <app-pizza :pizzaNameParam="pizzaName" 
               :pizzaPriceParam="pizzaPrice"
               @nameChanged="pizzaName = $event"
    ></app-pizza>

    <app-counter></app-counter>
  </div>
</template>

<script>
import Pizza from './Pizza.vue'
import Counter from './Counter.vue'

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
    appPizza: Pizza,
    appCounter: Counter
  }
}
</script>