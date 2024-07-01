import axios from "axios";

export default{
    async fetchProducts(context){
        if(context.getters.countProducts > 0){
            return;
        }
        const response = await axios.get('/products');
        const products = response.data;
        let productState = [];
        for(let product of products){
            const {id, image, title, rating, price} = product;
            productState.push({
                id, image, title, price,
                rate: rating.rate,
                count: rating.count
            });
        }
        context.commit('setProducts', productState);
    },
    async fetchDetail(context, selectedId){
        if(context.getters.anyDetail(selectedId)){
            return;
        }
        const response = await axios.get(`/products/${selectedId}`);
        const {id, image, title, price, rating, category, description} = response.data;
        let detail = {
            id, image, title, price, category, description,
            rate: rating.rate,
            count: rating.count
        }
        context.commit('addDetail', detail);
    }
}