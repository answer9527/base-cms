<template>
    <div class="hello_box flex-x flex-y-center ">
        <div class="user_avatar" :style="{'backgroundImage':'url('+userInfo.avatarUrl+')'}"></div>
        <div class="hello_right">
            <div class="time_hello">{{userInfo.userName}} ，{{timeHello}}</div>
            <div class="motto">作者寄语：及时当勉励、岁月不待人。</div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    name:"Hello",
    data(){
        return{

        }
    },
    computed:{
        ...mapState(["userInfo"]),
        timeHello(){
            let time = new Date()
            let t = time.getHours()
            if(t<5){
                return "凌晨了、记得保重身体哦！"
            }else if(t<11){
                return "早上好、一日之计在于晨。"
            }else if(t<14){
                return "中午好、要记得吃午饭哦！"
            }else if(t<19){
                return "下午好、祝你工作愉快！"
            }else if(t<20){
                return "晚上好、愿你忘记一切烦恼。"
            }else{
                return "深夜了、要注意休息哦！"
            }
        }
    }
}
</script>

<style scoped="scoped">
.hello_box{
    background-color: #4577FF;
    background-image: url(../../../assets/img/snow_bg.png);
    background-position: right bottom;
    background-size: 50%;
    background-repeat: no-repeat;
    padding: 30px;
    border-radius:10px;
    width: 100%;
    height: 180px;
    box-sizing: border-box;
}
.user_avatar{
    width: 60px;
    height: 60px;
    background-position: center;
    background-size: contain;
    border-radius: 50%;
}
.hello_right{
    padding: 0 20px;
}
.hello_right>div{
    color: #FFFFFF;
}
.hello_right>div:nth-child(1){
    font-size:24px;
    padding-bottom: 20px;
}
.hello_right>div:nth-child(1){
    /* font-size: 28px; */
}
</style>