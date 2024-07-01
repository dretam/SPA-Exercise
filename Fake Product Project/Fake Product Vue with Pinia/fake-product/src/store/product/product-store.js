import {defineStore} from 'pinia';
import actions from './actions.js';
import getters from './getters.js';

const useProductStore = defineStore('productStore', {
    state(){
        return{
            products: [],
            details: []
        }
    },
    actions,
    getters
});

export default useProductStore;