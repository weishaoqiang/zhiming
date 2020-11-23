<template>
  <div class="component-list" ref='list'>
    <list-item v-for="(item, index) in items" :width="width" :key="index"></list-item>
  </div>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      default: () => [1,2,3,4,5]
    }
  },
  components: {
    ListItem
  },
  data() {
    return {
      width: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      const { list } = this.$refs
      this.width = list.offsetWidth
    })
  }
}
</script>

<style lang="scss" scoped>
  
</style>