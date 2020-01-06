import Vue from "vue";
import App from "./App";
import router from "./router";
import VueAxios from "./services/VueAxios";
import Vuelidate from "vuelidate";

import "./sass/base.scss";
Vue.use(Vuelidate);

Vue.config.productionTip = false;

Vue.use(VueAxios, {
  baseUrl: process.env.NODE_ENV === "stub" ? "/stubs/" : ""
});

Vue.config.productionTip = process.env.NODE_ENV !== "production";
new Vue({
  router,
  VueAxios,
  render: h => h(App)
}).$mount("#app");