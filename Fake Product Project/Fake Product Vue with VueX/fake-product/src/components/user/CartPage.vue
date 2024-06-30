<template>
    <main class="cart-main">
        <user-card class="cart-header"
            :name="user.name"
            :username="user.username"
            :email="user.email">
            <base-capsule-button :isLink="true" :link="`/users`">Back</base-capsule-button>
        </user-card>

        <cart-group-container v-for="cart in carts"
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

export default{
    components: {UserCard, CartGroupContainer},
    props:['userId'],
    data(){
        return {
            user:{}
        }
    },
    async created(){
        await this.$store.dispatch('cart/fetchCart', this.userId);
        this.user = this.$store.getters['cart/getOne']
        this.getUser();
        this.getCartDetail();
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