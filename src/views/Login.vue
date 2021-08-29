<template >
  <div class="wrapper">
    <div class="title-wrapper" >
      <div class="size-title">
        请使用手机短信验证登录
      </div>
    </div>
    <div class="">
      <div class="input-wrap">
        <div class="input-field" >
          <div class="input-icon">
             <van-icon name="phone-circle"/>
          </div>
          <div class="phone-input">
              <input type="text" name="phone"  id="phone" placeholder="请输入手机号码"  class="phone-input-field" v-model="phone" />
          </div>
          <div class="clear">

          </div>
        </div>
      </div>
      <span :class="{warn:isphoneenter}" v-if="isphoneenter">{{phoneTips}}</span>
      <div class="input-wrap">
          <div class="input-field">
            <div class="input-icon" style="float:left;box-sizing:border-box;font-size:1.3rem">
              <van-icon name="lock" />
            </div>
            <div class="yzm-input" >
              <input type="text" name="captcha" id="captcha" placeholder="验证码" v-model="entercaptcha" style="border:none;width:100%" />
            </div>
            <div class="yzm-wrap" >
                <button type="button" name="button"  id="yzm" @click="yzmfn">获取验证码</button>
            </div>
            <div class="clear">
            </div>
        </div>
        <span v-if="iscapchaenter" :class="{warn:iscapchaenter}">{{catchaTips}}</span>
      </div>
      <div class="secret">
        <button type="button" name="secretbtn" id="secretbtn" @click="readSerect">
          <div class="checked-icon">
            <van-icon name="checked" id="checked-icon"/>
          </div>
          <div class="">
            <span>用户协议与隐私保护</span>
          </div>
          <div class="clear">
          </div>
        </button>
      </div>
      <div class="login-btn-wrap">
        <van-button @click="login" class="login-btn">登录</van-button>
      </div>
      <p style="font-size:0.95rem;font-weight:bold;padding:2px;margin:0px;">0烦恼</p>
      <div class="regist-tips">（“私人”管家式服务：一次测量即可，以后在各大平台，甜小内内衣闭着眼睛买，无需再选择码数，我们会根据你的电话号码，智能地给你发送对应的码数，就是这么的神奇！）</div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  import {timeFormat} from '@/common/utils.js'
  import { Dialog } from 'vant';
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
      comfirmstate:true
    }
  },
  created(){
    document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
  },
  computed:{

  },
  components:{

  },
  mounted(){

  },
  methods:{
    readSerect(){
      document.getElementById("checked-icon").style="color:red"
      Dialog.confirm({
        title: '用户协议与隐私保护',
        message: " 为了完整的实现本网站的测量功能和给予您更好的购买体验，本网站将搜集你的昵称，头像，以及手机号码。网站所生成和使用的个人信息，未经您个人许可，除非法律要求，这些信息不会被提供给任何第三方。如因公司活动须公开批露您的个人信息，我们将会通知你批露的目的，内容和方式，且必须征得您的同意才会批露。谢谢您对甜小内的支持。",
        confirmButtonText:'同意',
        cancelButtonText:'不同意',
        width:'280px',
      })
      .then(() => {
          document.getElementById("checked-icon").style="color:red";
          this.comfirmstate=true
        })
      .catch(() => {
            document.getElementById("checked-icon").style="color:rgb(44, 62, 80)"
        });
    },
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
        this.phoneformatter()
        if (this.isphoneenter==false){
          let phone=document.getElementById("phone").value
          if (phone){
            Vue.axios.post('https://www.tianxiaonei.com/wx/smscaptcha/index.php',{phone:phone})
              .then(data=>{
              this.postcaptcha=data.data.captcha;
              this.phoneerr=data.data
            }).catch(err=>{
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
      let time=timeFormat("yyyy-MM-dd HH:mm:ss");
      if(this.comfirmstate){
        if (this.phone&&this.entercaptcha){
         if (this.postcaptcha==this.entercaptcha){
           let post={phone:this.phone,wx_user_name:this.$store.state.nickname,wxicon:this.$store.state.usericon,openid:this.$store.state.opid,user_name:"",userid:"",sex:"",sign_up_time:time}
            Vue.axios.post('https://www.tianxiaonei.com/wx/gettoken/index.php',post)
            .then(data=>{
              let res=data.data
              if (typeof(res)=="string"){
                res=JSON.parse(res)
              }
              let token=res.token
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
              this.$store.dispatch('commitgeterr',err)
              this.$router.push('/err')
            })
          }else{
            if(!this.entercaptcha){
              this.iscapchaenter=true
            }else{
              this.captchaformatter()
            }
          }
        }
      }
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
.input-wrap{
  width:80%;
  margin:15px auto 15px auto;
  .input-field{
    border:1px solid #afafb1;
    border-radius:3px;
    padding:10px;
     background:white;
    font-size:0.9rem;
    height:44px;
     box-sizing:border-box;
     line-height:20px;
    .input-icon{
      float:left;
      box-sizing:border-box;
      font-size:1.3rem;
      margin-right:4px;
    }
    .phone-input{
      float:left;
      width:80%;
      .phone-input-field{
        border:none;
        width:100%;
      }
    }
    .yzm-input{
      float:left;width:48%
    }
    .yzm-wrap{
    width:40%;float:left
    }
  }
}
.secret{
  text-align: left;
  width:80%;
  margin:0 auto;
  #secretbtn{
    border:0px;
    background: none;
    .checked-icon{
      color:red;
      padding-top:4px;
    }
    div{
      float:left;
    }
  }
}


.login-btn-wrap{
width:80%;
margin:0 auto;
.login-btn{
  width:100%;
  border-radius: 5px;
  margin-top:20px;
  color:white;
  background:#dd9f9f;
}
}
.honetips{
  color:grey;
}
.captchatips{
color:grey;
}
#yzm{
  border:none;
  padding:0px;
  margin:0px;
  height:24px;
  line-height: 24px;
  width:100%;
  //border:1px solid #afafb1;
  border-radius: 2px;
  font-size:0.8rem;
  //background: #ac2700;
  color: #939393;
  //padding: 0px 8px;
  border: none;
  outline: none;
  cursor: pointer;
}

#yzm.disabled{
  background:grey;
  color:white;
  cursor: auto;
}
#yzm.disabled:hover{
  background:grey;
}
.title-img{
  float:left;padding-top:30px
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
.regist-tips{
  width:80%;margin:0 auto;color:grey;font-size:0.85rem;
  text-align:left;
}
</style>
