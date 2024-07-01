export default{
    setProducts(state, payload){
        state.products = payload;
    },
    addDetail(state, payload){
        state.details.push(payload);
    }
}