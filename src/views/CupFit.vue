<template>
  <div class="">
    <div class="cup-title">
      杯数是否合适
    </div>
    <div class="cup-content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" @click="savecupfit($event)"><span>压胸</span></div>
            <div class="swiper-slide" @click="savecupfit($event)"><span>稍微压胸</span></div>
            <div class="swiper-slide" @click="savecupfit($event)"><span>刚刚好</span></div>
            <div class="swiper-slide" @click="savecupfit($event)"><span>有些空杯</span></div>
            <div class="swiper-slide" @click="savecupfit($event)"><span>空杯</span></div>
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
    }
  },
  computed:{
    url:function(){
      let url2={prev:"",next:"",fatherobj:null}
      url2.prev="/fitbar"
      url2.next="/furu"
      //url2.whichtype=url.whichtype
      return url2
    }
  },
  components:{
    Bottom
  },
  mounted(){
    new Swiper('.swiper-container', {
       slidesPerView: 2,
       spaceBetween: 30,
       centeredSlides: true,
       loop: false,
     });
  },
  methods:{
    savecupfit(eve){
      this.url.fatherobj=eve.target.innerText
      console.log(eve.target.innerText)
      this.$store.dispatch("commitcupfit",eve.target.innerText)
      console.log("cupfit ")
      console.log(this.$store.state.cupfit)
    }
  },
}
</script>

<style lang="scss" scoped>
.cup-title{
  margin:20px auto 0 auto;
  height:140px;
    line-height:120px;
}
.swiper-container {

  margin-top:30px;

    width:70%;
    height: 400px;
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
    .swiper-slide:hover{
      border:1px solid #ff0000;
    }
    .swiper-wrapper{
      :nth-child(1){
        background:url('../assets/3-1.png') no-repeat 0% 0%;
      }
      :nth-child(2){
        background: url('../assets/3-1.png') no-repeat 0 0;
      }
      :nth-child(3){
        background: url('../assets/3-1.png') no-repeat 0% 0;
      }
      :nth-child(4){
        background: url('../assets/3-1.png') no-repeat 0% 0;
      }
      :nth-child(5){
        background: url('../assets/3-1.png') no-repeat 0% 0;
      }
      :nth-child(6){
        background: url('../assets/3-1.png') no-repeat 0% 0;
      }

    }
	.swiper-slide-active,.swiper-slide-duplicate-active{
    transform: scale(1);
	}

}
</style>
