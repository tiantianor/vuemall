<template>
  <div id="details">
    <detailnavbar class="detail-navbar" @titleclick="titleclick" ref="nav"/>
    <scroll class="content" ref="scroll" :probeType='3' @scroll="contentscroll">
      <detailswiper :detailtopimage="topimages"></detailswiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <!-- <detail-goods-info :detail-info ="detailInfo" @detailimageload="detailimageload"/> -->
      <detail-params-info ref="params" :paramInfo="paramInfo"/>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"/>
      <goods-list ref="goods" :goods="recommend" />
    </scroll>
     <back-top  @click.native="backclick" v-show="isshowscroll"/>
    <detail-bottom-bar @addtocart="addtocart"/>
    <toast :message="message" :show="show"/>
  </div>
</template>

<script>

import detailnavbar from './childcompons/detailnavbar.vue'
import Detailswiper from './childcompons/detailswiper.vue'


import DetailBaseInfo from './childcompons/DetailBaseInfo.vue'
import DetailShopInfo from './childcompons/DetailShopInfo.vue'
// import DetailGoodsInfo from './childcompons/DetailGoodsInfo.vue'
import DetailParamsInfo from './childcompons/DetailParamsInfo.vue'
import DetailCommentInfo from './childcompons/DetailCommentInfo.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import BackTop from '../../components/common/backtop/BackTop.vue'



import Scroll from 'components/common/scroll/Scroll.vue'

import {debounce} from 'common/utils'


import {getdetail,getRecommend,Goods,Shop,GoodsParams} from 'network/detail.js'
import DetailBottomBar from './childcompons/DetailBottomBar.vue'
import Toast from '../../components/common/toast/Toast.vue'

export default {
  name:"detail",
  components: { 
    detailnavbar,
    Detailswiper, 
    DetailBaseInfo, 
    DetailShopInfo, 
    // DetailGoodsInfo, 
    Scroll, 
    DetailParamsInfo, 
    DetailCommentInfo, 
    GoodsList,
    DetailBottomBar ,
    BackTop,
    Toast,
  },
    
  data () {
    return {
      iid:null,
      topimages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommend:[],
      itemimagelister:null,
      newrefresh:null,
      themetopYs:[],
      currentIndex:0,
      isshowscroll:false,
      message:'',
      show:false
    }
  },
  created () {
    this.iid = this.$route.params.iid

    this.getdetaildata(),
    this.getRecommenddata()
    },
    mounted () {
      // 防抖操作
    const refresh =debounce(this.$refs.scroll.refresh,100)

    this.itemimagelister = () =>{
      refresh()
    }
    this.$bus.$on('itemimageload',this.itemimagelister)
    },
  methods: {
    getdetaildata(){
    // 根据iid请求详情数据
    getdetail(this.iid).then(res =>{
      // console.log(res);
       const data = res.result;
      //  获取头部轮播图信息
      this.topimages = res.result.itemInfo.topImages

      // 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      // 获取店铺数据
      this.shop = new Shop(data.shopInfo)
      
      // 获取下面的图片展示数据
      this.detailInfo = data.detailInfo;

      // 获取尺寸数据
        this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule || {});

      // 获取评论数据
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0] || {};
        }  

      this.$nextTick(()=>{
        this.themetopYs = []
        this.themetopYs.push(0)
        this.themetopYs.push(this.$refs.params.$el.offsetTop)
        this.themetopYs.push(this.$refs.comment.$el.offsetTop)
        this.themetopYs.push(this.$refs.goods.$el.offsetTop)
        this.themetopYs.push(Number.MAX_VALUE)
      })


    })

    },
    titleclick(index){
      // console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themetopYs[index]-1,200)
    },
    contentscroll(position){
      // 获取Y值
      const positionY = -position.y
      let length = this.themetopYs.length
      // positionY与主题监测值对比
      for(let i = 0;i < length-1;i++){
        if (this.currentIndex != i && positionY > this.themetopYs[i] && positionY< this.themetopYs[i+1]) {
          this.currentIndex = i,
          this.$refs.nav.currentindex = this.currentIndex
        }
        // if (this.currentIndex != i &&((i<length - 1 && positionY>this.themetopYs[i] && positionY<this.themetopYs[i+1]) || (i === length-1 && positionY>this.themetopYs[i]))) {
        //   this.currentIndex = i,
        //   // console.log(this.currentIndex);
        //   this.$refs.nav.currentindex = this.currentIndex
        // }
      }

      this.isshowscroll = -(position.y) > 1500

    },
    backclick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    getRecommenddata(){
      // 保存传入的推荐
      getRecommend().then(res =>{
      // console.log(res);
      this.recommend = res.data.list
      
    })
    },

    detailimageload(){
      this.$refs.scroll.refresh()
      // console.log('======');
    },
    addtocart(){
      const product = {}
      product.images = this.topimages[0],
      product.title = this.goods.title,
      product.desc = this.goods.desc,
      product.price = this.goods.realPrice,
      product.iid = this.iid,
      // console.log(product);

      this.$store.dispatch('addCart',product).then(res => {
        this.show = true,
        this.message = res,
        setTimeout(() => {
          this.show = false,
          this.message = ''
        }, 1500);
      })

    }
  },
  destroyed () {
    this.$bus.$off('itemImgLoad',this.itemimagelister)
  }
  
  }

</script>

<style scoped>
  #details{
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }
  .content{
    position: absolute;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
  .detailnavbar{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  /* .backtop{
    bottom: 58px;
  } */
</style>