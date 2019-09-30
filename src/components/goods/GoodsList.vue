<template>
  <div class="goods-list">
   <div :to='"/home/goodsinfo/"+ item.id' class="goods-item" v-for="(item) in goodsList" :key='item.id' @click='goDetail(item.id)'>
     <div class="goods-img">
       <img :src="item.img_url" :alt="item.title" :title="item.title">
     </div>
      <h4 class="title">{{ item.title }}</h4>
      <div class="bottom">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{ item.stock_quantity }}件</span>
        </p>
      </div>
   </div>
   <mt-button @click='getMore' type='danger' size='large'>加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data:function(){
    return {
      goodsList :[],
      pageindex : 1,
      flag:true
    }
  },
  methods:{
    getGoodsList (){
      this.$http.get('api/getgoods?pageindex='+ this.pageindex)
      .then(function(res){
        if(res.body.status === 0){
          if(res.body.message.length === 0){
            Toast('没有更多的数据啦');
            this.flag = false;
            return ;
          }
          this.goodsList = this.goodsList.concat(res.body.message);
          this.flag = true;
        }
      })
    },
    getMore(){
     if(this.flag){
       this.pageindex ++;
       this.getGoodsList();
     }

    },
    goDetail(id){
      // 1. 最简单的方式
      // this.$router.push('/home/goodsinfo/'+ id);
      // 2. 传递对象
      // this.$router.push({ path:'/home/goodsinfo/'+id })
      // 3.命名路由
      this.$router.push({ name:'goodsinfo', params:{id} })
    }
  },
  created(){
    this.getGoodsList();
  }
}
</script>

<style lang="less" scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 8px;
    justify-content: space-between;
    .goods-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width:49%;
      margin-top:6px;
      padding:2px;
      min-height:307px;
      box-shadow:  0 0 3px rgba(0,0,0,.2);
      border-radius: 5px;
      .goods-img {
        img {
          width:100%;
        }
      }
      .title {
        font-size:14px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin:0;
      }
      .bottom {
        background-color: #eee;
        padding: 10px 0 3px;
       p {
         margin:0;
       }
       .price {
         .now {
           color:red;
           font-size:18px;
           font-weight: 400;
         }
         .old {
           text-decoration: line-through;
           margin-left: 10px;
           font-size: 12px;
         }
       }
       .sell {
         display: flex;
         justify-content: space-between;
         font-size: 12px;
         padding:0 10px;
       }
      }
    }
  }
</style>
