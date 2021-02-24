<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
     :class="{active:index === currentIndex}"
     @click="itemclick(index)"
    class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      currentIndex:0
    }
  },
  methods: {
    itemclick(index){
      this.currentIndex = index
      this.$emit('tabclick', index)
    }
  }
}
</script>

<style>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
  }
</style>