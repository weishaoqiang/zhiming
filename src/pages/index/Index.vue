<template>
  <div class="container">
    <Header />
    <Nav />
    <div class="content">
      <div class="index-banner">
        <banner :items="banners"></banner>
        <contact-card class="card"></contact-card>
      </div>
      <div class="index-body">
        <div class="list dynamic">
          <plane class="plane" title="工作·动态" :centerTitle="true" link="/department-gzdt.html">
            <div class="item">
              <div class="pic-list">
                <box-shadow v-for="i in 3" :key="i" class="pic-list_card">
                  <ImgCard
                    imgH="150px"
                    imgUrl="/images/home_banner1.jpg"
                    desc="武装保卫党支部组织全体党员学习十九届五中全会精神武装保卫党支部组织全体党员学习十九届五中全会精神武装保卫党支部组织全体党员学习十九届五中全会精神"
                  ></ImgCard>
                </box-shadow>
              </div>
              <div class="text-list">
                <list :items="[1,2,3,4,5,6,7]"></list>
              </div>
            </div>
          </plane>
        </div>
        <div class="list notify">
          <plane class="plane" title="通知·公告" link="/department-jgsz.html">
            <list :items="[1,2,3,4,5,6,7,8]"></list>
          </plane>
          <plane class="plane" title="政策·法规" link="/department-fzfg.html">
            <list :items="[1,2,3,4,5,6,7,8]"></list>
          </plane>
          <plane class="plane" title="保卫·风采" link="/department-jgsz.html">
            <div class="pic-list">
              <box-shadow class="pic-list_card img-card" v-for="i in 4" :key="i">
                <ImgCard
                  imgH="100px"
                  :lineNum="1"
                  imgUrl="/images/home_banner1.jpg"
                  desc="武装保卫党支部组织全体党员学习十九届五中全会精神武装保卫党支部组织全体党员学习十九届五中全会精神武装保卫党支部组织全体党员学习十九届五中全会精神"
                ></ImgCard>
              </box-shadow>
            </div>
          </plane>
        </div>
        <div class="list icon-list">
          <div class="font-box">
            <a href="javascript:;" class="iconfont-outer">
              <i class="iconfont icon-email"></i>
              <p class="desc">处长信箱</p>
            </a>
            <a href="javascript:;" class="iconfont-outer">
              <i class="iconfont icon-protection"></i>
              <p class="desc">消防审批</p>
            </a>
            <a href="javascript:;" class="iconfont-outer">
              <i class="iconfont icon-car"></i>
              <p class="desc">车辆管理</p>
            </a>
            <a href="javascript:;" class="iconfont-outer">
              <i class="iconfont icon-system"></i>
              <p class="desc">户籍管理系统</p>
            </a>
            <a href="javascript:;" class="iconfont-outer">
              <i class="iconfont icon-approval"></i>
              <p class="desc">活动审批</p>
            </a>
            <a href="javascript:;" class="iconfont-outer">
              <i class="iconfont icon-people"></i>
              <p class="desc">暂住人口</p>
            </a>
            <a href="javascript:;" class="iconfont-outer">
              <i class="iconfont icon-download"></i>
              <p class="desc">文件下载</p>
            </a>
          </div>
          <div class="friend-link">
            <plane class="plane" title="友情.链接" :centerTitle="true">
              <div class="pic-list">
                <box-shadow v-for="i in 4" :key="i" class="pic-list_card">
                  <ImgCard imgH="74px" imgW="174px" imgUrl="/images/home_banner1.jpg"></ImgCard>
                </box-shadow>
              </div>
            </plane>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from 'components/Header.vue'
import Nav from 'components/Nav.vue'
import Footer from 'components/Footer.vue'
import Banner from 'components/part-components/Banner.vue'
import ContactCard from 'components/part-components/ContactCard.vue'
import Plane from 'components/part-components/Plane.vue'
import List from 'components/part-components/List.vue'
import BoxShadow from 'components/part-components/BoxShadow.vue'
import ImgCard from 'components/part-components/ImgCard.vue'

export default {
  data() {
    return {
      banners: [{
        imgUrl: '/images/home_banner1.jpg'
      }, {
        imgUrl: '/images/home_banner4.jpg'
      }]
    }
  },
  components: {
    Header, Nav, Footer, Banner, ContactCard, Plane, List, BoxShadow, ImgCard
  }
}
</script>

<style lang="scss" scoped>
  .container {
    min-width: $webSiteMinWidth;
  }
  .content {
    width: 100%;
    height: auto;
    background-color: $contentBackground;

    .index-banner {
      position: relative;
      .card {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 200px;
        z-index: 2;
      }
    }
    
    .index-body {
      max-width: 1200px;
      background-color: $whiteColor;
      margin: 0 auto;
      padding: 20px;
      .dynamic {
        width: 100%;
        .item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          .plane {
            width: 100%;
          }
          .pic-list {
            width: 60%;
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
            .pic-list_card {
              width: 220px;
              height: 255px;
            }
          }
          .text-list {
            padding: 0 10px;
            width: 40%;
          }
        }
      }
      .notify {
        height: 380px;
        display: flex;
        justify-content: space-between;
        .plane {
          width: 375px;
          flex: 1;
          .pic-list {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 15px 0;
            .pic-list_card {
              width: 48%;
              margin-bottom: 10px;
            }
          }
        }
      }
      .icon-list {
        display: flex;
        justify-content: space-between;
        
        .font-box {
          flex: 1;
          .iconfont-outer {
            float: left;
            margin: 5px 18px;
          }
          .iconfont {
            cursor: pointer;
            font-size: 90px;
            color: $lightBlueColor;
            display: block;
          }
          .desc {
            display: block;
            text-align: center;
            color: $lightBlueColor;
          }
          :hover {
            .iconfont {
              color: $mainColor;
            }
            .desc {
               color: $mainColor;
            }
          }
        }
        .friend-link {
          width: 390px;
          .pic-list {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .pic-list_card {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
</style>