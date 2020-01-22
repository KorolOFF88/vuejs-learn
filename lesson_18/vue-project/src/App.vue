<template>
  <div>
    <h2>{{ title }}</h2>

    <input type="text" v-model="search">

    <ul>
      <li v-for="name in filteredNames" :key="name">{{ name }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Изучаем фильтры",
      search: "",
      names: ['Konstantin', 'Anna', 'Vladimir']
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.search) !== -1
      })
    }
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  }
}
</script>