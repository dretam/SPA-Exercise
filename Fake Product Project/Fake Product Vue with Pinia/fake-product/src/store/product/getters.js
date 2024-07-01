export default{
    countProducts(){
        return this.products.length;
    },
    getOneDetail(){
        return function(id){
            return this.details.find(detail => detail.id == id);
        }
    },
    anyDetail(){
        return function(id){
            return this.details.some(detail => detail.id == id);
        }
    }
}