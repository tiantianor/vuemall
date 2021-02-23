<template>
  <div>
    <swiper class="swiperstyle">
      <swiper-item v-for="(item,index) in detailtopimage" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'


export default {
  components: { Swiper, SwiperItem },
  props: {
    detailtopimage:{
      type:Array,
      return:{
        default(){
          return []
        }
      }
    }
  }

}
</script>

<style scoped>
  .swiperstyle{
    height: 300px;
    overflow: hidden;
  }
</style>