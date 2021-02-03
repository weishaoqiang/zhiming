import App from './department-wzgz.vue'
import registerVue from '@/lib/common'

registerVue({
  render: h => h(App)
}).$mount('#app')