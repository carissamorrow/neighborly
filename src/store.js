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
    user: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    logout(state) {
      state.user = {}
    },
  },
  actions: {
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(e => {
          console.log('[registration failed] :', e)
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          // router.push({ name: 'home' })
        })
        .catch(e => {
          console.log('not authenticated')
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(e => {
          console.log('Login Failed')
        })
    },
    logout({ commit, dispatch }) {
      auth.delete('/logout')
        .then(res => {
          commit('setUser', {})
          // router.push({ name: 'home' })
        })
    }
  }
})
