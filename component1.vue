<template>
    <div>
        Hello {{who}}
    </div>
</template>

<script>
module.exports =  {
    data: function () {
        return {
            who: "John"
        }
    }
}
</script>

<style scoped>
div {
    color: white;
    background-color: blue;
}
</style>

<style>
#app  {
    background-color: green;
}
</style>
