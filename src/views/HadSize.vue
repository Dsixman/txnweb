<template>
  <div class="size">
    <div class="size-title" style="">
      请选择你现在穿的尺码
    </div>
    <div class="" style="margin:0px;padding:0px">
      <div class="size-content" style="border:1px solid #ff0000">
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
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('AA')">AA</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('A')">A</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('1.5A')">1.5A</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('B')">B</van-button>
            </van-col >
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('1.5B')">1.5B</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('C')">C</van-button>
            </van-col >
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('1.5C')">1.5C</van-button>
            </van-col >
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('D')">D</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('1.5D')">1.5D</van-button>
            </van-col>
          </div>
          <div class="band-items">
            <van-col span="24">
              <van-button type="default" @click="isToNext('E')">E</van-button>
            </van-col>
          </div>
        </van-row>

      </div>
        <Bottom :url="url"></Bottom>
    </div>
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
      band:"码数",
      cup:"杯号",
      bandandcup:{band:"",cup:""}

    }
  },
  mounted(){


  },
  computed:{

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
      this.band=value;
      this.bandandcup.band=""+value
      if (this.bandandcup.band!=""&&this.bandandcup.cup!=""){
        this.$store.dispatch('commithadsize',this.bandandcup)
        this.$router.push('fitbar')
      }
      //this.$store.dispatch('commitprevurl','hadsize')

    },
    isToNext(value){
      this.cup=value
      if(this.band!="码数"){
        this.$store.dispatch('commithadsize',this.bandandcup)
        this.$router.push('fitbar')
          this.$router.push('/fitbar')
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.hadsize-bottom{
  width:80%;overflow:auto;margin:20px auto 0 auto;
}
.active{
  border-bottom:1px solid #ff0000;
}
.noactive{
  border-bottom:1px solid #ebedf0;
}
.hid{
  display: none;
}
.band-items{
  height:45px;
  margin-top:15px;
  //overflow: hidden;
  width: 100%;
}
.size{
  height:100vh;
  //border:1px solid #ff0000;
  position:relative;
  .size-title{
    line-height:120px;
    font-size:1.2rem;
    width:80%;
    margin:20px auto 0 auto;
    height:140px;
  }
  .size-content{
    width:80%;
    margin:30px auto 0 auto;
    button{
      width: 100%
    }
    button:hover{
      border:1px solid #ff0000;

    }
    .band-title{
    //  border-bottom:1px solid #ebedf0;
      font-size:1rem;
    }

    .cup-title{
      //border-bottom:1px solid #ebedf0;
      font-size:0.9rem;
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
