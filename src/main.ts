import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";

import iView from "iview";
import "iview/dist/styles/iview.css";

// import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'



Vue.use(iView);
Vue.use(MuseUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
