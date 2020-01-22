import Vue from 'vue'
import App from './App.vue' 

// Глобальная регистрация фильтра
Vue.filter('snippet', (value) => {
  return value.slice(0, 10)
})

new Vue({
  el: '#app',
  render: h => h(App)
})