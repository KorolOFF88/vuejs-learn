<template>
    <div>
        <h1>List Names</h1>

        <input type="text" v-model="search">

        <ul>
            <li v-for="name in filteredNames" :key="name">{{ name }}</li>
        </ul>
    </div>
</template>

<script>
// 1 - импорт миксина
import ListMixin from './ListMixin'

export default {
    // 2 - регистрация миксина
    mixins: [ListMixin]
}
</script>