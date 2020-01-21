
<template>
    <div>
        <h1>Pizza name: {{ pizzaNameParam }} / {{ reverseName }}</h1>
        <p>Pizza price: {{ pizzaPriceParam }}</p>
        <button @click="changeName">Change name</button>
    </div>
</template>

<script>
    export default {
        props: ['pizzaNameParam', 'pizzaPriceParam'],

        methods: {
            changeName() {
                this.pizzaNameParam = 'Маргарита'
                // оповещение родительских компонентов о том,
                // что произошло событие nameChanged
                this.$emit('nameChanged', this.pizzaNameParam)
            }
        },

        // Вычисляемые поля, которые используются в компоненте
        computed: {
            reverseName() {
                return this.pizzaNameParam.split('').reverse().join('')
            }
        }
    }
</script>