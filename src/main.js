import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import Header from './components/header_footer/header.vue'

Vue.component('app-header', Header);

export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
