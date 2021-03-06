import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: '',
    c: '',
    price: 0,
    user: {
      productCollection: []
    },
    username: '',
    prodlist: [{
      productid: 0,
      quantity: ''
    }]
  },
  getters: {

  },
  mutations: {
  },
  actions: {
  }
})
