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
    color: #1e90ff;
    background-color: transparent;
    display: inline-block;
    box-sizing: border-box;
    border: solid #1e90ff 1px;
    width: 90px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 30px;
    cursor: pointer;
}
button:hover, a:hover {
    background-color: #1e90ff;
    color: white;
}
</style>