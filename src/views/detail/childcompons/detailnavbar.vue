<template>
  <div>
    <nav-bar>
      <div slot="left" class="back">
        <img src="~assets/img/common/back.svg" alt="" @click="backclick">
      </div>
       <div slot="center" class="title">
         <div v-for="(item,index) in titles" class="title-item"
                      :class="{active:currentindex === index}"
                      @click="titleclick(index)">{{item}}</div>
       </div>
     </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  components: { NavBar },
  data () {
    return {
      titles:['商品','参数','评论','推荐'],
      currentindex:0
    }
  },
  methods: {
    titleclick(index){
      this.currentindex = index
    },
    backclick(){
      this.$router.back()
    }
  }

}
</script>

<style>
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
    font-size: 13px;
  }
  .back img{
    margin-top: 10px;
  }
</style>