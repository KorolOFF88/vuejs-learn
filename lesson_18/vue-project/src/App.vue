<template>
  <div id="app">
    <app-pizza>
      <h1 slot="title">{{ pizzaName }}</h1>
      <p slot="text">Lorem, ipsum dolor.</p>
      <h2 slot="title">Test!</h2>
    </app-pizza>
  </div>
</template>

<script>
import Pizza from './Pizza.vue'

export default {
  data() {
    return {
      pizzaName: "Маргаритта"
    }
  },
  components: {
    appPizza: Pizza,
  }
}
</script>

<style scoped>
h1 {
  color: red
}
</style>