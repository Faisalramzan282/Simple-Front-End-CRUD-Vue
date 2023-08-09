import { createApp } from 'vue'
// import Vue from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
// import Toast from 'vue-toastification';
// import 'vue-toastification/dist/index.css';
// Vue.use(Toast, {
//     transition: 'Vue-Toastification__bounce',
//     maxToasts: 20,
//     newestOnTop: true,
//   });

createApp(App).use(store).use(router).mount('#app')
