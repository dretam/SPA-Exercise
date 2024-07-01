import axios from "axios";

export default{
    async fetchProducts(){
        if(this.countProducts > 0){
            return;
        }
        const response = await axios.get('/products');
        const products = response.data;
        for(let product of products){
            const {id, image, title, rating, price} = product;
            this.products.push({
                id, image, title, price,
                rate: rating.rate,
                count: rating.count
            });
        }
    },
    async fetchDetail(selectedId){
        if(this.anyDetail(selectedId)){
            return;
        }
        const response = await axios.get(`/products/${selectedId}`);
        const {id, image, title, price, rating, category, description} = response.data;
        this.details.push({
            id, image, title, price, category, description,
            rate: rating.rate,
            count: rating.count
        });
    }
}