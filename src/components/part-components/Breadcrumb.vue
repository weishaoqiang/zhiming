<template>
  <ul class="component-bread-crumb bread-list">
    <li class="bread-item">
      <a href="javascript:;"></a>
    </li>
  </ul>
</template>

<script>
import store from '@/store'

export default {
  name: 'Breadcrumb',
  props: {

  },
  data() {
    return {
      
    }
  },
  computed: {
    breadCrumb() {
      return store.getters.getBreadcrumb()
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>