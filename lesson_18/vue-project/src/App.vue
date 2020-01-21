<template>
  <div id="app">
    <!-- Используем созданную директиву -->
    <h2 v-colored:background="'red'">{{ title }}</h2>
    <h2 v-colored:color="'orange'">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Изучение директив"
    }
  }
}
</script>

<style scoped>
</style>