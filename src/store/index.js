import Vuex from 'vuex'
import Vue from 'vue'
import {
  state,
  getters,
  mutations,
  actions
}  from './data'

Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store