<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <app-pizza></app-pizza>
  </div>
</template>

<script>
import Pizza from './Pizza.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    appPizza: Pizza
  }
}
</script>