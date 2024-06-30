<template>
    <main class="users-main">
        <user-list v-for="user in users"
            :key="user.id"
            :id="user.id"
            :name="user.fullName"
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
            users:[]
        }
    },
    async created(){
        await this.$store.dispatch('user/fetchUsers');
        this.users = this.$store.getters['user/getUsers'];
    }
}
</script>

<style scoped>
.users-main{
    width: 750px;
    margin: 140px auto 0 auto;
}
</style>