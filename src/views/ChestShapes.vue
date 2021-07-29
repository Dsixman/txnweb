<template>
<div class="shapes-wrapper">
  <div class="title-wrapper" >
    <div class="size-title">
      请选择和您最接近的胸型哦？
    </div>
  </div>

  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" @click="saveshapes($event)"><span>圆盘型</span></div>
        <div class="swiper-slide" @click="saveshapes($event)"><span>圆锥型</span></div>
        <div class="swiper-slide" @click="saveshapes($event)"><span>半球型</span></div>
        <div class="swiper-slide" @click="saveshapes($event)"><span>纺锤型</span></div>
        <div class="swiper-slide" @click="saveshapes($event)"><span>水滴型</span></div>
        <div class="swiper-slide" @click="saveshapes($event)"><span>木瓜型</span></div>
        <div class="swiper-slide" @click="saveshapes($event)"><span>其他胸型</span></div>
    </div>
  </div>

  <Bottom :url="url"></Bottom>
</div>
</template>

<script>
import 'swiper/swiper-bundle.min.css'
import Swiper from 'swiper';
import Bottom from '@/components/Bottom.vue'
export default {
  data(){
    return{
      url:{
        prev:"/jixiong",
        next:"/wk",
        nextbtn:true,
        fatherobj:null
      },
      shape:"",
      wk:""
    }
  },
  created(){

    document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
  },
  components:{
    Bottom
  },
  methods:{
    saveshapes(eve){
      let shape=eve.target.innerText;
      this.shape=shape
      //let data={shape:shape}
      this.$store.dispatch("commitchestshapes",shape)
      this.url.fatherobj={shapes:shape}
    },
  },
  mounted(){
   new Swiper('.swiper-container', {
      slidesPerView: "auto",
      spaceBetween: 10,
      centeredSlides: true,
      loop: false,
    });
  }
}
</script>

<style lang="scss" scoped>
.title-wrapper{
  width:80%;margin:0px auto 0 auto;
}
.title-img{
  float:left;padding-top:20px
}
.clear{
  clear:both;
}
.size-title{
  box-sizing: border-box;
  padding-top:50px;
  font-size:1rem;
  font-weight: bold;
  width:100%;
  margin:0px auto 0px auto;
  height:120px;
}
.wk{
    padding-bottom:100px;
      .wk-img{
        height:100px;
        margin-top:20px;
      }
      .wk-title{
        margin-top:20px;

        button{
          width:100%
        }
      }
}
.van-button:focus{
  border:1px solid #ff0000;
}
.shapes-title{
  float:left;
  font-size:0.9rem;
  margin:20px auto 0 auto;
  height:120px;
    line-height:120px;
  width:100%;
  text-align:center;
}

.shapes-title2{
  font-size:0.9rem;
  height:70px;
    line-height:100px;
  width:100%;
  text-align:center;
}

.swiper-container {
  //margin-top:30px;

    width:100%;
    height: 402px;
    .swiper-slide {
      width:220px;
      height:400px;
      span{
       position:absolute;
       bottom:10px;
       padding:0px;
       margin:0px
      }
      text-align: center;
      //font-size: 18px;
      //margin-top:50px;
      //background: #ff0000;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      transition: 300ms;
      transform: scale(0.8);
    }
    .swiper-slide:hover{
      border:1px solid #ff0000;
      border-radius: 5px;
    }
    .swiper-wrapper{
      div:nth-child(1){
        background:url('../assets/yp.png') no-repeat top center;
        background-size:80%
      }
      div:nth-child(2){
        background: url('../assets/yz.png') no-repeat top center;
        background-size:80%
      }
      div:nth-child(3){
        background: url('../assets/by2.png') no-repeat top center;
        background-size:80%
      }
      div:nth-child(4){
        background: url('../assets/fc1.png') no-repeat top center;
        background-size:80%
      }
      div:nth-child(5){
        background: url('../assets/xci.png') no-repeat top center;
        background-size:80%
      }
      div:nth-child(6){
        background: url('../assets/xc2.png') no-repeat top center;
        background-size:80%
      }
      div:nth-child(7){
        background: url('../assets/tnl.png') no-repeat center center;
        background-size:80%
      }


    }

	.swiper-slide-active,.swiper-slide-duplicate-active{
    transform: scale(1);
	}
  .swiper-slide:hover{
    border:1px solid #ff0000;
  }

}
</style>
