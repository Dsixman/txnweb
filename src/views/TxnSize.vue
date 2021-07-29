<template>
  <div class="size">
    <div class="title-wrapper" >
      <div class="size-title">
        穿的是他们家的什么码数？
      </div>
      <div class="clear">
      </div>
    </div>

      <div class="size-content">
        <van-row  type="flex" justify="space-between">
          <van-col v-bind:class="{ active: bandActive, noactive:cupActive}" class="band-title" span="11" id="band-title" @click="changeBandActive">{{band}}</van-col>
          <van-col class="cup-title" span="11" id="cup-title"  v-bind:class="{ active: cupActive, noactive:bandActive}"  @click="changeCupActive">{{cup}}</van-col>
        </van-row>
        <van-row  class="band-content" type="flex" justify="space-between" v-show="bandShow">
          <div class="band-items">
            <van-col span="24" class="">
              <van-button  type="default" @click="tocup(60)">60</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24" >
              <van-button  type="default" @click="tocup(65)">65</van-button>
            </van-col>
          </div>

          <div class="band-items">
            <van-col span="24" >
              <van-button  type="default" @click="tocup(70)">70</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="tocup(75)">75</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="tocup(80)">80</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="tocup(85)">85</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="tocup(90)">90</van-button>
            </van-col>
          </div>

        </van-row>
        <van-row v-show="cupShow" class="cup-content" type="flex" justify="space-between" >
          <van-col span="24" class="band-items">
            <van-button type="default" @click="isToNext('AA1')">AA1</van-button>
          </van-col>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('AA2')">AA2</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('A1')">A1</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('A2')">A2</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('B1')">B1</van-button>
            </van-col >
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('B2')">B2</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('C1')">C1</van-button>
            </van-col >
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('C2')">C2</van-button>
            </van-col >
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('D1')">D1</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('D2')">D2</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('E1')">E1</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('E2')">E2</van-button>
            </van-col>
          </div>
          <div class="" style="padding:50px">

          </div>
        </van-row>

      </div>
        <Bottom :url="url"></Bottom>

  </div>

</template>

<script>
import Bottom from '@/components/HadSizeBottom.vue'
export default {
  data(){
    return{
      url:{
        prev:"/brandchoice",
        next:""
      },
      bandActive:true,
      cupActive:false,
      bandShow:true,
      cupShow:false,
      bandandcup:{band:"",cup:""},
      band:"码数",
      cup:"罩杯"
    }
  },
  created(){
    document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
  },
  mounted(){


  },
  computed:{
    // band:function(){
    //   let band=""
    //   console.log(this.$store.hadcupsize)
    //   if (this.$store.hadcupsize){
    //       band=this.$store.state.hadcupsize;
    //   }else{
    //       band="码数"
    //   }
    //   return band
    // },
    // cup:function(){
    //   let cup=""
    //   if (this.$store.state.hadcup){
    //       cup=this.$store.state.hadcup;
    //   }else{
    //       cup="杯号"
    //   }
    //   return cup
    // },
  },
  components:{
    Bottom,
  },
  methods:{
    // getprev(value){
    // },
    changeBandActive(){
      this.bandActive=true;
      this.cupActive=false;
      this.bandShow=true
      this.cupShow=false

    },
    changeCupActive(){
      this.cupActive=true;
      this.bandActive=false
      this.cupShow=true
      this.bandShow=false
    },
    tocup(value){
      this.cupActive=true;
      this.bandActive=false
      this.cupShow=true
      this.bandShow=false
      //console.log(value)
      this.band=value;
        this.$store.dispatch('commithadcupsize',value)
      if (this.bandandcup.band!=""&&this.bandandcup.cup!=""){
        //this.$store.dispatch('commithadsize',this.bandandcup)
        this.$router.push('/fitbar')
      }
      //this.$store.dispatch('commitprevurl','hadsize')

    },
    isToNext(value){
      this.bandandcup.cup=value
      this.cup=value
        this.$store.dispatch('commithadcup',value)
      if(this.hadcup!=""&&this.hadcupsizes!=""){
      //  this.$store.dispatch('commithadsize',this.bandandcup)
        this.$router.push('/fitbar')
      }
    }

  }
}
</script>

<style lang="scss" scoped>
// .hadsize-bottom{
//   width:80%;
//   overflow:auto;margin:20px auto 0 auto;
// }

.active{
  border-bottom:1px solid #ff0000;
}
.noactive{
  border-bottom: 1px solid #afafb1;
}
.hid{
  display: none;
}
.band-items{
  height:40px;
  margin-top:15px;
  //overflow: hidden;
  width: 100%;
  .van-button{
    height:35px;
    width:95%;
    border: 1px solid #afafb1;
  }
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
.size{
  height:100vh;
  //border:1px solid #ff0000;
  position:relative;

  .size-title{
    box-sizing: border-box;
    padding-top:25px;
    font-size:1rem;
    font-weight: bold;
    width:100%;
    margin:20px auto 20px auto;
    height:50px;
  }
  .size-content{
    width:70%;
    margin:0px auto 0 auto;
    button{
      width: 100%
    }
    button:hover,button:focus{
      border:1px solid #ff0000;
    }
    .band-title{

      font-size:0.8rem;
    }

    .cup-title{

      font-size:0.8rem;
    }

    .band-content{
      width:100%;
      margin-top:30px;

    }
    .cup-content{
      width:100%;
      margin-top:30px;
    }
  }
}
</style>
