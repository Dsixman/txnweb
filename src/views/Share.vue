<template>
  <div class="share-wrapper">
    <div class="content">
      不敷衍的你<br>
      不是每个人都能理解 <br>
      因此无需告诉她人 <br>
      有甜小内这么一个好东西 <br>
      要告诉 <br>
      就告诉最好的闺蜜吧 <br>
      她肯定会很开心 <br>
      也许她也深受不合适文胸的困扰 <br>
      <br>
<span style="font-size:1rem;font-weight:bold">甜小内上市倒计时</span><br>
      <div class="clock">
        <div class="time-box">
          <div class="time-str">
            {{day}}天
          </div>
          <div class="time-str">
            {{hour}}时
          </div>
          <div class="time-str">
            {{minute}}分
          </div>
          <div class="time-str">
            {{second}}秒
          </div>
        </div>

      </div>

    </div>

    <HomeBottom></HomeBottom>
  </div>
</template>

<script>
import HomeBottom from '@/components/HomeBottom.vue'
export default {
  data(){
    return{
      clock:null,
      day:'',
      hour:'',
      minute:'',
      second:''
    }
  },
  components:{
    HomeBottom
  },
  created(){
    setInterval(this.timedown, 1000);
  },
  mounted(){

  },
  methods:{
    timedown(){
        var oDateful = new Date('2021/09/01 0:0:0');
        var oDateNow = new Date();
        var total = parseInt((Date.parse(oDateful) -Date.parse(oDateNow)) / 1000);
        var d = parseInt(total / 86400);
        total %= 86400;
        var h = parseInt(total / 3600);
        total %= 3600;
        var m = parseInt(total / 60);
        var s = total % 60;
        this.day=''+d
        this.hour=''+h
        this.minute=''+m
        this.second=''+s
    }
  },

}
</script>

<style lang="css" scoped>
.share-wrapper{
  position:relative;
  height:100vh;
  overflow: auto;
  box-sizing: border-box;
}
.content{
  margin-top:100px;
  line-height:2rem;
  font-size:0.9rem;
  text-align: center;
}
.clock{
  box-sizing: border-box;
  width:65%;
  margin:0 auto;
}
.time-box{
  font-size: 1rem;
  font-weight: bold;
  height:50px;
  line-height:51px;
  border-radius: 10px;
  background:#fb9f8c;
}
.time-str{
  width:25%;
  float:left;
}
</style>
