<template>
  <div class="components-plane">
    <div class="plane-head">
      <h3 class="title">
        <i class="" v-if="icon"></i>
        <p>{{title}}</p>
      </h3>
      <div class="more">
        <a href="javascript:;">
          <i class="iconfont icon-more"></i>
          <!-- <span class="desc">更djksjdks多</span> -->
        </a>
      </div>
    </div>
    <div class="plane-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Plane',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    icon: {
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
  .components-plane {
    width: 100%;
    background-color: $whiteColor;
    border-radius: 4px;
    padding: 0 5px;
    .plane-head {
      height: 44px;
      line-height: 44px;
      position: relative;
      display: flex;
      justify-content: space-between;
      font-size: $fontSizeTitle;
      color: $darckBlueColor;

      .title {
        // padding-left: 10px;
      }

      .more {
        cursor: pointer;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 18px;
        .iconfont {
          font-size: $fontSizeTitle;
        }
        .desc {
          margin-left: 10px;
        }
      }
    }
    .plane-head::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      height: 2px;
      width: 100%;
      background: $lightBlueColor;
    }
    .plane-content {
      padding: 10px 0;
    }
  }
</style>