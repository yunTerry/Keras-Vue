import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import 'vuetify/src/stylus/app.styl';
import Vuex from 'vuex'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.headers.post['Content-Type'] = 'multipart/json;charset=UTF-8';
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
      image: '',
      ifsucc: 0,
      possblity: [],
      msg: ''
  },
  mutations: {
      updateData(state, even) {
          if (even.img != null)
              state.image = even.img
          if (even.ifsucc != null)
              state.ifsucc = even.ifsucc
          if (even.possblity != null)
              state.possblity = even.possblity
          if (even.msg != null)
              state.msg = even.msg
      }

  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

