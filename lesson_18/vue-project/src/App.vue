<template>
  <div>
    <h2>{{ title }}</h2>
    <!-- Применение фильтра зарегистрированного локально -->
    <h2>{{ title | uppercase }}</h2>
    <!-- Применение фильтра зарегистрированного глобально -->
    <h2>{{ title | snippet }}</h2>
    <!-- Фильтры можно объединять в цепочки -->
    <h2>{{ title | snippet | uppercase }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Изучаем фильтры"
    }
  },
  filters: {
    // Локальная регистрация фильтра
    uppercase(value) {
      return value.toUpperCase()
    }
  }
}
</script>