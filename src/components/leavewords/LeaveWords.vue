<template>
  <div class="leavewords-container">
    <div id="feedback" class="mui-page feedback">
			<div class="mui-navbar-inner mui-bar mui-bar-nav">
				<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
					<span class="mui-icon mui-icon-left-nav"></span>设置
				</button>
				<h1 class="mui-center mui-title">问题反馈</h1>
			</div>
			<div class="mui-page-content">
				<p>问题和意见</p>
				<div class="row mui-input-row">
					<textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
				</div>
				<p>图片(选填,提供问题截图)</p>
				<div id='image-list' class="row image-list">
				</div>
				<p>QQ/邮箱</p>
				<div class="mui-input-row">
					<input id='contact' type="text" class="mui-input-clear  contact" placeholder="(选填,方便我们联系你 )" />
				</div>
				<button id='submit' type="button" class="mui-btn mui-btn-green">提交</button>
			</div>
			<p>此示例基于环信 “WebIM SDK” + 环信 “移动客服” 实现，在环信 “移动客服面板” 能够查阅反馈信息。</p>
		</div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data(){
    return {
      message : ''
    }
  },
  methods:{
    
    sendMessage(){
      if(!this.message) return ;
      Toast("发送成功")
      this.message = "";
    }
  }
};
</script>

<style lang="less" scoped>
.leavewords-container {
  margin-top: 30px;
  padding: 5px;
  .leavewords-group {
    margin:0;
    #textarea {
      margin: 0;
      // padding:0;
      border-radius: 6px;
      box-shadow: 0 0 5px  rgba(0,0,0,.3);
    }
  }
}
</style>