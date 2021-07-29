<template >
  <div class="wrapper">
    <div class="title-wrapper" >
      <div class="size-title">
        要先登录呦
      </div>
      <div class="clear">
      </div>
    </div>
    <!-- <van-icon name="phone" /> -->
    <div class="">
      <div class="login-input">

        <!-- <van-field input-align="center" id="phone" name="phone"  placeholder="请输入手机号码" v-model="phone" class="txn-input"></van-field>
        <span :class="{warn:isphoneenter}" v-if="isphoneenter">{{phoneTips}}</span> -->
        <div class="" style="border:1px solid #afafb1;border-radius:3px;">
          <van-icon name="phone" />
          <input type="text" name="" value="111" placeholder="请输入手机号码" style="border:none">
        </div>
      </div>
      <div class="login-input">
        <div class="login-captcha-left">
          <van-field input-align="center" name="captcha" id="captcha" placeholder="验证码" v-model="entercaptcha" class="txn-input" ></van-field>
        </div>

        <div class="login-captcha-right">
          <button type="button" name="button" id="yzm" @click="yzmfn">获取验证码</button>
        </div>
        <div class="clear">

        </div>
      <span v-if="iscapchaenter" :class="{warn:iscapchaenter}">{{catchaTips}}</span>
        <div class="clear">

        </div>
      </div>
      <div class="login-btn">
        <van-button @click="login">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  import {timeFormat} from '@/common/utils.js'
export default {

  data(){
    return {
      username: '',
      password: '',
      phone:"",
      entercaptcha:"",
      postcaptcha:"",
      active:2,
      phoneTips:"tips:请输入正确的手机号码",
      catchaTips:"tips:请输入正确的验证码",
      isphoneenter:false,
      iscapchaenter:false,
      phoneerr:null,
      captchaerr:null,
    }
  },
  created(){
    document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
  },
  computed:{

  },
  mounted(){

  },
  methods:{
    phoneformatter:function(){
      let str= /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!str.test(this.phone)) {
        this.isphoneenter=true;
      }else{
        this.isphoneenter=false
      }

    },
    captchaformatter:function(){
      let str= /^[0-9]{6}$/;
      if (!str.test(this.entercaptcha)) {
        this.iscaptchaenter=true;
      }
    },
    yzmfn:function(){
      if(!this.phone){
        this.isphoneenter=true
      }else{
        console.log("phone"+this.phone)
        this.phoneformatter()
      //  console.log(res)
        if (this.isphoneenter==false){

          let phone=document.getElementById("phone").value
          console.log("phone"+phone)
          if (phone){
            console.log("phone1"+phone)
            Vue.axios.post('https://www.tianxiaonei.com/wx/smscaptcha/index.php',{phone:phone})
              .then(data=>{
            console.log("phone2"+phone)
            console.log(data)
              this.postcaptcha=data.data.captcha;
              this.phoneerr=data.data
            }).catch(err=>{
              console.log(err)
              this.phoneerr=err
            })
          }
          var oBtn = document.getElementById("yzm");
          var time = 60;
          var timer = null
          oBtn.innerHTML = time + 's';
          oBtn.setAttribute('disabled', 'disabled');  // 禁用按钮
          oBtn.setAttribute('class', 'disabled');   // 添加class 按钮样式变灰
          timer = setInterval(function(){
            if(time == 1){
              clearInterval(timer);
              oBtn.innerHTML = '获取验证码';
              oBtn.removeAttribute('disabled');
              oBtn.removeAttribute('class');
            }else{
              time--;
              oBtn.innerHTML = time +"s";
            }
          }, 1000)
        }
      }


    },
    login:function(){
      //console.log("123")
      //alert(this.$store.state.opid)
      let time=timeFormat("yyyy-MM-dd HH:mm:ss");
      if (this.phone&&this.entercaptcha){
       if (this.postcaptcha==this.entercaptcha){
        //if (this.entercaptcha=="1234"){
         let post={phone:this.phone,wx_user_name:this.$store.state.nickname,wxicon:this.$store.state.usericon,openid:this.$store.state.opid,user_name:"",userid:"",sex:"",sign_up_time:time}
          Vue.axios.post('https://www.tianxiaonei.com/wx/gettoken/index.php',post)
          .then(data=>{
            let res=data.data

            if (typeof(res)=="string"){
              res=JSON.parse(res)
            }

            let token=res.token
            console.log(token)
            localStorage.setItem('x-token',token)
            let arr=token.split(".")
            let payload=arr[1]
            //alert(JSON.parse(atob(payload)).data)
            let userid=JSON.parse(atob(payload)).data.userid
            this.$store.dispatch('commitadduserid',userid)
            this.$store.dispatch('commitaddphone',res.phone)
            let url=this.$store.state.loginprevurl
          //  alert(url)
            if (url=="Personal"){
              this.$router.push({name:'Personal'})
            }else if(url=="BrandChoice"){
                this.$router.push({name:'BrandChoice'})
            }else{
              this.$router.push({name:'Home'})
            }
          }).catch(err=>{
            alert(err)
            this.$store.dispatch('commitgeterr',err)
            this.$router.push('/err')
            console.log(err)
          })
        }else{
          if(!this.entercaptcha){
            this.iscapchaenter=true
          }else{
            this.captchaformatter()
          }
        }
      }

      // let url=this.$store.state.loginprevurl
      // this.$router.push({name:url})
    }
  }
}
</script>

<style lang="scss" scoped>
.title-wrapper{
  width: 80%;margin:0 auto;
}
.clear{
  claer:both;
}
.warn{
  color:red;
  font-size:0.9rem
}
.wrapper{
  width:80%;margin:0 auto;
}
.login-input{
  width:80%;
  margin:15px auto 15px auto;
}

.login-captcha-left{
  width: 50%;
  float:left
}
.login-captcha-right{
  width: 50%;
  float:right;
  text-align: right
}
.login-btn{
width:50%;
margin:0 auto;
.van-button{
  width:100%;
}
}
.honetips{
  color:grey;
}
.captchatips{
color:grey;
}
#yzm{
  height:43px;
  width:90%;
  border:1px solid #afafb1;
  border-radius: 2px;
  font-size:0.8rem;
  background: #ac2700;
  color: #fff;
  padding: 4px 10px;
  border: none;
  outline: none;
  cursor: pointer;
}
#yzm:hover{
  background: #00a8fe;
}
#yzm.disabled{
  background:grey;
  cursor: auto;
}
#yzm.disabled:hover{
  background:grey;
}
.title-img{
  float:left;padding-top:30px
}
.size-title{
  float:left;
  line-height:120px;
  font-size:0.9rem;
  font-weight: bold;
  width:60%;
  margin:20px auto 0 auto;
  height:140px;
}
</style>
