<template>
    <div class="card">
        <slot name="top"></slot>
        <slot name="center"></slot>
        <slot name="bottom"></slot>
    </div>
</template>

<script>
export default{

}
</script>

<style scoped>
.card {
    background-color: white;
    border-radius: 6px;
    border: solid 1px #bdc3c7;
    box-shadow: 0 4px 8px 0 #bdc3c7;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
}
</style>