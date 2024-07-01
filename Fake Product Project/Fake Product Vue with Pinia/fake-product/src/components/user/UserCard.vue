<template>
    <base-list-card class="user-list">
        <template #left>
            <div class="name">{{name}}</div>
            <div class="username">
                <span>username: </span>
                <span>{{username}}</span>
            </div>
            <div class="email">
                <span>email: </span>
                <span>{{email}}</span>
            </div>
        </template>
        <template #right>
            <slot></slot>
        </template>
    </base-list-card>
</template>

<script>
export default{
    props:['name', 'username', 'email']
}
</script>

<style scoped>
.user-list{
    margin-bottom: 30px;
}
.name {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 15px;
}
.username span:first-child, 
.email span:first-child {
    color: #686de0;
    margin-right: 5px;
}
</style>