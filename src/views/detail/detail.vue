<template>
  <div class="detail">
    <detailnavbar></detailnavbar>
    <detailswiper :detailtopimage="topimages"></detailswiper>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
  </div>
</template>

<script>
import detailnavbar from './childcompons/detailnavbar.vue'
import Detailswiper from './childcompons/detailswiper.vue'

import {getdetail,Goods,Shop} from 'network/detail.js'
import DetailBaseInfo from './childcompons/DetailBaseInfo.vue'
import DetailShopInfo from './childcompons/DetailShopInfo.vue'


export default {
  name:"detail",
  components: { detailnavbar, Detailswiper, DetailBaseInfo, DetailShopInfo },
  data () {
    return {
      iid:null,
      topimages:[],
      goods:{},
      shop:{}
    }
  },
  created () {
    // 保存传入的iid
    this.iid = this.$route.params.iid

    // 根据iid请求详情数据
    getdetail(this.iid).then(res =>{
      console.log(res);
      this.topimages = res.result.itemInfo.topImages

      // 获取商品信息
      const data = res.result;
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      // 获取店铺数据
      this.shop = new Shop(data.shopInfo)
    })
    }
  }

</script>

<style>

</style>