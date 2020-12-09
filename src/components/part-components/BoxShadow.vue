<template>
  <div class="box-shadow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BoxShadow',
  props: {},
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .box-shadow {
    transition: all 200ms;
    box-shadow: 0px 0px 0px 0px rgba(39, 39, 39, 0);
    &:hover {
      transition: all 200ms;
      box-shadow: 0px 17px 35px -17px rgba(0, 0, 0, 0.3);
    }
  }
</style>