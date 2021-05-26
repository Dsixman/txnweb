<template>
  <div id="app">
    <van-col span="24" class="mt5">
      甜小内文胸尺码助手
    </van-col>
    <div class="test">
      <van-col span="24" class="app-test-img">
        <img src="@/assets/1.jpg" alt="">
      </van-col>
      <van-col  span="16" offset="4">
        <router-link to="/" span="24" class="app-test-home-a">推荐自测</router-link>
      </van-col>

    </div>
    <div class="test">
      <div class="app-test-img">
        <van-col span="24" class="app-test-img">
            <img src="@/assets/2.jpg" alt="">
        </van-col>
      </div>
      <van-col span="16" offset="4">
        <router-link to="/" span="24" class="app-test-home-a">智能测量</router-link>
      </van-col>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@media only screen and (max-width:480px) {
 .mt5{
   margin-top:10px
 }
  #app {
    font-size:1.4rem;
    width:100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .test{

    .app-test-home-a{
      color:white;
      font-size: 1.4rem;
      background:#dabcba;
      display: block;
      line-height: 3.5rem;
    }
    .app-test-img{}
  }
}
</style>
