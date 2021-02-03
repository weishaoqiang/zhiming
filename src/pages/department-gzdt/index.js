import App from './department-gzdt.vue'
import registerVue from '@/lib/common'

registerVue({
  render: h => h(App)
}).$mount('#app')