<template>
  <the-navigation></the-navigation>
  <router-view></router-view>
</template>

<script>
import TheNavigation from './components/layout/TheNavigation.vue';

export default {
  components: {TheNavigation},
}
</script>

<style>
@font-face {
    font-family: 'OpenSans';
    src: url("./assets/fonts/OpenSans-Regular.ttf") format('truetype');
}
body{
    font-family: 'OpenSans';
    background-color: #dfe4ea;
    color:#4b6584;
    min-width: 900px;
}
a{
    color:#4b6584;
    text-decoration: none;
}
</style>
