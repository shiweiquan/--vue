<template>
  <div class="videoinfo-container">
    <div class="main"  v-show="isShow1">
      <div class="main-item">
        <h3 class="item-title">{{ info_message.title }}</h3>
        <div class="item-bottom">
          <div class="bottom-left">
            <p class="start">
              <span class="kongxing">⭐⭐⭐⭐⭐</span>
              <!-- <span class="shixing">⭐⭐⭐⭐⭐</span> -->
              <span class="sorce">{{ info_message.collect_count }}人评价</span>
            </p>
            <p
              class="info"
            >
              <span>{{ info_message.pubdates instanceof Array ? info_message.pubdates[0] : ''}}</span><br>
              <span v-for="item_genres in info_message.genres" :key="item_genres">{{ item_genres }}</span><br>
              <span v-for="(item_name,index) in info_message.casts" :key="item_name.name"> {{ index === (info_message.casts.length - 1)   ?   item_name.name: item_name.name + "/"}} </span>

            </p>
            <p class="more">
              <a :href="appaddr" >用App查看影人资料</a>
            </p>
          </div>
          <div class="item-right">
            <img :src="info_message.images instanceof Object ? 'https://images.weserv.nl/?url='+info_message.images.small   : '' " alt="">
          </div>
        </div>
        <div class="button">
          <el-button class="button-size" size="medium" plain>想看</el-button>
          <el-button class="button-size" plain size="medium">看过</el-button>
        </div>
        <div class="movie-info">
          <h4 class="movie-info-title">{{ info_message.title }}的简介</h4>
          <p
            class="movie-info-content"
          >{{ info_message.summary }}
            <a href="javascript:;">(展开)</a>
          </p>
          <a href="javascript:;" class="more-category">查看更多相关分类</a>
          <div class="tag">
            <el-tag type="info" v-for="item in info_message.tags" :key="item">{{item}}</el-tag>
          </div>
        </div>
      </div>
    </div>
    <mt-spinner color="#26a2ff" v-show="!isShow1" :type="1" :size="80"></mt-spinner>
  </div>
</template>
<script>
export default {
  data(){
    return {
      id : this.$route.params.id,
      info_message:{},
      isShow1:false,
      appaddr:''
    }
  },
  methods:{
    getvideoinfo(){
      // console.log(this.$route.params)
      this.$http.get('http://localhost:3006/subject/'+ this.id )
          .then(res=>{
              this.info_message = res.body
            // console.log(typeof navigator.userAgent)
            this.isShow1 = true
          })
    },
    getAppAddress(){
      var phoneType = navigator.userAgent;
      if(phoneType.indexOf('Android') >= 0){
        this.appaddr = "https://server-m.pp.cn/download/apk/new?channel=PP_113&ch_src=25pp_android_pc&ch=pp&appId=6228447"
      }else if(phoneType.indexOf('iPhone OS') >= 0) {
        this.appaddr = "https://apps.apple.com/cn/app/id907002334"
      }
    }
  },
  created() {
    this.getvideoinfo()
    this.getAppAddress()
  }
};
</script>
<style lang="less">

.videoinfo-container {
  span {
    .mint-spinner-double-bounce{
      left:50%;
      bottom:0;
      transform:translate(-50%,0);
    }
  }
  .main {
    margin-top: 10px;
    padding: 0 10px;
    .item-title {
      margin: 0;
      padding: 15px 0 0;
    }


    .item-bottom {
      display: flex;
      justify-content: space-between;
      p {
        font-size: 0.7rem;
      }
      .item-left {
        .info {
          color: #000;
        }
      }
      .item-right {

        margin-left: 15px;
        // flex: 1;
        img {
          width: 10rem;
        }
      }
      .more {
        color: red;
        margin-top:50px;;
      }
    }
    .button {
      display: flex;
      margin: 30px 0;
      justify-content: space-around;
      .button-size {
        width: 50%;
        border-color: red;
        color: red;
        height: 40px;
        margin: 0 15px;
      }
    }

    .movie-info {
      .more-category {
        margin: 15px 0;
        display: block;
        color: #05f;
      }
      p {
        font-size: 0.7rem;
      }
      .movie-info-title {
        margin-bottom: 20px;
      }

      .tag {
        .el-tag {
          margin: 0px;
          margin-left: 5px;
          margin-bottom: 5px;
          border-bottom-left-radius: 25px;
          border-bottom-right-radius: 25px;
          border-top-right-radius: 25px;
          border-top-left-radius: 25px;
        }
      }
    }
  }

}


</style>
