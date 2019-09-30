<template>
  <div class="newsinfo-container">
    <h3 class="title">{{ message.title }}</h3>
    <p class="subtitle">
      <span>发表时间:{{ message.add_time | dateFormat }}</span>
      <span>点击: {{ message.click }}次</span>
    </p>
    <hr class="line" />
    <div class="content" v-html='message.content'></div>
    <!-- 评论组件 -->
    <cmt :isShow='flag' :id='id'></cmt>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      id: this.$route.params.id,
      message : {},
      flag:false
    }
  },
  methods: {
    getnewsinfo(){
      this.$http.get('api/getnew/'+ this.id)
      .then(function(data){
        if(data.body.status === 0){
          this.message = data.body.message[0]
          this.flag = true
        }
      })
    }
  },
  created() {
    this.getnewsinfo()
  },
}
</script>

<style lang="less" scoped>
  .newsinfo-container{
    padding: 0 5px;
    .title{
      font-size : 16px;
      color:red;
      text-align: center;
      margin:10px 0px;
    }
    .subtitle{
      display: flex;
      justify-content: space-between;
      color:#22eff0;
    }
    .line{
      border-color: #f0f0f0;
    }
    .content{
      img{
        width:100%;
      }
    }
  }
</style>
