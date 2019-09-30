<template>
  <div class="goods-info">
    <transition
      @@before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="flag" ref='ball'></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner goods-img">
          <swiper :imgList="imgList" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header title">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            <span class="old">
              市场价:
              <i>￥{{ goodsinfo.market_price }}</i>
            </span>
            <span class="now">
              销售价:
              <i>￥{{ goodsinfo.sell_price }}</i>
            </span>
          </p>
          <p class="count">
            <span>购买数量:
              <numbox :maxcount="goodsinfo.stock_quantity" @func='getselectCount'></numbox>
            </span>
          </p>
          <div class="button">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="goods-num">商品货号 : {{ goodsinfo.goods_no }}</p>
          <p class="goods-leave">库存情况: {{ goodsinfo.stock_quantity }} 件</p>
          <p class="goods-add_time">上架时间: {{ goodsinfo.add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="getdesc">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="getcomment">商品评价</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import numbox from "../subcomponent/goodsinfo_numbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      imgList: [],
      goodsinfo: {},
      flag: false,
      selectCount:1
    };
  },
  methods: {
    // 获取轮播图数据
    getlunbo() {
      this.$http.get("api/getthumimages/" + this.id).then(function(res) {
        if (res.body.status === 0) {
          res.body.message.forEach(item => {
            item.img = item.src;
          });
          this.imgList = res.body.message;
        }
      });
    },
    // 获取详情
    getinfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(function(res) {
        if (res.body.status === 0) {
          this.goodsinfo = res.body.message[0];
        }
      });
    },
    // 跳转到图文详情组件
    getdesc() {
      this.$router.push({ path: "/home/getdesc/" + this.id });
    },
    // 跳转到评论组件
    getcomment() {
      this.$router.push({ path: "/home/getcomment/" + this.id });
    },
    // 添加到购物车
    addToShopCar() {
      this.flag = !this.flag;
    // { id: this.id , count :  this.selectCount, price: this.goodsinfo.sell_price, flag: false}
    var goodsinfo = { id:parseInt(this.id), count: this.selectCount, price: this.goodsinfo.sell_price, title:this.goodsinfo.title, selected : true };
    this.$store.commit('addToCar',goodsinfo);
    },
    // 动画钩子函数
    beforeEnter: (el) => {
      el.style.transform = 'translate(0,0)';
    },
    enter(el,done){
      el.offsetWidth;
      // 获取小球在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取徽标在页面中的位置
      const badgePosition = document.getElementById('badge').getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left ;
      const yDist = badgePosition.top - ballPosition.top;
      // 动画完成后的样式
      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      // 动画的持续时间
      // el.style.transition = "all 0.8s cubic-bezier(.38,.57,.35,-0.59)";
      el.style.transition = "all 0.8s ease";

      // done 其实是 afterEnter() 的引用
      done();
    },
    afterEnter(el){
      this.flag = !this.flag;
    },
    // 获取购买 的数量
    getselectCount(count){
      this.selectCount = count;
    }
  },
  components: {
    numbox
  },
  created() {
    this.getlunbo();
    this.getinfo();
  }
};
</script>
<style lang="less" scoped>
.goods-info {
  background-color: #eee;
  overflow: hidden;
  .title {
    color: #078bdf;
    font-weight: 700;
  }
  .price {
    font-size: 12px;
    color: #333;
    i {
      margin-left: 5px;
      font-style: normal;
    }
    .now {
      margin-left: 10px;
      i {
        font-size: 15px;
        color: red;
        font-weight: 700;
      }
    }
    .old {
      i {
        text-decoration: line-through;
      }
    }
  }
  .ball {
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    left: 151px;
    top: 375px;
    z-index: 99;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
}
</style>
