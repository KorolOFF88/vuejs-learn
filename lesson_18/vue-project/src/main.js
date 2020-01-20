import Vue from 'vue'
// import App from './App.vue' 

Vue.component("my-counter", {
  template: `
    <div>
      <h2>Счетчик: {{ counter }}</h2>
      <button @click="add">+1</button>
    </div>
  `,
  data: function() {
    return {
      counter: 0
    }
  },
  methods: {
    add: function() {
      this.counter++
    }
  }
}) 

new Vue({
  el: '#app',
  // render: h => h(App)
})
