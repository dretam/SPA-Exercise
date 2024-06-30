<template>
    <base-modal-dialog :title="contact.fullName" @closeDialog="closeDialog">
        <table>
            <tbody>
                <tr>
                    <td>
                        <i class="fas fa-phone"></i> Phone
                    </td>
                    <td>{{contact.phone}}</td>
                </tr>
                <tr>
                    <td>
                        <i class="fas fa-envelope"></i> Email
                    </td>
                    <td>{{contact.email}}</td>
                </tr>
            </tbody>
        </table>
        <fieldset>
            <legend>Address</legend>
            <table>
                <tbody><tr>
                    <td>City</td>
                    <td>{{contact.city}}</td>
                </tr>
                <tr>
                    <td>Street</td>
                    <td>{{contact.street}}</td>
                </tr>
                <tr>
                    <td>Zipcode</td>
                    <td>{{contact.zipcode}}</td>
                </tr>
                <tr>
                    <td>Geolocation</td>
                    <td>{{contact.geoLocation}}</td>
                </tr>
            </tbody></table>
        </fieldset>
    </base-modal-dialog>
</template>

<script>
import Swal from 'sweetalert2';

export default{
    props:['userId'],
    data() {
        return {
            contact: {}
        }
    },
    async created(){
        Swal.fire({
            title: 'Loading...',
            text: 'Please wait while we process this user contact.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        await this.$store.dispatch('user/fetchContact', this.userId);
        this.contact = this.$store.getters['user/getOneContact'](this.userId);
        Swal.close();
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