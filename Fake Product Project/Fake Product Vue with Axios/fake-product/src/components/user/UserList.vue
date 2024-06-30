<template>
    <user-card
        :name="name"
        :username="username"
        :email="email">
    
    <base-capsule-button :isLink="true" :link="`/users/contact/${this.id}`">Contact</base-capsule-button>
    <base-capsule-button :isLink="true" :link="`/cart/${this.id}`">Cart</base-capsule-button>

    </user-card>
</template>

<script>
import UserCard from './UserCard.vue';

export default{
    components: {UserCard},
    props: ['id', 'name', 'username', 'email']
}
</script>

<style scoped>
    button, a{
        margin-left:4px;
    }
</style>