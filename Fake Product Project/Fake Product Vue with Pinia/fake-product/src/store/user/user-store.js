import {defineStore} from 'pinia';
import actions from './actions.js';
import getters from './getters.js';

const useUserStore = defineStore('userStore', {
    state(){
        return{
            users: [],
            contacts: []
        }
    },
    actions,
    getters
});

export default useUserStore;