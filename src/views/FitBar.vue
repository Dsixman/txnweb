<template>
  <div class="">
    <div class="cup-title">
      肩带是否合适
    </div>
    <div class="cup-content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" @click="savefitbar($event)"><span>很紧</span></div>
            <div class="swiper-slide" @click="savefitbar($event)"><span>稍微有些紧</span></div>
            <div class="swiper-slide" @click="savefitbar($event)"><span>刚刚好</span></div>
            <div class="swiper-slide" @click="savefitbar($event)"><span>稍微有些松</span></div>
            <div class="swiper-slide" @click="savefitbar($event)"><span>很松</span></div>
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
  data(){
    return {

    }
  },
  computed:{
    url:function(){
      let prev=this.$store.state.prevurl
      let url={prev:"",next:"",fatherobj:null}
      if (prev=="nosize"){
        url.prev='/nosize'
      }else{
        url.prev='/hadsize'
      }
      url.next='/cupfit'
      return url

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
    savefitbar(eve){
      this.url.fatherobj=eve.target.innerText

      this.$store.dispatch("commitfitbar",this.url.fatherobj)

      //console.log(this.url)
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
    .swiper-wrapper{
      :nth-child(1){
        background:url('../assets/ss.png') no-repeat 0% 0%;
      }
      :nth-child(2){
        background: url('../assets/ss.png') no-repeat 10% 0;
      }
      :nth-child(3){
        background: url('../assets/ss.png') no-repeat 10% 0;
      }
      :nth-child(4){
        background: url('../assets/ss.png') no-repeat 10% 0;
      }
      :nth-child(5){
        background: url('../assets/ss.png') no-repeat 10% 0;
      }
      :nth-child(6){
        background: url('../assets/ss.png') no-repeat 10% 0;
      }

    }
	.swiper-slide-active,.swiper-slide-duplicate-active{
    transform: scale(1);
	}

}
</style>
