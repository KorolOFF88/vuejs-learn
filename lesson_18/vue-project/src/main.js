import Vue from 'vue'
import App from './App.vue' 

// в дальнейшем будем использовать
// этот экземпляр приложения как 
// шину событий (для общения между компонентами)
export const eventEmiter = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})