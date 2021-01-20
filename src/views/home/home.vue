<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" 
                    ref="scroll" 
                    :probeType = "3" 
                    @scroll="contentscroll"
                    :pull-up-load = "true"
                    @pullingUp = "loadmore">
      <home-swiper :banners="banners" @swiperimageload ="swiperimageload"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control @tabclick="tabclick"
                    :titles="['流行','新款','精选']"
                    ref = "tabControl"
                    />
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top  @click.native="backclick" v-show="isshowscroll"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import {getHomeMultidata,getHomeGoods} from 'network/home'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from '../../components/common/backtop/BackTop.vue'

export default {
  name:'home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    getHomeGoods,
    GoodsList,
    Scroll,
    BackTop,
  },
  data () {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isshowscroll:false,
      tabOffsetTop :0,
      
    }
  },
  created () {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

    
  },
  mounted () {
    const refresh = this.debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('itemimageload',() =>{
      refresh()
    })
    
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods: {
    tabclick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
        break
      }
    },
    backclick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    contentscroll(position){
      // console.log(position);
      this.isshowscroll = -(position.y) > 1500
    },
    loadmore(){
      this.getHomeGoods(this.currentType)

      this.$refs.scroll.scroll.refresh()
    },
    debounce(func,delay){
      let timer = null
      return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this,args)
        }, delay);
      }
    },
    swiperimageload(){
      this.tabOffsetTop =  this.$refs.tabControl.$el.offsetTop
    },
    // 网络请求方法
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
      // console.log(res);
      this.banners= res.data.banner.list;
      this.recommends= res.data.recommend.list;
    })
    },

    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res =>{
      // console.log(res);
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page + 1

      this.$refs.scroll.finishPullUp()
    })
    }
  }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>