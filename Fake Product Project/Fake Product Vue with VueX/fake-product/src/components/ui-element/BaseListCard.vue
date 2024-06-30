<template>
    <div class="card">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default{

}
</script>

<style scoped>
.card {
    background-color: white;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 #bdc3c7;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}
</style>