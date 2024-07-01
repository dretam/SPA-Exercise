export default{
    countUsers(){
        return this.users.length;
    },
    getOneContact(){
        return function(id){
            return this.contacts.find(contact => contact.id == id);
        }
    },
    anyContact(){
        return function(id){
            return this.contacts.some(contact => contact.id == id);
        }
    }
}