<template>
  <div class="login_page flex-x">
    <div class="login_bg"></div>
    <div class="login_form">
        <div class="login_form_in">
            <div>
                <div>用户登录</div>
                <div>USER LOGIN</div>
            </div>
            <div>
                <input type="text" placeholder="用户" v-model="params.account">
            </div>
            <div>
                <input type="password" placeholder="密码" v-model="params.password">
            </div>
            <div></div>
            <div @click="login">登录</div>
        </div>
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
}
.login_bg{
    width: 65%;
    height: 100%;
    background: url(../../../assets/img/login_bg.png);
    background-position: center;
    background-size: cover;
}
.login_form{
    width: 35%;
    height: 100%;
    background: #EDEDED;
}
</style>