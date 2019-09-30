<template>
	<div class="app-container" ref="app">
		<!-- header 区域 -->
		<!-- <mt-header fixed title="品优购-Vue-项目"></mt-header> -->
		<mt-header  class="mtheader" title="品优购-Vue-项目">
			<span slot="left">
				<mt-button icon="back" @click="goBack" v-show="isShow">返回</mt-button>
			</span>
		</mt-header>
		<!-- routerView 区域 -->
		<transition mode="out-in">
			<router-view></router-view>
		</transition>
		<!-- tabBar区域 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item-swq">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/member" class="mui-tab-item-swq">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/shopcar" class="mui-tab-item-swq">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span id="badge" class="mui-badge">{{ $store.getters.getAllCount }}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item-swq">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>
<script>
export default {
	data(){
		return {
			isShow : false
		}
	},
	methods:{
		getData(){

		},
		goBack(){
			this.$router.go(-1)
		},
		getPath(){
			if(this.$route.path === '/home'){
				this.isShow = false;
			}else {
				this.isShow = true;
			}
		}
	},
	watch:{
		$route(now,old){
     if(now.path=="/home"){
            this.isShow=false;
     } else{
         this.isShow=true;
     }
    }
	},
	created(){
this.getPath()
	},
	mounted(){

	}
}
</script>
<style lang='less'>
body, html {
	background-color: #f0f0f0;
}
.ui-page-login,
body {
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
}
.mtheader{
	position: fixed;
	top:0;
	width:100%;
	left:0;
}
.mui-content{height: 100%;}
.app-container {
  overflow-x: hidden;
  padding-top: 40px;
  padding-bottom: 50px;
  .mint-header {
    z-index: 99;
  }
}
.v-enter {
  opacity: 0;
  transform: translatex(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translatex(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}
.mui-bar-tab .mui-tab-item-swq {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-swq .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-swq .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item-swq.mui-active {
  color: #007aff;
}
#nprogress {
 .bar {
  z-index: 15031;
 }
 .spinner {
  z-index: 15031;
 }
}
#nprogress .bar {
	background: lightgreen !important; //颜色可修改
	margin-top:40px;
}
</style>
