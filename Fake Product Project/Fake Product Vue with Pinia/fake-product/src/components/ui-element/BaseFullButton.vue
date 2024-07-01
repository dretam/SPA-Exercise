<template>
    <button v-if="!isLink" :class="{htmlClass : htmlClass !== null}">
      <slot></slot>
    </button>
    <router-link v-else :to="link" :class="{htmlClass : htmlClass !== null}">
      <slot></slot>
    </router-link>
</template>

<script>
export default{
    props: {
        isLink: {default: false, required: false},
        link: {require: false, default: "javascript:;"},
        htmlClass: {required: false, default:null}
    }
}
</script>

<style scoped>
button, a{
    display: block;
    background-color: #546de5;
    color: white;
    border-radius: 6px;
    text-align: center;
    padding: 8px 0;
    font-size: 14px;
    cursor: pointer;
    border:none;
    width: 100%;
}
</style>