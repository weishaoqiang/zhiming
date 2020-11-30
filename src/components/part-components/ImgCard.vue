<template>
  <div class="img-card" :style="{'height': height}">
    <div class="img">
      <img :src="imgUrl" alt="pic">
    </div>
    <p class="desc">{{desc}}</p>
  </div>
</template>

<script>
export default {
  name: 'ImgCard',
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .img-card {
    width: 100%;
    &:hover {
      box-shadow: 1px 3px 3px rgba(39, 39, 39, 0.1), 1px 3px 3px rgba(39, 39, 39, 0.1);
    }
  }
  .img {
    width: 100%;
  }
</style>