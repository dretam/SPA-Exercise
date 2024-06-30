<template>
    <div class="cart-container">
        <h3>DATE: <span>{{formattedDate}}</span></h3>
        <cart-list v-for="product in products" 
            :key="product.productId"
            :id="product.productId"
            :quantity="product.quantity"
        ></cart-list>
    </div>
</template>

<script>
import CartList from './CartList.vue';

export default{
    components: {CartList},
    props:['id', 'date', 'products'],
    computed: {
        formattedDate(){
            const date = new Date(this.date);
            const formatted = date.toLocaleDateString('id-ID', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            })
            return formatted;
        }
    }
}
</script>

<style scoped>
.cart-container {
    background-color: white;
    margin-bottom: 8px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 #bdc3c7;
}
.cart-container h3 {
    font-size: 16px;
    margin: 0 0 20px 0;
}
.cart-container h3 span {
    margin-left: 5px;
}
</style>