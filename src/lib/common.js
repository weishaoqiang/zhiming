import Vue from 'vue'
import ElementUI from 'element-ui'
import './reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/store'

Vue.config.productionTip = false
Vue.use(ElementUI)

const defaultConfig = {
  store
}

const registerVue = (config = {}) => {
  const latestConfig = Object.assign(config, defaultConfig)
  return new Vue(latestConfig)
}
export default registerVue