<template>
  <div class="contact-card">
    <h3 class="title">广西机电职业技术学院保卫值班常用电话</h3>
    <div class="line"></div>
    <div class="tels">
      <div class="card left">
        <div class="tel">警务室值班：3246110</div>
        <div class="tel">保卫处值班：18977093910</div>
        <div class="tel">派出所值班：3246551</div>
      </div>
      <div class="card right">
        <div class="tel">报警：110</div>
        <div class="tel">火警：119</div>
        <div class="tel">急救：120</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .contact-card {
    width: 518px;
    height: 252px;
    background-color: rgba(180, 180, 180, 0.7);
    color: $mainColor;
    padding: 20px;
    border-radius: 4px;
    .title {
      height: 64px;
      line-height: 64px;
      font-size: $fontSizeTitle;
      font-weight: 600;
    }
    .line {
      width: 100%;
      height: 2px;
      background-color: $lightBlueColor;
    }
    .tels {
      position: relative;
      display: flex;
      padding: 32px 0;
      .left {
        flex: 2;
      }
      .right {
        // flex: 1;
        box-sizing: border-box;
        width: 130px;
        background-color: $warnColor;
        padding: 5px 15px;
        border-radius: 4px;
      }
      .tel {
        cursor: pointer;
        height: 24px;
        line-height: 24px;
        font-size: $fontSizeBig;
      }
    }
  }
</style>