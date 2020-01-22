<template>
  <div>
    <h2>{{ title }}</h2>

    <input type="text" v-model="search">

    <ul>
      <li v-for="name in filteredNames" :key="name">{{ name }}</li>
    </ul>

    <hr>

    <app-list></app-list>

  </div>
</template>

<script>
import ListNames from './ListMixin'
export default {
  data() {
    return {
      title: "Изучаем фильтры"
    }
  },
  mixins: [ListNames]
}
</script>