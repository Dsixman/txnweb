<template>
<div class="shapes-wrapper">
  <div class="title-wrapper" >
    <div class="size-title">
      请选择和您最接近的胸型哦？
    </div>
  </div>

  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" @click="saveshapes($event,1)" :class="{slideSelect:select1}"><span>圆盘型</span></div>
        <div class="swiper-slide" @click="saveshapes($event,2)" :class="{slideSelect:select2}"><span>圆锥型</span></div>
        <div class="swiper-slide" @click="saveshapes($event,3)" :class="{slideSelect:select3}"><span>半球型</span></div>
        <div class="swiper-slide" @click="saveshapes($event,4)" :class="{slideSelect:select4}"><span>纺锤型</span></div>
        <div class="swiper-slide" @click="saveshapes($event,5)" :class="{slideSelect:select5}"><span>水滴型</span></div>
        <div class="swiper-slide" @click="saveshapes($event,6)" :class="{slideSelect:select6}"><span>木瓜型</span></div>
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
      wk:"",
      select1:false,
      select2:false,
      select3:false,
      select4:false,
      select5:false,
      select6:false,
    }
  },
  created(){

    document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
  },
  components:{
    Bottom
  },
  methods:{
    saveshapes(e,id){
      let text=e.target.innerText;
      this.url.fatherobj=text
      this.$store.dispatch('commitchestshapes',text)
      if(id===1){
        this.select1=true
        this.select2=false
        this.select3=false
        this.select4=false
        this.select5=false
        this.select6=false
        this.select7=false
      }
      if(id===2){
        this.select1=false
        this.select2=true
        this.select3=false
        this.select4=false
        this.select5=false
        this.select6=false
        this.select7=false
      }
      if(id===3){
        this.select1=false
        this.select2=false
        this.select3=true
        this.select4=false
        this.select5=false
        this.select6=false
        this.select7=false
      }
      if(id===4){
        this.select1=false
        this.select2=false
        this.select3=false
        this.select4=true
        this.select5=false
        this.select6=false
        this.select7=false
      }
      if(id===5){
        this.select1=false
        this.select2=false
        this.select3=false
        this.select4=false
        this.select5=true
        this.select6=false
        this.select7=false
      }
      if(id===6){
        this.select1=false
        this.select2=false
        this.select3=false
        this.select4=false
        this.select5=false
        this.select6=true
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
.slideSelect{
  border:2px solid #ff0000;
  transform: scale(1)!important;
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
    width:100%;
    height: 62vh;
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
    transform: scale(1)!important;
    border-radius: 5px;
	}

}
</style>
