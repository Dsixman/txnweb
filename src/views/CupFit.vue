<template>
  <div class="">
    <div class="title-wrapper" >
      <div class="size-title">
        刚买时，是否感觉空杯或者压胸？
      </div>
    </div>
    <div class="cup-content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" @click="savecupfit($event,1)" :class="{slideSelect:select1}"><span>压胸</span></div>
            <div class="swiper-slide" @click="savecupfit($event,2)" :class="{slideSelect:select2}"><span>稍微压胸</span></div>
            <div class="swiper-slide" @click="savecupfit($event,3)" :class="{slideSelect:select3}"><span>刚刚好</span></div>
            <div class="swiper-slide" @click="savecupfit($event,4)" :class="{slideSelect:select4}"><span>有些空杯</span></div>
            <div class="swiper-slide" @click="savecupfit($event,5)" :class="{slideSelect:select5}"><span>空杯</span></div>
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
      select1:false,
      select2:false,
      select3:false,
      select4:false,
      select5:false,
    }
  },
  created(){
    document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
  },
  computed:{
    url:function(){
      let url2={prev:"",next:"",fatherobj:null}
      url2.prev="/backfit"
      url2.next="/furu"
      url2.nextbtn=true
      return url2
    }
  },
  components:{
    Bottom
  },
  methods:{
    savecupfit(e,id){
      let text=e.target.innerText;
      this.url.fatherobj=text
      this.$store.dispatch('commitcupfit',text)
      if(id===1){
        this.select1=true
        this.select2=false
        this.select3=false
        this.select4=false
        this.select5=false
      }
      if(id===2){
        this.select1=false
        this.select2=true
        this.select3=false
        this.select4=false
        this.select5=false
      }
      if(id===3){
        this.select1=false
        this.select2=false
        this.select3=true
        this.select4=false
        this.select5=false
      }
      if(id===4){
        this.select1=false
        this.select2=false
        this.select3=false
        this.select4=true
        this.select5=false
      }
      if(id==5){
        this.select1=false
        this.select2=false
        this.select3=false
        this.select4=false
        this.select5=true
      }
    }
  },
  mounted(){
    new Swiper('.swiper-container', {
       slidesPerView: "auto",
       spaceBetween: 10,
       centeredSlides: true,
       loop: false,
     });
  },
  // beforeDestroy(){
  //   let text=this.$el.getElementsByClassName("swiper-slide swiper-slide-active")[0].innerText
  //   this.$store.dispatch("commitcupfit",text)
  // },



}
</script>

<style lang="scss" scoped>
.size-title{
  box-sizing: border-box;
  padding-top:50px;
  font-size:1rem;
  font-weight: bold;
  width:100%;
  margin:0px auto 0px auto;
  height:120px;
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
.slideSelect{
  border:2px solid #ff0000;
    transform: scale(1)!important;
}
.swiper-container {
  margin-top:0px;
    width:95%;
    height: 62vh;
    .swiper-slide {
    height: 302px;
      span{
       position:absolute;
       bottom:10px;
       padding:0px;
       margin:0px
      }
      text-align: center;
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
        background:url('../assets/5315.png') no-repeat;
        background-size:100%
      }
      div:nth-child(2){
        width:220px;
        background: url('../assets/5314.png') no-repeat;
        background-size:100%
      }
      div:nth-child(3){
        width:220px;
        background: url('../assets/5318.png') no-repeat;
        background-size:100%
      }
      div:nth-child(4){
        width:220px;
        background: url('../assets/5316kb.png') no-repeat;
        background-size:100%
      }
      div:nth-child(5){
        width:220px;
        background: url('../assets/5317.png') no-repeat;
        background-size:100%
      }


    }
	.swiper-slide-active,.swiper-slide-duplicate-active{
    border-radius: 5px;
    transform: scale(1);
	}

}
</style>
