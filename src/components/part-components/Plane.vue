<template>
  <div class="component-plane">
    <div class="plane-head">
      <div class="" v-if="breadcrumb">
        <Breadcrumb />
      </div>
      <div v-else :class="['more', { 'more_padding': !more }]">
        <a :href="link">
          <i  class="iconfont icon-more" title="更多"></i>
        </a>
      </div>
      <h3 :class="['title', {'title-center': centerTitle }]">
        <i class="" v-if="icon"></i>
        <p>{{title}}</p>
      </h3>
    </div>
    <div class="plane-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Breadcrumb from './Breadcrumb'
export default {
  name: 'Plane',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    more: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: ''
    },
    centerTitle: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: ''
    },
    breadcrumb: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Breadcrumb
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .component-plane {
    width: 100%;
    background-color: $whiteColor;
    border-radius: 4px;
    padding: 0 5px;
    .plane-head {
      height: 44px;
      line-height: 44px;
      position: relative;
      font-size: $fontSizeTitle;
      color: $darckBlueColor;
      position: relative;

      .title {
        display: inline-block;
        position: relative;
        p {
          position: relative;
          &::after {
          content: "";
          position: absolute;
          width: 70%;
          bottom: -3px;
          height: 3px;
          left: 50%;
          transform: translateX(-50%);
          background: $lightBlueColor;
        }
        }
      }

      .title-center {
        margin: auto;
        position: absolute;
        height: 100%;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
      }

      .more {
        float: right;
        cursor: pointer;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        &_padding {
          padding-right: 12px;
        }
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
      height: 1px;
      width: 100%;

      background: $lightBlueColor;
    }
    .plane-content {
      padding: 10px 0;
    }
  }
</style>