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
import {ref, onBeforeMount} from 'vue';
import {useStore} from 'vuex';

export default{
    components: {ProductCard},
    setup(){
        const store = useStore();
        const products = ref([]);
        onBeforeMount(async function(){
            Swal.fire({
                title: 'Loading...',
                text: 'Please wait while we process products data.',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
            await store.dispatch('product/fetchProducts');
            products.value = store.getters['product/getProducts'];
            Swal.close();
        });
        return {products};
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