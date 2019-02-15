import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
// @ts-ignore
import Axios from 'axios'
// @ts-ignore

Vue.use(Vuex)



let auth = Axios.create({
  timeout: 6000,
  withCredentials: true
})
let api = Axios.create({
  timeout: 6000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
