<template>
  <div class="login_page flex-y">
      <div class="login_page_top flex-x flex-x-between">
          <div class="sys_title">陈湖旧事后台管理系统</div>
          <div class="top_right_bg"></div>
      </div>
      <div class="login_page_bottom">
        <div class="login_page_in flex-x">
            <div class="login_in_bg"></div>
            <div class="login_form">
                <div class="login_form_in">
                    <div class="login_form_title">欢迎登陆后台管理系统</div>
                    <div class="form_item flex-x flex-x-center">
                        <input type="text" placeholder="账号：邮箱号/手机号/微信号" v-model="params.account">
                    </div>
                    <div class="form_item flex-x flex-x-center">
                        <input type="password" placeholder="密码：请输入你的密码" v-model="params.password">
                    </div>
                    <div class="check_row flex-x flex-y-center">
                        <input type="checkbox" checked="checked">
                        <span>记住密码</span>
                    </div>
                    <div class="form_item">
                        <div class="send_btn" @click="login">登录</div>
                    </div>
                    <div class="form_item flex-x flex-y-center">
                        <div class="line"></div>
                        <div class="line_p">快速登陆</div>
                        <div class="line"></div>
                    </div>
                    <div class="login_group flex-x flex-x-center flex-y-center">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="designed_row">
            <div class="line"></div>
            <div class="line_p">Designed by doctor Hu</div>
            <div class="line"></div>
        </div> -->
      </div>
  </div>
</template>

<script>
import {UserModel} from "@/model/user"
import {mapActions} from "vuex"
export default {
    name:"LoginPage",
    data(){
        return{
            params: {
                account: '516994147@qq.com',
                password: 'q123456',
                type:102
            },
        }
    },
    created(){
        // this.login()
    },
    methods:{
        ...mapActions(['set_token','set_userinfo']),
        login(){
            UserModel.login(this.params).then(res=>{
                let result = res.data
                let token = result.token
                let userInfo = result.userInfo
                this.set_userinfo(userInfo)
                this.set_token(token)
                this.$message.success("恭喜您，登陆成功！")
                this.$router.replace("/")
            })
        }
    }
}
</script>

<style scoped="scoped">
.login_page{
    height: 100%;
    width: 100%;
    /* background: linear-gradient(to bottom,#340DA6,#2D8DE3); */
    background: #FFFFFF;
   
}
.login_page_top{
    height: 320px;
    width: 100%;
    background: linear-gradient(to right,#3A30FF,#392FFF);
}
.login_page_top>.sys_title{
    color: #FFFFFF;
    font-size: 32px;
    font-weight: bold;
    padding: 60px 100px;
    letter-spacing: 4px;
}
.login_page_top>.top_right_bg{
    height: 320px;
    width: 320px;
    background: url(../../../assets/img/login_bg2.png);
    background-position: center;
    background-size: contain;
}
.login_page_bottom>.login_page_in{
    width: 1200px;
    height: 600px;
    padding:60px 30px ;
    box-sizing: border-box;
    background: #FFFFFF;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0,21,41,.08);

}
.login_page_bottom>.designed_row{
    width: 300px;
    height: 12px;
    position: fixed;
    bottom:20px;
    left: 0;
    right: 0;
    margin: auto;
}

.login_page_in>.login_in_bg{
    width: 50%;
    height: 100%;
    background: url(../../../assets/img/login_bg1.png);
     background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.login_page_in>.login_form{
    width: 50%;
    height: 100%;
    border-left: 1px solid #cccccc;
    box-sizing: border-box;
}
.login_form>.login_form_in{
    padding:20px 120px;
}
.login_form>.login_form_in>.login_form_title{
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: #2998E9;
    padding-bottom: 20px;
}
.login_form>.login_form_in>.form_item{
    width: 100%;
    padding: 20px 0;
    box-sizing: border-box;
    
}

.login_form>.login_form_in>.check_row{
    padding-left: 10px;
}
.login_form>.login_form_in>.check_row>span{
    padding-left:6px;
}

.login_form_in>.form_item>input{
    width: 100%;
    height: 50px;
    padding: 0 50px 0 20px;
    box-sizing: border-box;
    border: 0;
    outline: none;
    background: #ECECEC;
    border-radius: 5px;
}
.login_form_in>.form_item>.send_btn{
    width: 100%;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    background: #615CFE;
    color: #FFFFFF;
    border-radius: 5px;
    letter-spacing: 10px;
    cursor: pointer;
}
.login_form>.login_form_in>.form_item>.line{
    height: 1px;
    width: 33%;
    background: #cccccc;
    
}
.login_form>.login_form_in>.form_item>.line_p{
    flex: 1;
    text-align: center;
}
.login_form>.login_form_in>.login_group{

}
.login_form>.login_form_in>.login_group>i{
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 0 10px;
    background: url(../../../assets/img/wx_icon.png)no-repeat;
    background-position: center;
    background-size: contain;
}
.login_form>.login_form_in>.login_group>i:nth-child(2){
     background: url(../../../assets/img/qq_icon.png)no-repeat;
}
.login_form>.login_form_in>.login_group>i:nth-child(3){
     background: url(../../../assets/img/wb_icon.png)no-repeat;
}
</style>