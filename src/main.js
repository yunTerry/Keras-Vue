import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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

