
<template>
    <div>
        <h1>Pizza name: {{ pizzaNameParam }}</h1>
        <p>Pizza price: {{ pizzaPriceParam }}</p>
    </div>
</template>

<script>
    export default {
        // Список входных параметров компонента
        // (передаются из родительского компонента)
        props: ['pizzaNameParam', 'pizzaPriceParam']
    }
</script>