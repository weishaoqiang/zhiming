<template>
  <div class="component-list-item">
    <a class="item-link" href="javascript:;">
      <div class="text" :style="{'max-width': `${width - 55}px`}">
        <i class="iconfont icon-little-point"></i>
        <i class="iconfont icon-little-circle"></i>
        <span class="title">
          <a href="http://www.gxcme.edu.cn/news/15629.html" target="_blank">
            学院召开全员大会贯彻落实《深化新时代教育评价改革总体方案》并邀请专家研讨学
          </a>
        </span>
      </div>
      <span class="date">[09-21]</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      defauly: () => {}
    },
    width: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .component-list-item {
    .item-link {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      height: 36px;
      line-height: 36px;
      .text {
        overflow:hidden; //超出的文本隐藏
        text-overflow:ellipsis; //溢出用省略号显示
        white-space:nowrap; //溢出不换行
        color: $darckBlueColor;
        .icon-little-point {
          display: none;
        }
        .icon-little-circle {
          display: inline;
        }
        &:hover {
          .title {
            color: $orangeColor;
          }
          .icon-little-point {
            display: inline;
          }
          .icon-little-circle {
            display: none;
          }
        }
      }
      .date {
        width: 50px;
      }
    }
  }
</style>