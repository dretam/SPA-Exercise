<template>
    <base-modal-dialog :title="name" @closeDialog="closeDialog">
        <table>
            <tbody>
                <tr>
                    <td>
                        <i class="fas fa-phone"></i> Phone
                    </td>
                    <td>{{phone}}</td>
                </tr>
                <tr>
                    <td>
                        <i class="fas fa-envelope"></i> Email
                    </td>
                    <td>{{email}}</td>
                </tr>
            </tbody>
        </table>
        <fieldset>
            <legend>Address</legend>
            <table>
                <tbody><tr>
                    <td>City</td>
                    <td>{{city}}</td>
                </tr>
                <tr>
                    <td>Street</td>
                    <td>{{street}}</td>
                </tr>
                <tr>
                    <td>Zipcode</td>
                    <td>{{zipcode}}</td>
                </tr>
                <tr>
                    <td>Geolocation</td>
                    <td>{{geolocation}}</td>
                </tr>
            </tbody></table>
        </fieldset>
    </base-modal-dialog>
</template>

<script>
export default{
    props:['userId'],
    data(){
        return{
            name:'',
            phone: '',
            email: '',
            city: '',
            street: '',
            zipcode: '',
            geolocation: ''
        }
    },
    async created(){
        const promise = await fetch(`https://fakestoreapi.com/users/${this.userId}`);
        const {name, phone, email, address} = await promise.json();
        this.name = `${name.firstname} ${name.lastname}`;
        this.phone = phone;
        this.email = email;
        this.city = address.city;
        this.street = address.street;
        this.zipcode = address.zipcode;
        this.geolocation = `${address.geolocation.lat}, ${address.geolocation.long}`;
    },
    methods: {
        closeDialog(){
            this.$router.push('/users');
        }
    }
}
</script>

<style scoped>
td {
    padding-bottom: 10px;
}
td:first-child {
    padding-right: 20px;
    color: #686de0;
}
</style>