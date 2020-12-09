<template>
  <div class="contact-card">
    <h3 class="title">广西机电职业技术学院党委武装部（保卫处）竭诚为您服务</h3>
    <div class="line"></div>
    <div class="tels">
      <div class="card left">
        <div class="tel">校园警务室值班：0771-3246110</div>
        <div class="tel">保卫处值班：18977093910</div>
        <div class="tel">西湖派出所：0771-3252601</div>
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
      min-height: 64px;
      line-height: 1.5;
      font-size: $fontSizeTitle;
      font-weight: 600;
      text-align: center;
    }
    .line {
      width: 100%;
      height: 2px;
      background-color: $lightBlueColor;
    }
    .tels {
      position: relative;
      display: flex;
      padding: 32px 20px;
      .left {
        flex: 2;
        color: $mainColor;
      }
      .right {
        // flex: 1;
        box-sizing: border-box;
        width: 130px;
        background-color: $mainColor;
        padding: 5px 15px;
        border-radius: 4px;
        color: $grayBGColor;
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