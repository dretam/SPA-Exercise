<template>
    <div class="rate">
        <i class="fas fa-star filled" v-for="number in filled" :key="number"></i>
        <i class="fas fa-star" v-for="number in blank" :key="number"></i>
    </div>
</template>

<script>
export default{
    props:{
        rate: {
            type: Number,
            required: true,
            default: 0
        }
    },
    computed: {
        filled(){
            return Math.ceil(this.rate);
        },
        blank(){
            return 5 - this.filled;
        }
    }
}
</script>

<style scoped>
.rate .filled {
    color: #f39c12;
}
</style>