import Vue from 'vue'
import App from './App.vue' 
import MyDirective from './color.js'

// регистрируем директиву
Vue.directive('colored', MyDirective)

new Vue({
  el: '#app',
  render: h => h(App)
})