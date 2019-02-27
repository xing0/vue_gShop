<template>
  <div class="on">
    <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">硅谷外卖</h2>
          <div class="login_header_title">
            <a href="javascript:;" :class="{on:isSMS}" @click="isSMS=true">短信登录</a>
            <a href="javascript:;" :class="{on:!isSMS}" @click="isSMS=false" @click.once="updateCaptcha">密码登录</a>
          </div>
        </div>
        <div class="login_content">
          <form>
            <div :class="isSMS?'on':'off'">
              <section class="login_message">
                <input type="tel" maxlength="11" v-model="phone" placeholder="手机号">
                <button :disabled="!isPhone||timeout>0" :class="{right_phone_number:timeout===0&&isPhone}"
                     @click.prevent="sendCode"   class="get_verification">
                {{timeout>0?`已发送(${timeout})s`:"获取验证码"}}
                </button>
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" v-model="SMS" placeholder="验证码">
              </section>
              <section class="login_hint">
                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <div :class="isSMS?'off':'on'">
              <section>
                <section class="login_message">
                  <input type="tel" maxlength="11" v-model="username" placeholder="手机/邮箱/用户名">
                </section>
                <section class="login_verification">
                  <input :type="showPwd?'text':'password'" maxlength="8" v-model="pwd" placeholder="密码">
                  <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                    <div class="switch_circle" :class="{right:showPwd}"></div>
                    <span class="switch_text">{{showPwd?'abc':'...'}}</span>
                  </div>
                </section>
                <section class="login_message">
                  <input type="text" maxlength="6" v-model="code" placeholder="验证码">
                  <img class="get_verification" ref="img" src="http://localhost:5000/captcha" @click="updateCaptcha" alt="captcha">
                </section>
              </section>
            </div>
            <button class="login_submit" @click.prevent="login">登录</button>
          </form>
          <a href="javascript:;" class="about_us">关于我们</a>
        </div>
        <a href="javascript:" class="go_back" @click="$router.back()">
          <i class="iconfont icon-jiantou2"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
  import {reqPhoneCode,reqPhoneCodeLogin,reqPwdCodeLogin} from '../../api'
  import {Toast} from 'mint-ui'
  export default {
    data () {
      return {
        isSMS:true,
        phone:'',
        SMS:'',
        username:'',
        pwd:'',
        code:'',
        timeout:0,
        showPwd:false
      }
    },
    computed:{
      isPhone (){
        return /^1\d{10}$/.test(this.phone)
      },
    },
   methods :{
      async sendCode (){
        const {phone,isSMS,isPhone,code,SMS,username,pwd} = this
        this.timeout=5
        const setIntervalID = setInterval(()=>{
          if(--this.timeout<1){
            clearInterval(setIntervalID)
            this.timeout=0
          }
        },1000)
        //验证手机号
        if(isSMS){
          if(!isPhone){
            alert('手机号错误')
            return
          }else if(!/^\d{6}$/.test(SMS)){

              alert('验证码必须6位数字')
              return
          }else{
            const res = await reqPhoneCode({phone})
            if(res.code===0){
              console.log('发送成功')
              Toast('发送成功')
            }else{
              alert(res.msg)
              this.timeout=0
            }
          }
        }
     },
    async login (){
      const {phone,isSMS,isPhone,code,SMS,username,pwd} = this
      if(isSMS){
        //验证码登陆
         if(!isPhone){
           alert('手机号错误')
           return
         }else if(!/^\d{6}$/.test(SMS)){

           alert('验证码必须6位数字')
           return
         }else{
           const res = reqPhoneCodeLogin({phone,code:SMS})
           if(res.code===0){
             console.log('登陆成功')
             Toast('登陆成功')
           }else{
             alert(res.msg)
             this.timeout=0
           }
         }
       }else{
        //密码登陆
        console.log('密码登陆')
        if(username.trim()&&pwd){
           const res =await reqPwdCodeLogin({name:username,captcha:code,pwd})
          console.log(res)
          if(res.code===0){
             console.log('登陆成功')
            Toast('登陆成功')
            this.$store.dispatch('saveUser',res.data)
            this.$router.back()
           }else{
             alert(res.msg)
            this.updateCaptcha()
           }
         }else{
           alert('用户名密码不能为空')
           return
         }
       }
     },
     updateCaptcha (){
       this.$refs.img.src = `http://localhost:5000/captcha?time=${Date.now()}`
     }
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*@import "../../common/stylus/mixins.styl"*/
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone_number
                  color: black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(27px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
