export default{
    async fetchProducts(context){
        if(context.getters.countProducts > 0){
            return;
        }
        const promise = await fetch('https://fakestoreapi.com/products');
        const products = await promise.json();
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
        const promise = await fetch(`https://fakestoreapi.com/products/${selectedId}`);
        const {id, image, title, price, rating, category, description} = await promise.json();
        let detail = {
            id, image, title, price, category, description,
            rate: rating.rate,
            count: rating.count
        }
        context.commit('addDetail', detail);
    }
}