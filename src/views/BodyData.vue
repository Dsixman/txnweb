<template>
  <div class="per-wrap">


  <div class="" style="background:white;border-radius:10px;width:90%;margin:0 auto">
    <div class="body-title">
      测量结果
    </div>
    <div class="body-detials">
      上胸围：{{shangxiongwei}}
    </div>
    <div class="body-detials">
      下胸围：{{xiaxiongwei}}
    </div>
    <div class="body-detials">
      胸型：{{breastshape}}
    </div>
    <div class="body-detials">
      适合码数：{{txncup}}
    </div>

  </div>
</div>
</template>

<script>

export default {
  data(){
    return {

    }
  },
  created(){
  //  alert(this.$store.state.)
  },
  computed:{
    shangxiongwei:function(){
      return this.$store.state.personaldata.user_avg_sxw
    },
    xiaxiongwei:function(){
      let xxw=(this.$store.state.personaldata.user_huxi_width+this.$store.state.personaldata.user_tuqi_width)*100/200
      return xxw
    },
    breastshape:function(){
      return this.$store.state.personaldata.user_breast_shapes
    },
    txncup:function(){
      return this.$store.state.personaldata.user_txncup
    }
  }
}
</script>

<style lang="scss" scoped>
.body-title{
  height:50px;
  font-size:1.2rem;
}
.body-detials{
  height:35px;
  boder-bottom:1px solid grey;
  line-height:35px;
}
// .per-wrap{
//   background:url('../assets/psbg.jpg');
//   height:75vh;
// }
</style>
