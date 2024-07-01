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
import {ref, onBeforeMount} from 'vue';
import useStore from '../../store/user/user-store.js';
import {useRouter} from 'vue-router'

export default{
    props:['userId'],
    setup(props){
        const router = useRouter();
        const store = useStore();
        const contact = ref({});

        onBeforeMount(async function(){
            Swal.fire({
                title: 'Loading...',
                text: 'Please wait while we process this user contact.',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
            await store.fetchContact(props.userId);
            contact.value = store.getOneContact(props.userId);
            Swal.close();
        })

        function closeDialog(){
            router.push('/users');
        }

        return {contact, closeDialog};
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