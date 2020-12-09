<template>
  <div class="footer">
    <div class="right">
      <p>版权所有：广西机电职业技术学院党委武装部（保卫处）</p>
      <p>地址：广西南宁市大学东路101号</p>
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