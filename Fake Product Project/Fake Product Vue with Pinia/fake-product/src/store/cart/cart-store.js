import {defineStore} from 'pinia';
import actions from './actions.js';
import getters from './getters.js';

const useCartStore = defineStore('cartStore', {
    state: function(){
        return{
            users: []
        }
    },
    actions,
    getters
});

export default useCartStore;