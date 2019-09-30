<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            v-for="item in category"
            :key="item.id"
            @click="getPhotoListByCateId(item.id)"
            :class="['mui-control-item' ,item.id === 0? 'mui-active':'']"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>
    <ul class="photo-list">
      <router-link :to="'/home/photoinfo/'+ item.id" v-for="item in imgList" :key="item.id" tag='li'>
        <img v-lazy="item.img_url">
        <div class="info">
          <h4 class="info_title">{{ item.title }}</h4>
          <div class="info_body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data: function() {
    return {
      category: [],
      imgList: []
    };
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  methods: {
    getAllCategory() {
      this.$http.get("api/getimgcategory").then(function(data) {
        if (data.body.status === 0) {
          data.body.message.unshift({ id: 0, title: "全部" });
          this.category = data.body.message;
        }
      });
    },

    // 根据分类id获取图片列表
    getPhotoListByCateId(id) {
      this.$http.get("api/getimages/" + id).then(function(res) {
        if (res.body.status === 0) {
          this.imgList = res.body.message;
        }
      });
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style lang="less" scoped>
* {
  touch-action: pan-y;
}

.photo-list {
  margin: 0;
  padding: 0;
  li {
    position: relative;
    list-style: none;
    margin: 10px;
    background-color: #bbb;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    img {
      width: 100%;
      border-radius: 5px;
      vertical-align: bottom;
    }
    img[lazy="loading"] {
      display: block;
      width: 40px;
      height: 300px;
      margin: auto;
}
    .info {
      position: absolute;
      background-color: rgba(0,0,0,.3);
      bottom:0;
      color:#fff;
      max-height: 84px;
      .info_title{
        font-size:14px;
      }
      .info_body{
        font-size:12px;
      }
    }
  }
}
</style>
