<template>
  <div class="nav">
    <div class="nav-list">
      <div :class="['nav-item', {'active': navActive() === item.link}]"
        v-for="item in navData"
        :key="item.id">
        <a :href="item.link">{{item.name}}</a>
        <ul class="child-list">
          <li class="child-item" v-for="(child, index) in item.childs" :key="index">
            <a :href="child.link">{{child.name}}</a>
          </li>
        </ul>
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
        link: '/department-jgsz.html',
        childs: [{
          name: '处室职责',
          link: '/department-jgsz.html'
        }, {
          name: '科室职责',
          link: '/department-jgsz.html'
        }, {
          name: '保卫风采',
          link: '/department-jgsz.html'
        }]
      }, {
        id: 3,
        name: '工作动态',
        link: '/department-gzdt.html',
        childs: [{
          name: '工作动态',
          link: '/department-gzdt.html',
        }, {
          name: '通知公告',
          link: '/department-gzdt.html',
        }]
      }, {
        id: 4,
        name: '服务大厅',
        link: '/department-fwdt.html',
        childs: [{
          name: '消防审批',
          link: '/department-fwdt.html',
        }, {
          name: '车辆管理',
          link: '/department-fwdt.html',
        }, {
          name: '活动审批',
          link: '/department-fwdt.html',
        }, {
          name: '户政管理',
          link: '/department-fwdt.html',
        }, {
          name: '暂住人口',
          link: '/department-fwdt.html',
        }]
      }, {
        id: 5,
        name: '武装工作',
        link: '/department-wzgz.html'
      }, {
        id: 6,
        name: '法政法规',
        link: '/department-fzfg.html',
        childs: [{
          name: '法政法规',
          link: '/department-fzfg.html',
        }]
      }, {
        id: 7,
        name: '政治学习',
        link: '/department-zzxx.html',
        childs: [{
          name: '政治学习',
          link: '/department-zzxx.html'
        }]
      }, {
        id: 8,
        name: '宣传教育',
        link: '/department-xcjy.html',
        childs: [{
          name: '宣传教育',
          link: '/department-xcjy.html',
        }, {
          name: '安全知识',
          link: '/department-xcjy.html',
        }, {
          name: '典型案例',
          link: '/department-xcjy.html',
        }]
      }]
    }
  },
  mounted() {
    this.navActive()
  },
  methods: {
    navActive() {
      return (window.location.pathname === '/' ? '/index.html' : window.location.pathname)
    }
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
      position: relative;
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
      .child-list {
        position: absolute;
        z-index: 10;
        width: 100%;
        height: 0;
        overflow: hidden;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        background: rgba($blackColor, 0.5);
        box-shadow: 0px 17px 35px -17px rgba(0, 0, 0, 0.3);
        transition: background 200ms;
      }
      .child-item:hover {
        color: $orangeColor;
      }
    }
    .nav-item:hover, .nav-item.active {
      background-color: $mainColor;
      color: $whiteColor;
    }
    .nav-item:hover {
      .child-list {
        height: auto;
        transition: background 200ms;
      }
    }
  }
</style>