import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data: [
      ],
  },
  getters: {
  },
  mutations: {
      addRegister (state,{payload}){
        state.data.push(payload)
      },
  },
  actions: {
      addDataRegister({commit}, payload){
        commit("addRegister",{payload})
      },
  },
  modules: {
  }
})
