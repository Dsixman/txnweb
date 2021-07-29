<template>
  <div class="personal-wrap">
    <router-view></router-view>
    <HomeBottom></HomeBottom>
  </div>
</template>

<script>
import HomeBottom from '@/components/HomeBottom.vue'
export default {
  data(){
      return {

      }
  },
  components:{
    HomeBottom,
  }
}
</script>

<style lang="scss" scoped>
.personal-wrap{
  background:url("../assets/psbg2.jpg") no-repeat top center;
  background-size:cover;
  box-sizing: border-box;
    position: relative;
    height: 100vh;
}

</style>
