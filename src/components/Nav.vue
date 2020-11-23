<template>
  <div class="nav">
    <div class="nav-list">
      <div class="nav-item">
        <a href="/index.html">部门首页</a>
      </div>
      <div class="nav-item">
        <a href="/department-duty.html">部门职责</a>
      </div>
      <div class="nav-item">
        <a href="/department-new.html">部门新闻</a>
      </div>
      <div class="nav-item">
        <a href="/department-notify.html">通知公告</a>
      </div>
      <div class="nav-item">
        <a href="/department-rules.html">规章制度</a>
      </div>
      <div class="nav-item">
        <a href="/department-draft.html">征兵工作</a>
      </div>
      <div class="nav-item">
        <a href="/department-sheet.html">常用表格</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {}
  },
  mounted() {
    console.log(window.location)
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
    .nav-item:hover {
      background-color: $mainColor;
      color: $whiteColor;
    }
  }
</style>