import axios from "axios";

export default{
    async fetchUsers(){
        if(this.countUsers > 0){
            return;
        }
        const response = await axios.get("/users");
        const users = response.data;
        for(let user of users){
            const {id, name, username, email} = user;
            this.users.push({
                id, username, email,
                fullName: `${name.firstname} ${name.lastname}`
            });
        }
    },
    async fetchContact(selectedId){
        if(this.anyContact(selectedId)){
            return;
        }
        const response = await axios.get(`/users/${selectedId}`);
        const {id, name, phone, email, address} = response.data;
        this.contacts.push({
            id,
            fullName: `${name.firstname} ${name.lastname}`,
            phone,
            email,
            city: address.city,
            street: address.street,
            zipcode: address.zipcode,
            geoLocation: `${address.geolocation.lat}, ${address.geolocation.long}`
        });
    }
}