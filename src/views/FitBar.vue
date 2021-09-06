<template>
  <div class="">
    <div class="title-wrapper" >
      <div class="size-title">
          刚买时，肩带松紧情况如何？
      </div>
    </div>
    <div class="cup-content">
      <div class="swiper-container">
        <!-- <div class="swiper-wrapper" id="swiper-wrapper">
            <div class="swiper-slide"  @click="savefitbar($event,0)" :class="{slideSelect:select1}"><span>很紧</span></div>
            <div class="swiper-slide"  @click="savefitbar($event,1)" :class="{slideSelect:select2}"><span>稍微有些紧</span></div>
            <div class="swiper-slide"  @click="savefitbar($event,2)" :class="{slideSelect:select3}"><span>刚刚好</span></div>
            <div class="swiper-slide"  @click="savefitbar($event,3)" :class="{slideSelect:select4}"><span>稍微有些松</span></div>
            <div class="swiper-slide"  @click="savefitbar($event,4)" :class="{slideSelect:select5}"><span>很松</span></div>
        </div> -->
        <div class="swiper-wrapper" id="swiper-wrapper">
            <div class="swiper-slide"  @click="savefitbar($event,1)" :class="{slideSelect:select1}"><span>很紧</span></div>
            <div class="swiper-slide"  @click="savefitbar($event,2)" :class="{slideSelect:select2}"><span>稍微有些紧</span></div>
            <div class="swiper-slide"  @click="savefitbar($event,3)" :class="{slideSelect:select3}"><span>刚刚好</span></div>
            <div class="swiper-slide"  @click="savefitbar($event,4)" :class="{slideSelect:select4}"><span>稍微有些松</span></div>
            <div class="swiper-slide"  @click="savefitbar($event,5)" :class="{slideSelect:select5}"><span>很松</span></div>
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
      select1:false,
      select2:false,
      select3:false,
      select4:false,
      select5:false,
    }
  },
  computed:{
    url:function(){
      let url={prev:"",next:"",fatherobj:null}
      let url1=this.$store.state.nosize;
      let url2=this.$store.state.brand
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
    savefitbar(e,id){
      let text=e.target.innerText;
      this.url.fatherobj=text
      this.$store.dispatch('commitfitbar',text)
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


      // for(let i=0;i<=slidelistLen;i++){
      //   console.log(slidelist[i])
      //   if (i!==id){
      //     slidelist[i].style="border:0px"
      //   }else{
      //     slidelist[i].style="border:2px solid #ff0000"
      //   }
      // }
    }
  },
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
.slideSelect{
  border:2px solid #ff0000;
  transform: scale(1)!important;
}
.swiper-container {
  margin-top:0px;

    width:95%;
    height: 62vh;
    .swiper-slide {
      height:302px;
      box-sizing: border-box;
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
      span{
       position:absolute;
       bottom:10px;
       padding:0px;
       margin:0px
      }
    }
    .swiper-wrapper{

      div:nth-child(1){
        width:220px;
        background:url('../assets/53111.png') no-repeat;
        background-size:100%
      }
      div:nth-child(2){
        width:220px;
        background: url('../assets/53112.png') no-repeat;
          background-size:100%
      }
      div:nth-child(3){
        width:220px;
        background: url('../assets/jd2.png') no-repeat;
          background-size:100%
      }
      div:nth-child(4){
        width:220px;
        background: url('../assets/53114.png') no-repeat;
          background-size:100%
      }
      div:nth-child(5){
        width:220px;
        background: url('../assets/53116.png') no-repeat;
          background-size:100%
      }

    }
	.swiper-slide-active,.swiper-slide-duplicate-active{
    transform: scale(1)!important;
    border-radius: 5px;
	}

}
</style>
