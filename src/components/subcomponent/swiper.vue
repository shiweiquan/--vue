<template>
  <div>
     <mt-swipe :auto="time||0">
      <mt-swipe-item :key="item.id" v-for="item in imgList">
        <img :src="item.img" :class="{'full':isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list : this.imgList
    }
  },
  methods:{

  },
  created() {

  },
  props:['imgList',"time", "isfull"]
}
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 170px;
  .mint-swipe-item {
    text-align: center;
    img {
      height: 100%;
      // width:100%;
      max-width: 768px;
    }
  }
  .full{
    width:100%;
  }
}
</style>
