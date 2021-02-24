<template>
  <div class="toast" v-show="show">
    {{message}}
  </div>
</template>

<script>
export default {
  props: {
    message:{
      type:String,
      defualt:''
    },
    show:{
      type:Boolean,
      defualt:false
    }
  }
}
</script>

<style>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    color: white;
    transform: translate(-50%,-50%) ;
    padding: 8px 10px;
    background-color: rgba(0, 0, 0, 0.8);
  }
</style>