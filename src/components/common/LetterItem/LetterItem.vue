<template>
    <div class="letter_box">
        
        <div class="letter_one">
            <div class="user">
                <div class="distance" v-if="type=='future'">{{letterInfo.planTime|timeOut}}</div>
                <div class="distance" v-else>已投递</div>
                <div class="avatar" :style="{'backgroundImage':'url('+letterInfo.avatarUrl+')'}"></div>
                <div class="userName">{{letterInfo.userName}}</div>
            </div>
            <div class="create_time flex-y">
                <span>写给未来的信</span>
                <span>创建于{{$common.formatTime(letterInfo.createTime,"-")}}</span>
            </div>
        </div>
        <div>

        </div>
    </div>

</template>

<script>
export default {
    name:"letterOne",
    data(){
        return{

        }
    },
    props:{
        letterInfo:{
            type:Object
        },

            type:{
                type:String,
                default:"future"
            }
   
    },
    methods:{

    },
    filters:{
        timeOut(val){
            let now = new Date().getTime()
            let plan = new Date(val).getTime()
            let d = (plan-now)/24/60/60/1000
            console.log(plan-now)
            if(d>1){
                return parseInt(d)+"天"
            }else{
                 return "1天内"
            }
            
        }
    }
}
</script>

<style scoped="scoped">
.letter_box{
    /* background: red; */
    background: #FFFFFF;
    padding: 10px 0 20px 0;
    border-radius: 20px;
    margin: 30px;
}
.letter_one{
    width: 450px;
    height:270px;
    background-image:url(../../../assets/img/letter_one.png) ;
    background-position: center;
    background-size: contain;
    position: relative;
    transform: rotate(-12deg);
}
.letter_one>div{
  transform: rotate(12deg);
}
/* .letter_one>.distance{
    position: absolute;
    top: 60px;
    text-align: center;
    font-size: 12px;
    width: 100%;
} */
.letter_one>.user{
    position: absolute;
    width: 140px;
    top: 54px;
    left: 122px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
  
}
.letter_one>.user>.distance{
    padding: 20px 0;
    font-size: 12px;
    color: #D11036;
    font-weight: bold;
}
.letter_one>.user>.avatar{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-position: center;
    background-size: contain;
   
}
/* 天空之城 */
.letter_one>.user>.userName{
    padding: 5px 0;
    font-weight: bold;
    font-size: 12px;

    /*  */
}
.letter_one>.create_time{
    position: absolute;
    right: 204px;
    bottom: 14px;

    text-align: center;
}
.letter_one>.create_time>span:nth-child(1){
    display: inline-block;
    padding: 8px 0;
    font-weight: bold;
    font-size: 12px;
}
.letter_one>.create_time>span:nth-child(2){
    font-size: 12px;
}


</style>