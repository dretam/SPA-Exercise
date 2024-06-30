export default{
    getOne(state){
        return function(id){
            return state.users.find(user => user.userId == id);
        };
    },
    anyUser(state){
        return function(id){
            return state.users.some(user => user.userId == id);
        };
    }
}