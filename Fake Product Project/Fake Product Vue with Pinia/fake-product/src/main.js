import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
//import store from './store/index.js';
import axios from 'axios';
import { createPinia } from 'pinia'

import './assets/css/normalize.css';
import './assets/css/all.css';

import BaseCapsuleButton from './components/ui-element/BaseCapsuleButton.vue';
import BaseFullButton from './components/ui-element/BaseFullButton.vue';
import BaseGridCard from './components/ui-element/BaseGridCard.vue';
import BaseListCard from './components/ui-element/BaseListCard.vue';
import BaseModalDialog from './components/ui-element/BaseModalDialog.vue';
import BaseStarRating from './components/ui-element/BaseStarRating.vue';
import BaseTwoSideContainer from './components/ui-element/BaseTwoSideContainer.vue';

axios.defaults.baseURL = 'https://fakestoreapi.com/';

const app = createApp(App);
app.use(router);
//app.use(store);
const pinia = createPinia();
app.use(pinia);

app.component('base-capsule-button', BaseCapsuleButton);
app.component('base-full-button', BaseFullButton);
app.component('base-grid-card', BaseGridCard);
app.component('base-list-card', BaseListCard);
app.component('base-modal-dialog', BaseModalDialog);
app.component('base-star-rating', BaseStarRating);
app.component('base-two-side-container', BaseTwoSideContainer);

app.mount('#app');
