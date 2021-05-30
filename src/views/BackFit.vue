<template>
  <div class="">
    <div class="back-title">
      后背胸带是否合适
    </div>
    <div class="cup-content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="@/assets/wk.jpg" /><span>比较紧</span></div>
            <div class="swiper-slide"><img src="@/assets/wk.jpg" /><span>刚刚好</span></div>
            <div class="swiper-slide"><img src="@/assets/wk.jpg" /><span>比较松</span></div>
        </div>
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
  name:"cupfit",
  data(){
    return {
      url:{
        prev:"/jixiong",
        next:"/ChestMeasure"
      }
    }
  },
  computed:{

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
  },
  methods:{

  },
}
</script>

<style lang="scss" scoped>
.back-title{
  margin-top:30px;
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
      .swiper-slide{
        border:1px solid #ff0000;
      }
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
