<template>
  <div id="app" >
    <router-view />
  </div>
</template>
<script>
  export default{

    data(){
      return {
        code:null,
      }
    },
    components:{

    },
    computed:{

    },
    beforeCreated(){

    },
    methods:{

    },
    created(){
      document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
    },
    mounted(){
      document.getElementsByTagName("body")[0].className="bodybg"

    },
    updated(){

    }
  }
</script>
<style lang="scss">

@media only screen and (min-width:480px){
  #app{
    width:480px;
    margin:0 auto;
    font-size:0.8rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;

  }
}
@media only screen and (max-width:480px) {

  #app {
    width:100%;
    font-size:0.8rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    position: relative;
    color: #2c3e50;

  }
}
.bodybg{background:#fff0f0;overflow-y:auto;}
</style>
