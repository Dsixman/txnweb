<template>
  <div class="wrap">
    <div class="home">
      <van-col span="24" class="app-test-img">
        <img src="@/assets/1.jpg" alt="">
      </van-col>
      <van-col  span="16" offset="4">
        <router-link to="/brandchoice" span="24" class="app-test-home-a">推荐自测</router-link>
      </van-col>

    </div>
    <div class="home">
      <div class="app-test-img">
        <van-col span="24" class="app-test-img">
            <img src="@/assets/2.jpg" alt="">
        </van-col>
      </div>
      <van-col span="16" offset="4">
        <router-link to="/" span="24" class="app-test-home-a">智能测量</router-link>
      </van-col>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',

  components: {
    //HelloWorld
  }
}
</script>
<style lang="scss">
.home{

  .app-test-home-a{
    color:white;
    font-size: 1.4rem;
    background:#dabcba;
    display: block;
    line-height: 3.5rem;
  }
  .app-test-img{}
}
</style>
