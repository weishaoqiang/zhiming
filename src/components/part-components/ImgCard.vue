<template>
  <div class="component-img-card" @click="jumpToLink">
    <div class="img">
      <img ref="img" :style="{ 'width': imgW, 'height': imgH }" :src="imgUrl" alt="pic">
    </div>
    <p v-if="desc" :class="['desc', `lineNum${lineNum}`]">
      <span>{{desc}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ImgCard',
  props: {
    isLisk: {
      type: Boolean,
      default: true
    },
    href: {
      type: String,
      default: 'https://www.baidu.com'
    },
    imgUrl: {
      type: String,
      default: ''
    },
    imgW: {
      type: String,
      default: ''
    },
    imgH: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    lineNum: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {
    jumpToLink() {
      if (!this.isLisk) return false
      window.location = this.href;
    }
  }
}
</script>

<style lang="scss" scoped>
  .component-img-card {
    cursor: pointer;
    width: 100%;
    &:hover {
      .img > img {
        transition: all 200ms;
      }
      .desc {
        color: $darckBlueColor;
      }
    }
  }
  .img {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    img {
      display: block;
      width: 100%;
      height: auto;
      z-index: 2;
    }
  }
  .desc {
    // max-height: 80px;
    box-sizing: border-box;
    width: 100%;
    font-size: $fontSize15;
    line-height: 30px;
    color: $fontGrayColor;
    overflow : hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .lineNum1 {
    padding: 5px 10px 0;
    height: 40px;
    word-break: normal;
    -webkit-line-clamp: 1; /* 行数*/
  }
  .lineNum2 {
    padding: 20px 10px 0;
    height: 80px;
    -webkit-line-clamp: 2; /* 行数*/
  }
</style>