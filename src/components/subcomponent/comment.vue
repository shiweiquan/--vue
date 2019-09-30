<template>
  <div class="comment-container">
    <h4 class="carry">发表评论</h4>
    <hr>
    <textarea name="content" v-model='commentContent' maxlength="120" placeholder="请输入要发表的内容(最多吐槽120字)"></textarea>
    <mt-button type='primary' size='large' @click="carryComment">发表评论</mt-button>
    <div class="comment-list">
      <div class="comment-item" v-for="(item,index) in message" :key='index'>
        <div class="comment-title">
          第{{ index + 1 }}楼&nbsp;&nbsp; 用户名:{{ item.user_name }}&nbsp;&nbsp; 发表时间:{{ item.add_time | dateFormat}}
        </div>
        <div class="comment-body">
          {{ item.content === 'undefined'? '此用户很懒，什么也没留下':item.content}}
        </div>
      </div>
    </div>
    <mt-button type='danger' size='large' plain @click='getmore'>加载更多</mt-button>
    <br>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  props:['id'],
  data:function(){
    return {
      message:[],
      paegeIndex:1,
      commentContent:''
    }
  },
  methods:{
    // 获取评论
    getcomments(){
      this.$http.get('api/getcomments/'+ this.id +'?pageindex='+this.paegeIndex)
      .then(function(data){
        if(data.body.status === 0){
          this.message =  this.message.concat(data.body.message);
        }else {
          Toast("获取数据失败")
        }
      })
    },
    // 加载更多
    getmore(){
      this.paegeIndex += 1;
      this.getcomments();
    },
    // 发表评论
    carryComment(){
      if(this.commentContent.trim() === "") {

       Toast("评论内容不能为空!");
       this.commentContent = '';
       return ;
      }else{
        this.$http.post('api/postcomment/'+this.id,{content:this.commentContent})
      .then(function(data){
        if(data.body.status === 0){
          this.message.unshift({ user_name:"hello", add_time:new Date(),content:this.commentContent });
          this.commentContent = "";
          Toast("发表评论成功")
        this.getcomments();
        }else {
          Toast("发表评论失败!")
        }
      })
      }

    }
  },
  created:function(){
    this.getcomments()
  }
}
</script>

<style lang="less" scoped>
.comment-container {
  .carry{
    font-size:18px;
  }
  textarea{
    box-shadow: 0 1px 7px rgba(0,0,0,0.2);
    margin:0;
    font-size: 12px;
    height:100px;
    border-radius:6px;
  }
  .comment-list{
    margin: 5px 0;
    .comment-item {
      .comment-title {
        font-size:12px;
        background-color: #ccc;
        padding: 3px 0;
      }
      .comment-body{
        font-size:12px;
        margin:5px 0;
        text-indent: 1em;
      }
    }
  }
}
</style>
