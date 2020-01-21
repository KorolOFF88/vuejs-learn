
<template>
    <div>
        <h1>Pizza name: {{ pizzaName }}</h1>
        <p>Pizza price: {{ pizzaPrice }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pizzaName: "Деревенская",
                pizzaPrice: 320
            }
        }
    }
</script>