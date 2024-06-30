export default{
    setUsers(state, payload){
        state.users = payload;
    },
    addContact(state, payload){
        state.contacts.push(payload);
    }
}