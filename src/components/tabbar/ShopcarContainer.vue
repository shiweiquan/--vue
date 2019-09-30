<template>
  <div class="shopcar-container">
    <div class="shopcar-list">
      <div class="mui-card" v-for="(item,index) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              @change="statusChange(item.id)"
              v-model="$store.getters.getGoodsStatus[item.id]"
            ></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
              <h4 class="title">{{ item.title }}</h4>
              <p class="subtitle">
                <span class="price">￥{{ item.sell_price }}</span>
                <shopcarnumbox :count="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></shopcarnumbox>
                <a href="javascript:;" @click.prevent="remove(item.id, index)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg" alt="">
            <div class="info">
              <h4 class="title">华为（HUAWEI）荣耀6Plus 16G双4G版</h4>
              <p class="subtitle">
                <span class="price">￥2195</span>
                <shopcarnumbox></shopcarnumbox>
                <a href="javascript:;">删除</a>
              </p>
            </div>
					</div>
				</div>
      </div>-->
    </div>
    <div class="mui-card jiesuan">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="left">
            <p class="left_top">总计（不包含运费）</p>
            <p class="left_bottom">
              已勾选商品
              <span class="selectcount">{{ $store.getters.getselectcount }}</span>件，
              总价
              <span class="totalprice">￥{{ $store.getters.getTotalPrice }}</span>
            </p>
          </div>
          <div class="right">
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
    <!-- <p>{{ $store.getters.getGoodsStatus }}</p> -->
  </div>
</template>

<script>
import shopcarnumbox from "../subcomponent/shopcar_numbox.vue";
export default {
  data() {
    return {
      goodslist: []
    };
  },
  methods: {
    getGoodsList() {
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(parseInt(item.id)));
      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(function(res) {
          if (res.body.status === 0) {
            this.goodslist = res.body.message;
          }
        });
    },
    remove(id, i) {
      this.goodslist.some(item => {
        if (item.id === id) {
          this.goodslist.splice(i, 1);
        }
      });
      this.$store.commit("removeById", id);
    },
    statusChange(id) {
      this.$store.commit("changeStatus", id);
    }
  },
  created() {
    this.getGoodsList();
  },
  components: {
    shopcarnumbox
  }
};
</script>
<style lang="less">
.shopcar-container {
  overflow: hidden;
  .shopcar-list {
    position: absolute;
    top: 40px;
    width: 100%;
  padding-bottom: 133px;
    .mui-card {
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      padding: 10px 5px;
      margin: 10px 5px;
      .mui-card-content {
        .mui-card-content-inner {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 5px 0px;
          height: 80px;
          img {
            height: 60px;
          }
          .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title {
              font-size: 14px;
              // margin: 5px 0 10px 0;
            }
            .subtitle {
              display: flex;
              margin: 0;
              align-items: center;
              height: 24px;
              line-height: 24px;
              .price {
                color: red;
                font-size: 16px;
              }
              a {
                font-size: 12px;
              }
            }
          }
          .mint-switch {
            // margin-left:5px;
            .mint-switch-core {
              width: 44px;
              height: 24px;
              &::before {
                width: 42px;
                height: 22px;
              }
              &::after {
                width: 22px;
                height: 22px;
              }
            }
          }
        }
      }
    }
  }

  .mui-card {
    .mui-card-content-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .left {
      font-size: 12px;
      .selectcount,
      .totalprice {
        color: red;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
  .jiesuan {
    position: fixed;
    bottom: 40px;
    width: 100%;
    margin: 0;
    border-top:1px solid #ccc;
  }
}
</style>

