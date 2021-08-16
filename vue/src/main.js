import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';
import VueRouter from 'vue-router'

import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

Vue.use(VueRouter);

import Location from './components/Location';
import LocationDetails from './components/LocationDetails';
import LocationCreate from './components/LocationCreate'

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: '/', component: Location},
    { path: '/location-details/:id', component: LocationDetails},
    { path: '/location-create', component: LocationCreate}
  ]
})

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
