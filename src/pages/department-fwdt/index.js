import App from './department-fwdt.vue'
import registerVue from '@/lib/common'

registerVue({
  render: h => h(App)
}).$mount('#app')