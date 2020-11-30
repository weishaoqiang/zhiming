<template>
  <div class="logo">
    <div class="img">
      <img src="@/assets/images/logo.gif" alt="logo">
    </div>
    <div class="title">
      <p class="zh">广西机电职业技术学院</p>
      <p class="en">GUANGXI TECHNOLOGICAL COLLEGE OF MACHINERY AND ELECTRICITY</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .logo {
    display: flex;
    justify-content: flex-start;
  }
  .img {
    width: 60px;
    height: auto;
    img {
      display: block;
      width: 100%;
    }
  }
  .title {
    height: 60px;
    padding: 10px 0 0 10px;
    .zh {
      font-size: $fontSizeLogo;
      font-weight: 100;
      font-family: "gxcme";
    }
    .en {
      font-size: $fontSizeMini;
      -webkit-transform-origin-x: 0;
      -webkit-transform: scale(0.80);
      font-family: "Microsoft YaHei Light";
      // color: ;
    }
  }
</style>