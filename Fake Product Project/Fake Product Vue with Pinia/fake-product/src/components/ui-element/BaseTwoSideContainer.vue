<template>
    <div class="container">
        <slot name="left"></slot>
        <slot name="right"></slot>
    </div>
</template>

<style scoped>
.container{
    width: 70%;
    min-width: 800px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    background-color: white;
    border-radius: 6px;
    border: solid 1px #bdc3c7;
    box-shadow: 0 4px 8px 0 #bdc3c7;
}
</style>