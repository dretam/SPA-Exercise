import axios from "axios";

export default{
    async fetchUsers(context){
        if(context.getters.countUsers > 0){
            return;
        }
        const response = await axios.get("/users");
        const users = response.data;
        let usersState = [];
        for(let user of users){
            const {id, name, username, email} = user;
            usersState.push({
                id, username, email,
                fullName: `${name.firstname} ${name.lastname}`
            });
        }
        context.commit('setUsers', usersState);
    },
    async fetchContact(context, selectedId){
        if(context.getters.anyContact(selectedId)){
            return;
        }
        const response = await axios.get(`/users/${selectedId}`);
        const {id, name, phone, email, address} = response.data;
        let contact = {
            id,
            fullName: `${name.firstname} ${name.lastname}`,
            phone,
            email,
            city: address.city,
            street: address.street,
            zipcode: address.zipcode,
            geoLocation: `${address.geolocation.lat}, ${address.geolocation.long}`
        }
        context.commit('addContact', contact);
    }
}