<template>
  <div id="app">
    <!-- Используем созданную директиву -->
    <h2 v-colored>{{ title }}</h2>
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