<template>
    <div class="rate">
        <i class="fas fa-star filled" v-for="number in filled" :key="number"></i>
        <i class="fas fa-star" v-for="number in blank" :key="number"></i>
    </div>
</template>

<script>
import { computed } from "vue";

export default{
    props:{
        rate: {
            type: Number,
            required: true,
            default: 0
        }
    },
    setup(props){
        const filled = computed(function(){
            return Math.ceil(props.rate);
        });
        const blank = computed(function(){
            return 5 - filled.value;
        });
        return {filled, blank};
    }
}
</script>

<style scoped>
.rate .filled {
    color: #f39c12;
}
</style>