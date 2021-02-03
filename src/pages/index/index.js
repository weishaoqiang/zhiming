import App from './Index.vue'
import registerVue from '@/lib/common'

registerVue({
  render: h => h(App)
}).$mount('#app')