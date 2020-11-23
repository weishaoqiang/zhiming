<template>
  <div class="banner">
     <el-carousel
      :trigger="trigger"
      :autoplay="autoplay"
      :interval="interval"
      :arrow="arrow"
      :type="type"
      :loop="loop"
      :height="height"
    >
        <el-carousel-item v-for="(item, index) in items" :key="index">
          <a class="link-img" :href="item.link || 'javascript:;'" :style="{ 'background-image': `url(${item.imgUrl})` }">
            <!-- <img :src="item.imgUrl" alt="pic"> -->
          </a>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    trigger: {
      type: String,
      default: 'click'
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    arrow: {
      type: String,
      default: 'never'
    },
    type: {
      type: String,
      default: ''
    },
    loop: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: '450px'
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    width: 100%;
    height: 100%;
    .link-img {
      display: block;
      width: 100%;
      height: 450px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      // img {
      //   display: block;
      //   width: 100%;
      //   height: auto;
      // }
    }
  }
</style>