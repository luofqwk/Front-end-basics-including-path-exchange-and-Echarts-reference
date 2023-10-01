<template>

  <div class="back">
     <top4 />
    <right3 />
     <left3 />
  </div>
 </template>
<script>
import top4 from '../components/top4.vue'
import right3 from '../components/right3.vue'
import left3 from '../components/left3.vue'
export default {
  components: {
    top4,
    left3,
    right3
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
 </style>
