import Vue from 'vue'
import App from './App.vue'
import ListNames from './ListNames.vue'

Vue.component('app-list', ListNames)

new Vue({
  el: '#app',
  render: h => h(App)
})