<template>
  <div class="wrapper">
    <div class="title-wrapper" >
      <div class="size-title">
        后背肩带是否合适？
      </div>
    </div>
    <div class="cup-content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" @click="savebackfit($event)"><span>很紧</span></div>
          <div class="swiper-slide" @click="savebackfit($event)"><span>比较紧</span></div>
          <div class="swiper-slide" @click="savebackfit($event)"><span>刚刚好</span></div>
          <div class="swiper-slide" @click="savebackfit($event)"><span>比较松</span></div>
          <div class="swiper-slide" @click="savebackfit($event)"><span>很松</span></div>
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
      url:{
        prev:"/fitbar",
        next:"/cupfit",
        nextbtn:true,
        fatherobj:null
      }
    }
  },
  computed:{


  },
  components:{
    Bottom
  },
  created(){
    document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
  },
  mounted(){
    new Swiper('.swiper-container', {
       slidesPerView: "auto",
       spaceBetween: 10,
       centeredSlides: true,
       loop: false,
     });
  },
  methods:{
    savebackfit(eve){
      this.url.fatherobj=eve.target.innerText

      this.$store.dispatch("commitbackfit",this.url.fatherobj)
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper{

}
.swiper-slide:hover{
  border:1px solid #ff0000;
    border-radius: 5px;
}
.title-wrapper{
  width:90%;margin:0px auto 0 auto;
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

.swiper-container {
  margin-top:0px;

    width:100%;
    height: 305px;
    .swiper-slide {
      height:302px;
      span{
       position:absolute;
       bottom:10px;
       padding:0px;
       margin:0px
      }
      text-align: center;

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

      div:nth-child(1){
        width:220px;
        background:url('../assets/hj1.png') no-repeat 0% 0%;
        background-size:100%
      }
      div:nth-child(2){
        width:220px;
        background: url('../assets/lj1.png') no-repeat 10% 0;
          background-size:100%
      }
      div:nth-child(3){
        width:220px;
        background: url('../assets/hs1.png') no-repeat 10% 0;
          background-size:100%
      }
      div:nth-child(4){
        width:220px;
        background: url('../assets/ls1.png') no-repeat 10% 0;
          background-size:100%
      }
      div:nth-child(5){
        width:220px;
        background: url('../assets/fcs1.png') no-repeat 10% 0;
          background-size:100%
      }

    }
	.swiper-slide-active,.swiper-slide-duplicate-active{
    transform: scale(1);
  //  border:1px solid #ff0000;
    border-radius: 5px;
    //  background-color: #fff1ce!important;
	}

}
</style>
