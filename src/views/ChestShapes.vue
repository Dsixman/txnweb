<template>
<div class="shapes-wrapper">
  <div class="shapes-title">
    胸型选择
  </div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><span>圆盘型</span></div>
        <div class="swiper-slide"><span>圆锥型</span></div>
        <div class="swiper-slide"><span>纺锤型</span></div>
        <div class="swiper-slide"><span>下垂型</span></div>
        <div class="swiper-slide"><span>半球型</span></div>
    </div>
  </div>
  <div class="wk">
    <div class="">
      胸部是否外扩
    </div>

    <div class="wk-title">
      <van-row type="flex" justify="space-between" >
        <van-col span="10">
          <van-button type="default">
            是
          </van-button>
        </van-col>
        <van-col span="10">
          <van-button type="default">
            否
          </van-button>
        </van-col>
      </van-row>
    </div>
  </div>
  <Bottom :url="url"></Bottom>
</div>
</template>

<script>
import Bottom from '@/components/Bottom.vue'
import 'swiper/swiper-bundle.min.css'
import Swiper from 'swiper';
export default {
  data(){
    return{
      url:{
        prev:"/upchestmeasure",
        next:"/result"
      }
    }
  },
  components:{
    Bottom
  },
  mounted(){
   new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: false,
    });
  }
}
</script>

<style lang="scss" scoped>
.wk{
  margin-top:30px;
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
.shapes-title{
  font-size:1.2rem;
  margin:30px auto 0 auto;
  width:100%;
  text-align:center;
}
.swiper-container {
  margin-top:30px;

    width:70%;
    height: 250px;
    .swiper-slide {

      span{
       position:absolute;
       bottom:10px;
       padding:0px;
       margin:0px
      }
      text-align: center;
      font-size: 18px;
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
    .swiper-wrapper{
      :nth-child(1){
        background:url('../assets/xx.jpeg') no-repeat 0% 0%;
      }
      :nth-child(2){
        background: url('../assets/xx.jpeg') no-repeat 10% 0;
      }
      :nth-child(3){
        background: url('../assets/xx.jpeg') no-repeat 10% 0;
      }
      :nth-child(4){
        background: url('../assets/xx.jpeg') no-repeat 10% 0;
      }
      :nth-child(5){
        background: url('../assets/xx.jpeg') no-repeat 10% 0;
      }
      :nth-child(6){
        background: url('../assets/xx.jpeg') no-repeat 10% 0;
      }

    }
	.swiper-slide-active,.swiper-slide-duplicate-active{
    transform: scale(1);
	}

}
</style>
