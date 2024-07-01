<template>
    <main class="cart-main">
        <user-card class="cart-header"
            :name="user.userFullName"
            :username="user.username"
            :email="user.email">
            <base-capsule-button :isLink="true" :link="`/users`">Back</base-capsule-button>
        </user-card>

        <cart-group-container v-for="cart in user.carts"
            :key="cart.id"
            :id="cart.id"
            :date="cart.date"
            :products="cart.products"
        ></cart-group-container>
    </main>
</template>

<script>
import UserCard from './UserCard.vue';
import CartGroupContainer from './CartGroupContainer.vue';
import Swal from 'sweetalert2';
import {ref, onBeforeMount} from 'vue';
import useStore from '../../store/cart/cart-store.js';

export default{
    components: {UserCard, CartGroupContainer},
    props:['userId'],
    setup(props){
        const store = useStore();
        const user = ref({});
        onBeforeMount(async function(){
            Swal.fire({
                title: 'Loading...',
                text: 'Please wait while we process this user cart.',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
            await store.fetchCart(props.userId);
            user.value = store.getOne(props.userId);
            Swal.close();
        });
        return {user};
    }
}
</script>

<style scoped>
.cart-main {
    width: 750px;
    margin: 140px auto 0 auto;
}
.cart-header{
    margin-bottom: 30px;
}
</style>