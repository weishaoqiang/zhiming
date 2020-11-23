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
        <div class="list">
          <plane class="item" title="部门职责">
            <list></list>
          </plane>
          <plane class="item" title="通知公告">
            <list></list>
          </plane>
          <plane class="item" title="征兵工作">
            <list></list>
          </plane>
        </div>
        <div class="list">
          <plane class="item" title="部门新闻">
            <list></list>
          </plane>
          <plane class="item" title="规章制度">
            <list></list>
          </plane>
          <plane class="item" title="常用表格">
            <list></list>
          </plane>
        </div>
        <div class="list">
          <plane class="item" title="部门风采">
            <div class="img-list">
              <div class="img"><img src="/images/home_banner1.jpg" alt="pic"></div>
              <div class="img"><img src="/images/home_banner1.jpg" alt="pic"></div>
              <div class="img"><img src="/images/home_banner1.jpg" alt="pic"></div>
              <div class="img"><img src="/images/home_banner1.jpg" alt="pic"></div>
            </div>
          </plane>
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

export default {
  data() {
    return {
      banners: [{
        imgUrl: '/images/home_banner1.jpg'
      }, {
        imgUrl: '/images/home_banner2.jpg'
      }, {
        imgUrl: '/images/home_banner3.jpg'
      }]
    }
  },
  components: {
    Header, Nav, Footer, Banner, ContactCard, Plane, List
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
        left: 50px;
        z-index: 2;
      }
    }
    
    .index-body {
      max-width: 1200px;
      background-color: $whiteColor;
      margin: 0 auto;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      .list {
        width: 378px;
        .item {
          width: 100%;
          margin-bottom: 10px;
        }
        .img-list {
          width: 100%;
          .img {
            height: 130px;
            width: 100%;
            padding: 5px 0;
            overflow: hidden;
            img {
              border-radius: 4px;
              display: block;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
</style>