export default{
    getUsers(state){
        return state.users;
    },
    countUsers(state){
        return state.users.length;
    },
    getOneContact(state){
        return function(id){
            return state.contacts.find(contact => contact.id == id);
        };
    },
    anyContact(state){
        return function(id){
            return state.contacts.some(contact => contact.id == id);
        };
    }
}