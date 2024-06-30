<template>
<div class="modal">
        <div class="dialog">
            <header>
                <h2>{{title}}</h2>
                <button type="button" @click="$emit('closeDialog')">
                    <i class="fas fa-times"></i>
                </button>
            </header>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default{
    props: ['title'],
    emits: ['closeDialog']
}
</script>

<style scoped>
.modal {
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dialog {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
}
.dialog header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 20px;
}
.dialog h2 {
    margin: 0;
    text-transform: capitalize;
    font-size: 20px;
}
.dialog button {
    padding: 0;
    border: none;
    cursor: pointer;
    font-size: 23px;
    background-color: transparent;
    color: #e74c3c;
}
</style>