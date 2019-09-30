<template>
  <div class="numbox-container">
    <div class="mui-numbox" data-numbox-min="1">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input class="mui-input-numbox" type="number" :value='count' @change="countChanged" ref='numbox'>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  props:['maxcount'],
  data(){
    return {}
  },
  methods:{
   countChanged(){
     this.$store.commit('updataGoodsInfo', {
       id:this.goodsid,
       count : this.$refs.numbox.value
     })
   }
  },
  props:['count','goodsid'],
  mounted() {
    mui.init();
    mui(".mui-numbox").numbox();
    // 
  },
  watch:{
    'maxcount':function(newVal, oldVal){
      mui(".mui-numbox").numbox().setOption('max',newVal);
    }
  }
}
</script>
<style lang="less" scoped>
.numbox-container{
  margin: 0 5px;
  display: inline-block;
.mui-numbox {
  width: 105px;
    height: 25px;
    padding: 0 30px 0;
    // .mui-btn {
    // }
  }
  .mui-numbox [class*=numbox-btn], .mui-numbox [class*=btn-numbox]{
    width:30px;
  }
}
  
</style>
