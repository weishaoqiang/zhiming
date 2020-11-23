<template>
  <div class="footer">
    <div class="right">
      <p>All rights reserved. 2011</p>
      <p>广西南宁市大学东路101号 学院办公室 版权所有</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    width: 100%;
    height: 80px;
    padding: 8px 0;
    background-color: $mainColor;
    .right {
      text-align: center;
      p {
        height: 32px;
        line-height: 32px;
        color: $whiteColor;
      }
    }
  }
</style>