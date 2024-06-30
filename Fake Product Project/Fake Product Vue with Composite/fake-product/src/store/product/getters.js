export default{
    getProducts(state){
        return state.products;
    },
    countProducts(state){
        return state.products.length;
    },
    getOneDetail(state){
        return function(id){
            return state.details.find(detail => detail.id == id);
        };
    },
    anyDetail(state){
        return function(id){
            return state.details.some(detail => detail.id == id);
        };
    }
}