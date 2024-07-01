<template>
    <base-grid-card>
        <template #top>
            <div class="screen">
                <img :src="image">
            </div>
        </template>
        <template #center>
            <div class="info">
                <div class="name">{{title}}</div>
                <div class="rate-and-count">
                    <base-star-rating :rate="rate"></base-star-rating>
                    {{rate}}
                    <span class="count">({{count}})</span>
                </div>
                <div class="price">
                    $ {{price}}
                </div>
            </div>
        </template>
        <template #bottom>
            <div class="link-container">
                <base-full-button :isLink="true" :link="getDetailLink()">View Detail</base-full-button>
            </div>
        </template>
    </base-grid-card>
</template>

<script>
export default{
    props:['id', 'image', 'title', 'rate', 'count', 'price'],
    setup(props){
        function getDetailLink(){
            return {
                name: 'product-detail-page',
                params: {
                    productId: props.id
                }
            }
        }
        return {getDetailLink};
    }
}
</script>

<style scoped>
.screen {
    overflow: hidden;
    height: 168px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
}
.screen img {
    display: inline-block;
    height: 100px;
    line-height: 150px;
}
.info {
    padding: 0 15px;
    font-size: 14px;
    text-align: center;
}
.info .name {
    font-weight: bold;
    font-size: 12px;
    height: 28px;
    overflow: hidden;
}
.info .rate-and-count {
    display: flex;
    gap: 5px;
    margin: 10px 0;
    justify-content: center;
}
.link-container {
    padding: 5px;
}
.info .price {
    font-weight: bold;
    color: #1e90ff;
}
</style>