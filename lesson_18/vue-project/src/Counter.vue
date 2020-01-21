<template>
    <h1>Счетчик: {{ counter }}</h1>
</template>

<script>
import {eventEmiter} from './main.js'

export default {
    data() {
        return {
            counter: 0 
        }
    },
    // обработчик на системное событие компонента
    // (компонент создан, но еще не размещен в DOM)
    created() {
        // Добавляем обработчик события counterUpdated
        // num - данные, которые были переданы при возбуждении события
        eventEmiter.$on('counterUpdated', (num) => {
            this.counter += num
        });
    }
}
</script>