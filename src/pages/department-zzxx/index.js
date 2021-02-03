import App from './department-zzxx.vue'
import registerVue from '@/lib/common'

registerVue({
  render: h => h(App)
}).$mount('#app')