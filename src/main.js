import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueSweetalert2 from "vue-sweetalert2";
import Vuelidate from "vuelidate";
import router from "./router";
import store from "./store";
import "./filters";

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
