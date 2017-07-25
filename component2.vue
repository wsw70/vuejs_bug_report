<template>
    <div>
        This is component {{who}}
    </div>
</template>

<script>
module.exports =  {
    data: function () {
        return {
            who: "TWO"
        }
    }
}
</script>

<style scoped>
div {
    color: white;
    background-color: red;
}
</style>

<style>
#app {
    background-color: yellow;
}
</style>
