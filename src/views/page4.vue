<template>

<div class="back">
    <div class="top">
     <top4 />
    </div>
    <div class="right">
    <right4 />
  </div>
  <div class="left">
     <left4 />
    </div>
  </div>
 </template>
<script>
import top4 from '../components/top4.vue'
import left4 from '../components/left4.vue'
import right4 from '../components/right4.vue'
export default {
  components: {
    top4,
    left4,
    right4
  }
}
</script>
 <style scoped>
 .back{
       width:1920px;
       height:1080px;
       background-image:url('../assets/image/image4/back.png');
       position:relative;
       background-size:100% 100%;
     }
     .top{
  z-index:100;
  position:absolute;
  top:0;
  left:0;
     }
     .left{
      z-index:50;
      position:absolute;
  top:0;
  left:0;
     }
     .right{
      z-index:25;
      position:absolute;
  top:0;
  left:0;
     }
 </style>
