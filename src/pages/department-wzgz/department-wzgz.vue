<template>
  <div class="container">
    <Header/>
    <Nav/>
    <div class="content">
      <div class="left">
        <sub-nav :data="subNavData"></sub-nav>
      </div>
      <div class="right">
        <Plane title="武装工作" :breadcrumb="true">
          <List :items="[1,2,3,4,5,6,7,8,9,10,11,12,13]"></List>
        </Plane>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from 'components/Header.vue'
import Nav from 'components/Nav.vue'
import Footer from 'components/Footer.vue'
import Plane from 'components/part-components/Plane.vue'
import List from 'components/part-components/List.vue'
import SubNav from 'components/SubNav.vue'

export default {
  name: 'department-jgsz',
  data() {
    return {
      subNavData: { 
        title: '服务大厅',
        level: 1,
        navList: [{
          link: 'www.baidu.com',
          text: '消防审批',
          name: '消防审批',
          level: 2
        },{
          link: 'www.baidu.com',
          text: '车辆管理',
          name: '车辆管理',
          level: 2
        },{
          link: 'www.baidu.com',
          text: '活动审批',
          name: '活动审批',
          level: 2
        },{
          link: 'www.baidu.com',
          text: '户证管理',
          name: '户证管理',
          level: 2
        },{
          link: 'www.baidu.com',
          text: '暂住人口',
          name: '暂住人口',
          level: 2
        }]
      }
    }
  },
  components: {
    Header, Nav, Footer, Plane, List, SubNav
  }
}
</script>

<style lang="scss" scoped>
  .content {
    overflow: hidden;
    width: 1200px;
    padding: 20px 20px 30px 20px;
    min-height: calc(100vh - 280px);
    background-color: $whiteColor;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    .left {
      margin-right: 20px;
    }
    .right {
      flex: 1;
      position: relative;
    }
  }
</style>