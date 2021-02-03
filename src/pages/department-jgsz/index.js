import App from './department-jgsz'
import registerVue from '@/lib/common'

registerVue({
  render: h => h(App)
}).$mount('#app')