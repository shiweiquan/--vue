<template>
  <div class="goodsdesc-container">
    <h4 class="title">{{ message.title }}</h4>
    <hr>
    <div class="content" v-html='message.content'></div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data(){
    return {
      id : this.$route.params.id,
      message:{}
    }
  },
  methods:{
    getgoodsdesc(){
      this.$http.get('api/goods/getdesc/'+this.id)
      .then(function(res){
        if(res.body.status === 0){
          this.message = res.body.message[0];
        }else {
          Toast("获取数据失败")
        }
      })
    }
  },
  created(){
    this.getgoodsdesc()
  }
}
</script>
<style lang="less">
.goodsdesc-container{
  padding: 0 5px;
  .title {
    color:#22a0ff;
    text-align: center;
    margin: 10px 0;
  }
  .content {
    p[align='center']{
      font-size:0;
      margin:0;
    }
  }
  .gomeImgLoad{
  width:100%;
  height:100%;
  vertical-align: top;
}
}


</style>
