<template>
  <div class="">
    <div class="title-wrapper" >
      <div class="size-title">
        肩带松紧情况如何？
      </div>
    </div>
    <div class="cup-content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"  @click="savefitbar($event)"><span>很紧</span></div>
            <div class="swiper-slide"   @click="savefitbar($event)"><span>稍微有些紧</span></div>
            <div class="swiper-slide"  @click="savefitbar($event)"><span>刚刚好</span></div>
            <div class="swiper-slide"   @click="savefitbar($event)"><span>稍微有些松</span></div>
            <div class="swiper-slide"  @click="savefitbar($event)"><span>很松</span></div>
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
    //  currentIndex:0
    }
  },
  computed:{
    url:function(){
      //let prev=this.$store.state.prevurl
      let url={prev:"",next:"",fatherobj:null}
      let url1=this.$store.state.nosize;
      let url2=this.$store.state.brand
//      let url2=this.$store.state.hadesize;
      if (url1){
        url.prev="/nosize"
      }else{
        if (url2=="甜小内"){
          url.prev="/txnsize"
        }else{
          url.prev="/hadsize"
        }
      }




      url.next='/backfit'
      url.nextbtn=true
      return url

    }
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
    savefitbar(eve){
      this.url.fatherobj=eve.target.innerText
    //  this.currentIndex=index
      this.$store.dispatch("commitfitbar",this.url.fatherobj)

    }
  },
}
</script>

<style lang="scss" scoped>
.swiper-slide:hover{
  border:1px solid #ff0000;
    border-radius: 5px;
}
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
        background:url('../assets/53111.png') no-repeat 0% 0%;
        background-size:100%
      }
      div:nth-child(2){
        width:220px;
        background: url('../assets/53112.png') no-repeat 10% 0;
          background-size:100%
      }
      div:nth-child(3){
        width:220px;
        background: url('../assets/jd2.png') no-repeat 10% 0;
          background-size:100%
      }
      div:nth-child(4){
        width:220px;
        background: url('../assets/53114.png') no-repeat 10% 0;
          background-size:100%
      }
      div:nth-child(5){
        width:220px;
        background: url('../assets/53116.png') no-repeat 10% 0;
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
