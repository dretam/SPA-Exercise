<template>
    <base-two-side-container class="product-detail">
        <template #left>
            <div class="image-container">
                <img :src="product.image">
            </div>
        </template>
        <template #right>
            <div class="detail-wrapper">
                <div>
                    <router-link class="back-link" :to="'/products'">Back to Product List</router-link>
                </div>
                <div class="detail">
                    <h1>{{product.title}}</h1>
                    <div class="price">$ {{product.price}}</div>
                    <div class="rate-container">
                        <base-star-rating :rate="rate"></base-star-rating>
                        <span>({{product.rate}})</span>
                    </div>
                    <div class="count">
                        <span>TOTAL SOLD</span>
                        <span>{{product.count}} Unit(s)</span>
                    </div>
                    <div class="category">
                        <span>CATEGORY</span>
                        <span>{{product.category}}</span>
                    </div>
                    <div class="description">
                        <h3>DESCRIPTION</h3>
                        <p>{{product.description}}</p>
                    </div>
                </div>
            </div>
        </template>
    </base-two-side-container>
</template>

<script>
import Swal from 'sweetalert2';

export default{
    props: ['productId'],
    data() {
        return {
            product:{}
        };
    },
    async created(){
        Swal.fire({
            title: 'Loading...',
            text: 'Please wait while we process this product detail.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        await this.$store.dispatch('product/fetchDetail', this.productId);
        this.product = this.$store.getters['product/getOneDetail'](this.productId);
        Swal.close();
    }
}
</script>

<style scoped>
.product-detail{
    margin-top: 140px;
}
.image-container {
    min-width: 500px;
    height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: solid 1px #bdc3c7;
    overflow: hidden;
}
.image-container img{
    width: 380px;
}
.detail-wrapper {
    overflow: auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.back-link {
    font-size: 14px;
    font-weight: bold;
    color: #1e90ff;
}
.detail-wrapper h1 {
    font-size: 24px;
    margin-top: 35px;
    margin-bottom: 10px;
}
.price {
    color: #546de5;
    font-size: 20px;
    margin-bottom: 20px;
}
.rate-container {
    display: flex;
    gap: 10px;
    font-size: 16px;
    margin-bottom: 10px;
}
.count, 
.category {
    font-size: 14px;
    margin-bottom: 8px;
}
.count span, 
.category span {
    display: inline-block;
}
.count span:first-child, 
.category span:first-child {
    width: 90px;
    font-weight: bold;
}
.description {
    margin-top: 30px;
    font-size: 16px;
}
.description h3 {
    margin: 0 0 8px 0;
    font-size: 14px;
}
.description p {
    margin: 0;
}
</style>