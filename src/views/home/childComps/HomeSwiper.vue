<template>
 <swiper>
        <swiper-item v-for="item in banners">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imageload">
          </a>
        </swiper-item>
      </swiper>
</template>

<script>

import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name:'HomeSwiper',
  props: {
    banners:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data () {
    return {
      isload :true  
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageload(){
      if (this.isload) {
        this.$emit('swiperimageload')
        this.isload = false
    }
      
    }
  }
}
</script>

<style>

</style>