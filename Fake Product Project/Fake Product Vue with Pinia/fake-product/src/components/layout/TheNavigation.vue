<template>
    <nav>
        <div class="center">
            <router-link :to="{name: 'user-page'}" :class="{active: activeMenu === 'user'}">USERS</router-link>
            <h1>
                <strong>FAKE</strong> Products
            </h1>
            <router-link :to="{name: 'product-page'}" :class="{active: activeMenu === 'product'}">PRODUCTS</router-link>
        </div>
    </nav>
</template>

<script>
import { computed } from "vue";
import { useRoute } from 'vue-router';

export default{
    setup(){
        const route = useRoute();
        const activeMenu = computed(function(){
            const routeName = route.name;
            let prefix = 'user';
            if(routeName !== undefined){
                prefix = (routeName.split('-'))[0];
            }
            return prefix;
        })
        return {activeMenu};
    }
}
</script>

<style scoped>
nav {
    background-color: white;
    border-bottom: 1px solid #bdc3c7;
    box-shadow: 0 2px 5px #95a5a6;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 900px;
}
nav .center {
    display: inline-flex;
    padding: 25px 0;
    gap: 60px;
    font-size: 16px;
}
nav a {
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
}
nav a:hover, nav a.active {
    border-bottom: solid #1e90ff 4px;
}
nav h1 {
    margin: 0;
    font-size: 24px;
    font-weight: normal;
    height: 30px;
    line-height: 40px;
}
nav h1 > strong {
    color: #1e90ff;
    font-weight: bold;
}
</style>