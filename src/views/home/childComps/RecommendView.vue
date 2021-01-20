<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-items">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    font-size: 12px;
    border-bottom: 10px solid #eee;
  }
  .recommend-items{
    flex:1;
  }
  .recommend-items img{
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
</style>