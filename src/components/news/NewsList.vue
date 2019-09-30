<template>
  <div>
  <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in messages" :key="item.id">
					<router-link :to="'/home/newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h4>{{ item.title }}</h4>
							<p class='mui-ellipsis'>
                <span>发表时间:{{ item.add_time | dateFormat("YYYY-MM-DD")}}</span>
                <span>点击:{{ item.click }}次</span>
                </p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data:function(){
    return {
      messages:[]
    }
  },
  created(){
    this.getMessages()
  },
  methods:{
    getMessages(){
      this.$http.get('api/getnewslist')
      .then(function(data){
        if(data.body.status === 0){
          this.messages = data.body.message
        }else{
          Toast({
            message:"获取内容失败",
            position:'middle',
            duration:3000
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  .mui-media-body{
    h4{
      font-size:14px;
    }
    .mui-ellipsis{
      font-size:12px;
      display: flex;
      justify-content: space-between;
      color:#22aff0;
    }
  }
}
</style>
