import Vue from 'vue'
// import App from './App.vue' 

/**
 * Глобальная регистрация компонента
 * (компонент будет доступен в любом экземпляре Vue-приложения)
 */
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


/**
 * Локальная реализация компонента
 * (компонент будет доступен только в тех Vue-приложениях, в которых он зарегистрирован)
 */

// Определение локального компонента
var localComponent2 = {
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
}

// Определение нового Vue-приложения
new Vue({
  el: '#app2',
  // render: h => h(App)
  components: {
    // 'local-component' - имя, под которым будет доступен компонент
    // также, имя компонента можно писать не в формате строки, 
    // а в виде camplCase, к примеру:
    // localComponent: localComponent2
    'local-component': localComponent2
  }
})