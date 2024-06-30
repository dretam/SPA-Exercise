<template>
    <main class="users-main">
        <user-list v-for="user in users"
            :key="user.id"
            :id="user.id"
            :name="fullName(user.name)"
            :username="user.username"
            :email="user.email"
        ></user-list>
    </main>
    <teleport to="body">
        <router-view></router-view>
    </teleport>
</template>

<script>
import UserList from './UserList.vue';

export default{
    components: {UserList},
    data(){
        return {
            users: []
        };
    },
    methods:{
        fullName(name){
            const {firstname, lastname} = name;
            return `${firstname} ${lastname}`
        }
    },
    async created(){
        let promise = await fetch('https://fakestoreapi.com/users');
        this.users = await promise.json();
    }
}
</script>

<style scoped>
.users-main{
    width: 750px;
    margin: 140px auto 0 auto;
}
</style>