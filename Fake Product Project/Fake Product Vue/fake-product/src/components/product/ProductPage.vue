<template>
    <main class="products-main">
        <product-card v-for="product in products"
            :key="product.id"
            :id="product.id"
            :image="product.image"
            :title="product.title"
            :rate="product.rating.rate"
            :count="product.rating.count"
            :price="product.price"
        ></product-card>
    </main>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default{
    components: {ProductCard},
    data(){
        return {
            products: []
        };
    },
    async created(){
        let promise = await fetch('https://fakestoreapi.com/products');
        this.products = await promise.json();
    }
}
</script>

<style scoped>
.products-main {
    width: 800px;
    margin: 140px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 330px;
    grid-gap: 15px;
}
</style>