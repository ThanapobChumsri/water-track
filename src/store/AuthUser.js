import Vue from "vue"
import Vuex from "vuex"
import AuthService from '@/services/AuthServices'

Vue.use(Vuex)

const auth_key = 'auth-login'
let auth = JSON.parse(localStorage.getItem(auth_key))

const initialState = {
  user: auth ? auth.user : "",
  jwt: auth ? auth.jwt : "",
  isAuthen: auth ? true : false,
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    loginSuccess(state, user, jwt) {
      state.user = user
      state.jwt = jwt
      state.isAuthen = true
    },
    logoutSuccess(state) {
      state.user = ""
      state.jwt = ""
      state.isAuthen = false
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      let res = await AuthService.login({ email, password })
      if (res.success) {
        commit("loginSuccess", res.user, res.jwt)
      }
      return res
    },
    logout() {
      AuthService.logout()
      this.commit("logoutSuccess")
    },
    async register({ commit }, { username, email, password }) {
      let res = await AuthService.register({ username, email, password })
      if (res.success) {
        commit("loginSuccess", res.user, res.jwt)
      }
      return res
    },
  },
  getters: {
    user: (state) => state.user,
    jwt: (state) => state.jwt,
    isAuthen: (state) => state.isAuthen,
  },
  modules: {},
})