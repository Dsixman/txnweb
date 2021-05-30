<template>
  <div class="wrapper">
    <div class="size-content">
      <div class="size-title">
        内衣尺码
      </div>
      <van-row class="mt20">
        <van-col class="size-items" span="24">
            <van-button  @click="getprev('nosize')">均码</van-button>
        </van-col>
        <van-col class="size-items" span="24" @click="getprev('nosize')" >
          <van-button  @click="getprev('nosize')">  S</van-button>
        </van-col>
        <van-col class="size-items" span="24" >
          <van-button @click="getprev('nosize')">  M</van-button>
        </van-col>
        <van-col class="size-items" span="24" >
          <van-button  @click="getprev('nosize')">  L</van-button>
        </van-col>
        <van-col class="size-items" span="24" >
          <van-button @click="getprev('nosize')">  XL</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  //import Bottom from '@/components/Bottom.vue'
  data(){
    return {

    }
  },

  computed:{

  },
  methods: {
    getprev(value){
      this.$store.dispatch('commitprevurl',value)
      this.$router.push('/fitbar')

    }
  }
}
</script>

<style lang="scss" scoped>
.mt20{
  margin-top:20px;
}
.wrapper{
  .size-content{
    width:80%;
    margin:30px auto 0 auto;
    box-sizing:content-box;
    .size-title{

      //border:1px solid #ff0000;
      font-size:1.2rem
    }
    .size-items{
      font-size:1 rem;
      height:15vh;
      button{
        width:100%;

      }
      button:hover{
        border:1px solid #ff0000;
      }
      // a:link,a:visited {
      //   font-size:1rem;
      //     width:100%;
      //     height:40px;
      //     display:block;
      //     margin:0 auto;
      //     border: 1px solid #ebedf0;
      //     border-radius: 2px;
      //     //padding:0 15px;
      //     line-height:39px;
      //     color:#000;
      //
      // }
      // a:hover,a:active{
      //   color:red;
      //   border:1px solid red;
      // }

    }

  }
}


</style>
