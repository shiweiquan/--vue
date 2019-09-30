<template>
  <div class="numbox-container">
    <div class="mui-numbox" data-numbox-min="1">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input class="mui-input-numbox" type="number" value='1' ref='numbox' @change = "countChanged">
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
      this.$emit('func',parseInt(this.$refs.numbox.value));
    }
  },
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
  display: inline-block;
.mui-numbox {
  width: 139px;
    height: 24px;
    // .mui-btn {
    // }
  }
}
  
</style>
