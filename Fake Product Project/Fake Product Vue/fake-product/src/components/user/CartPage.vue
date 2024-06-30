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
            user: {},
            carts: []
        }
    },
    async created(){
        this.getUser();
        this.getCartDetail();
    },
    methods:{
        async getUser(){
            const promise = await fetch(`https://fakestoreapi.com/users/${this.userId}`);
            const {name, username, email} = await promise.json();
            this.user = {
                name: `${name.firstname} ${name.lastname}`,
                username,
                email
            };
        },
        async getCartDetail(){
            const promise = await fetch(`https://fakestoreapi.com/carts/user/${this.userId}`);
            const responseCarts = await promise.json();
            for(let responseCart of responseCarts){
                let cart = {
                    id: responseCart.id,
                    date: responseCart.date,
                    products: responseCart.products
                }
                this.carts.push(cart);
            }
            console.log(this.carts);
        },
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