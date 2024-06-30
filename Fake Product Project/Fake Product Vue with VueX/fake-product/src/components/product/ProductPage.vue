<template>
    <main class="products-main">
        <product-card v-for="product in products"
            :key="product.id"
            :id="product.id"
            :image="product.image"
            :title="product.title"
            :rate="product.rate"
            :count="product.count"
            :price="product.price"
        ></product-card>
    </main>
</template>

<script>
import ProductCard from './ProductCard.vue';
import Swal from 'sweetalert2';

export default{
    components: {ProductCard},
    data(){
        return {
            products: []
        };
    },
    async created(){
        Swal.fire({
            title: 'Loading...',
            text: 'Please wait while we process products data.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        await this.$store.dispatch('product/fetchProducts');
        this.products = this.$store.getters['product/getProducts'];
        Swal.close();
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