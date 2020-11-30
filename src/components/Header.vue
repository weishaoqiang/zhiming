<template>
  <div class="header">
    <div class="left">
      <div class="logo">
        <logo></logo>
      </div>
      <div class="name">党委武装部（保卫处）</div>
    </div>
    <div class="right">
      <div class="email-link">
        <a class="link" href="http://www.gxcme.edu.cn/">学院首页</a>
        <a class="email" href="mailto:bwc@gxcme.edu.cn">部门邮箱</a>
      </div>
      <div class="search">
        <el-input v-model="value" prefix-icon="el-icon-search" placeholder="请输要搜素的入内容" size="medium"></el-input>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from 'components/part-components/Logo.vue'
export default {
  name: 'Header',
  components: {
    Logo
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 150px;
    padding: 0 120px;
    background-color: $mainColor;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .left {
      flex: 1;
      display: flex;
      justify-content: flex-start;

      .name {
        position: relative;
        font-size: $fontSizeLarge;
        font-weight: 600;
        letter-spacing: 20px;
        &::before {
          content: "";
          width: 3px;
          height: 42px;
          position: absolute;
          left: -35px;
          top: 50%;
          transform: translateY(-50%);
          background-color: $blackColor;
        }
      }
    }
    .right {
      background-color: transparent;
      width: 210px;
      padding: 30px 0px 20px 0px;
      .email-link {
        text-align: center;
        margin-bottom: 15px;
        > a {
          margin-right: 20px;
          position: relative;
        }
        .link::after {
          content: "";
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          height: 12px;
          width: 1px;
          background-color: $fontColor;
        }
      }
    }
  }
</style>