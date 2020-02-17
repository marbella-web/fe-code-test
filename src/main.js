import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Conf from "./assets/products.json";
Vue.prototype.$appConfig = Conf;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
