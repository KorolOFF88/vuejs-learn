
<template>
    <div>
        <h1>Pizza name: {{ pizzaNameParam }} / {{ reverseName }}</h1>
        <p>Pizza price: {{ pizzaPriceParam }}</p>
    </div>
</template>

<script>
    export default {
        /* Определение входных параметров компонента */
        
        // Способ №1: Список параметров без валидации
        // props: ['pizzaNameParam', 'pizzaPriceParam'],

        // Способ №2: Параметры в виде объекта, где
        // ключ - название параметра, значение - тип параметра
        // props: {
        //     pizzaNameParam: String,
        //     pizzaPriceParam: Number
        // },

        // Способ №3: Более подробная валидация входных параметров
        props: {
            pizzaNameParam: {
                type: String,
                // required: true, // Поле обязательное
                default: "Default pizza name" // Default значение, если параметр не передается
            },
            pizzaPriceParam: Number
        },



        // Вычисляемые поля, которые используются в компоненте
        computed: {
            reverseName() {
                return this.pizzaNameParam.split('').reverse().join('')
            }
        }
    }
</script>