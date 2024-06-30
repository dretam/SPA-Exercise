<template>
<div class="product-detail">
    <div class="left">
        <div class="image-container">
            <img :src="image">
        </div>
        <div class="product-info">
            <div class="product-name">
                <router-link :to="`/products/detail/${this.id}`">{{title}}</router-link>
            </div>
            <div class="quantity">Qty: <span>{{quantity}}</span></div>
            <div class="unit-price">Unit Price: <span>$ {{price}}</span></div>
        </div>
    </div>
    <div class="total-price">
        Total: <span>$ {{totalPrice}}</span>
    </div>
</div>
</template>

<script>
export default{
    props:['id', 'quantity', 'image', 'title', 'price'],
    computed: {
        totalPrice(){
            return this.quantity * this.price;
        }
    }
}
</script>

<style scoped>
.product-detail {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #bdc3c7;
    margin-bottom: 20px;
    padding: 20px 0 10px 0;
}
.product-detail .left {
    display: flex;
}
.product-detail .image-container {
    width: 100px;
    height: 90px;
    text-align: center;
    overflow: hidden;
}
.product-detail img {
    height: 70px;
}
.product-detail .product-info {
    font-size: 14px;
    width: 390px;
}
.product-detail .product-name {
    margin-bottom: 10px;
}
.product-detail .product-name a {
    font-weight: bold;
    color: #1e90ff;
}
.product-detail .quantity span, 
.product-detail .unit-price span {
    font-weight: bold;
    margin-left: 5px;
}
.product-detail .total-price {
    color: #546de5;
}

</style>