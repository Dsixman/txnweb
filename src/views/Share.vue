<template>
  <div class="share-wrapper">
    <div class="content">
      不敷衍的你<br>
      不是每个人都能理解 <br>
      因此无需告诉她人 <br>
      有甜小内这么一个好东西 <br>
      要告诉 <br>
      就告诉最好的闺蜜吧 <br>
      她肯定会很开心 <br>
      也许她也深受不合适文胸的困扰 <br>
    </div>

    <HomeBottom></HomeBottom>
  </div>
</template>

<script>
import HomeBottom from '@/components/HomeBottom.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    HomeBottom
  }
}
</script>

<style lang="css" scoped>
.share-wrapper{
  position:relative;
  height:100vh;
  overflow: auto;
  box-sizing: border-box;
}
.content{
  margin-top:100px;
  line-height:2rem;
  font-size:0.9rem;
  text-align: center;
}
</style>
