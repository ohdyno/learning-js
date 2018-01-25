<template>
    <div></div>
</template>

<script>
    const Fizzbuzz = require('../../plain/main/plain');

    let fizzbuzz = new Fizzbuzz();

    export default {
        name: "fizzbuzz",
        methods: {
            of: fizzbuzz.of,
            fromOneTo: fizzbuzz.fromOneTo
        }
    }
</script>

<style scoped>

</style>