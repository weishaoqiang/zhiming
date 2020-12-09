<template>
  <div class="nav">
    <div class="nav-list">
      <div :class="['nav-item', {'active': false}]"
        v-for="item in navData"
        :key="item.id">
        <a :href="item.link">{{item.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      navData: [{
        id: 1,
        name: '部门首页',
        link: '/index.html'
      }, {
        id: 2,
        name: '机构设置',
        link: '/department-duty.html'
      }, {
        id: 3,
        name: '工作动态',
        link: '/department-new.html'
      }, {21
        link: '/department-notify.html'
      }, {
        id: 5,
        name: '武装工作',
        link: '/department-notify.html'
      }, {
        id: 6,
        name: '法政法规',
        link: '/department-rules.html'
      }, {
        id: 7,
        name: '政治学习',
        link: '/department-draft.html'
      }, {
        id: 8,
        name: '宣传教育',
        link: '/department-sheet.html'
      }]
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    width: 100%;
    height: 50px;
    min-width: 1200px;
    background-color: $grayBGColor;
  }
  .nav-list {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    .nav-item {
      min-width: 80px;
      line-height: 50px;
      flex: 1;
      text-align: center;
      cursor: pointer;
      font-weight: 600;
      color: $fontGrayColor;
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .nav-item:hover, .nav-item.active {
      background-color: $mainColor;
      color: $whiteColor;
    }
  }
</style>