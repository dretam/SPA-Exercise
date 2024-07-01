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
import Swal from 'sweetalert2';
import {ref, onBeforeMount} from 'vue';
import {useStore} from 'vuex';

export default{
    components: {UserList},
    setup(){
        const store = useStore();
        const users = ref([]);
        onBeforeMount(async function(){
            Swal.fire({
                title: 'Loading...',
                text: 'Please wait while we process users data.',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
            await store.dispatch('user/fetchUsers');
            users.value = store.getters['user/getUsers'];
            Swal.close();
        })
        return {users};
    }
}
</script>

<style scoped>
.users-main{
    width: 750px;
    margin: 140px auto 0 auto;
}
</style>