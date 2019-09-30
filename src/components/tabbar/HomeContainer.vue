<template>
  <div>
   <swiper :imgList='imgList' :time="speed" :isfull='true'></swiper>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/newsList">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/photolist">
         <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/goodslist">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/leaveword">
         <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反驳</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/video">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      imgList: [],
      speed:4000
    };
  },
  methods: {
    getlunbo() {
      this.$http
        .get("api/getlunbo")
        .then(res => {
          if (res.body.status === 0) {
            this.imgList = res.body.message;
          }
        });
    }
  },
  created: function() {
    this.getlunbo();
  }
};
</script>
<style lang="less" scoped>
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  .mui-table-view-cell{
    &.mui-active {
      background-color: #fff;
    }
    .mui-media-body{
      font-size:13px;
    }
    img {
      width:60px;
      height:60px;
    }
  }
}
</style>

