
<template>
    <div>
        <h1>Pizza name: {{ pizzaNameParam }} / {{ reverseName }}</h1>
        <p>Pizza price: {{ pizzaPriceParam }}</p>
        <button @click="changeName">Change name</button>
        <button @click="updateCounter">Update counter</button>
    </div>
</template>

<script>
    import {eventEmiter} from './main.js'

    export default {
        props: ['pizzaNameParam', 'pizzaPriceParam'],

        methods: {
            changeName() {
                this.pizzaNameParam = 'Маргарита'
                // оповещение родительских компонентов о том,
                // что произошло событие nameChanged
                this.$emit('nameChanged', this.pizzaNameParam)
            },

            updateCounter() {
                // возбуждаем событие и передаем какие-то данные
                // в обработчики этого события, например,
                // передаем число 5
                eventEmiter.$emit('counterUpdated', 5)
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