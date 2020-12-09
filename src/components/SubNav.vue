<template>
  <div class="component-sub-nav">
    <div class="title">{{data.title}}</div>
    <div class="text-list">
      <a :href="item.link" v-for="(item, index) in data.navList" class="item-nav" :key="index">{{item.text}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubNav',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .component-sub-nav {
    width: 260px;
    text-align: center;
    color: $whiteColor;
    .title {
      width: 100%;
      height: 80px;
      line-height: 80px;
      font-size: $fontSizeTitle;
      font-weight: 600;
      background-color: $mainColor;
    }
    .text-list {
      width: 100%;
      .item-nav {
        height: 56px;
        line-height: 56px;
        padding-left: 50px;
        text-align: left;
        color: $fontGrayColor;
        display: block;
        &:hover {
         background: rgba(57, 110, 186, 0.5);
         color: $whiteColor;
        }
      }
    }
  }
</style>