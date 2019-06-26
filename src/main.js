import Vue from "vue";
import Demo from "./demo.vue";
import './index.css'
import plugin from './components/plugin';

Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
    render: h => h(Demo)
}).$mount("#app");