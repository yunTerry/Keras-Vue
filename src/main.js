import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

require('vuetify/src/stylus/app.styl');

axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.headers.post['Content-Type'] = 'multipart/json;charset=UTF-8';
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');

