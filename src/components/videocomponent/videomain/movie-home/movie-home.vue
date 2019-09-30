<template>
  <div class="movie-home">

    <div class="movie-category">
      <el-row type="flex" class="row-bg">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <a href="https://m.douban.com/movie/beta">影院热映</a>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <a href="https://m.douban.com/doulist/240962/">高分电影榜</a>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg">
        <el-col :span="12">
          <div class="grid-content bg-purple">注册账号</div>
        </el-col>
        <el-col :span="12">
          <router-link tag="div" to="/home/video/login" class="grid-content bg-purple">登录豆瓣</router-link>
        </el-col>
      </el-row>
    </div>
    <!-- 活动信息-展览 -->
    <div class="list" v-if="videoList">
      <div class="list-item" v-for="(item, index) in this.$store.state.videodetailinfos" :key='index' @click='goMovieInfo(item.id)'>
        <div class="item-main">
          <div class="item-left">
            <h3 class="item-tile">{{ item.title }}</h3>
            <p class="item-info" v-html='item.content.substr(0,30)'>
              <!-- <span>展期: 2017/3/2</span>
              <span>地点: 北京</span> -->
              <!-- 展览“奇妙的不确定性”旨在强调当代艺术中某些特定叙事的重要性 -->
            </p>
          </div>
          <div class="item-right">
            <img :src="item.image_lmobile" alt="">
          </div>
        </div>
        <p class="sub">
          <span class="category_name">{{ item.category_name }}</span>
          <span class="tags">{{ item.tags }}</span>
        </p>
      </div>
      <mt-button @click='getMore' type='danger' size="large" plain v-show="!loading">加载更多</mt-button>
    <br>
    </div>
<mt-spinner v-show="loading" :type="3" :size="60"></mt-spinner>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      videoList:true,

    };
  },
  methods: {
    getDataByJson(){
      // 手写一个跨域请求服务

(function (window,document,undefined) {
  'use strict';

  var jsonp = function (url, data, callback) {
    var fnSuffix = Math.random().toString().replace('.', '');
    var cbFunName = 'my_movie_cb'+fnSuffix;
    // 1. 挂载回调函数
    window[cbFunName] = callback;

    // 2. 将data转换为url字符串的形式
  // { id:1, name: 'zhangsan } ==> id=1&name=zhangsan
    var querystring = url.indexOf('?')==-1? '?' : '&';
    for (var key in data) {
      querystring += key + '=' + data[key] + '&';
      //  id = 1 &
    }
  //  querystring = ?id=1&name=zhangsan&

    // 3.处理url中的回调参数
    // url += callback = sshdksjgsld
    querystring += 'callback=' + cbFunName;
    // querystring = ?id=1&name=zhangsan&cb=my_json_cb_01454121564

    // 4.创建一个script标签
    var scriptElment = document.createElement('script');
    scriptElment.src = url + querystring;
    // 注意: 此时还不能将其appendChild到页面上
    var div = document.createElement('div')
    div.classList.add('box')
    div.innerHTML = 'hello'


    // 5. 将script标签放到页面中
    // document.body.appendChild(scriptElment);
    document.body.appendChild(scriptElment);
  };

  window.$jsonp = jsonp;

})(window,document,undefined);
    },
    getActivityInfo() {
      this.loading = true;
      var infosList = JSON.parse(sessionStorage.getItem('videodetailinfos') || '[]');
      $jsonp(
        "https://api.douban.com/v2/event/list?loc=108288",
        { start:this.$store.state.jsonpNmae.start, count: this.$store.state.jsonpNmae.count },
        res => {
          infosList = infosList.concat(res.events);
          this.$store.state.jsonpNmae.start += 5;
           this.$store.state.flag = true;
          this.loading = false
          sessionStorage.setItem('videodetailinfos', JSON.stringify(infosList));
          this.$store.commit('setVideodetailinfos');
        }
      );
    },
    getMore(){

        this.getActivityInfo();
    },
    goMovieInfo(id){

      this.videoList = !this.videoList;
      this.$router.push({ name:'videoinfo', params:{id} })
      this.$store.state.flag   = false;
    }
  },
  created() {
    this.getDataByJson();
  if(this.$store.state.flag){
    this.getActivityInfo();
  }
  },
  mounted(){

  }
};
</script>

<style lang="less">
@import url("./movie-home.less");
</style>
