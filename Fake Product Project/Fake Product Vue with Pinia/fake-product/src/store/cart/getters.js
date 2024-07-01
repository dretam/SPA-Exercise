export default{
    getOne(){
        return function(id){
            return this.users.find(user => user.userId == id);
        };
    },
    anyUser(){
        return function(id){
            return this.users.some(user => user.userId == id);
        };
    }
}