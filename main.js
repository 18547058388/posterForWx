import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import Alert from './tools/spt-alert/index.js';


Vue.prototype.alert = Alert.getInstance();

Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
