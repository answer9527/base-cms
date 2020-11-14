<template>
  <div class="team_box">
    <div class="team-title">陈湖团队</div>
    <div class="flex-x flex-x-between">
        <ul class="team-ul flex-y">
            <li>
                <span class="shadow-box"> 
                    <i class="team-shadow"></i> 
                </span> 
                <span class="team-role">作者</span>
                <span class="team-name">胡渣的渣</span>
            </li>
            <li>
                <span class="shadow-box"> 
                    <i class="team-shadow"></i>
                </span> 
                <span class="team-role">编辑</span>
                <span class="team-name">
                    <ul class="flex-x">
                        <li>胡渣的渣</li>
                        <li>阿珂</li>
                    </ul>
                </span>
            </li>
            <li>
                <span class="shadow-box"> 
                    <i class="team-shadow"></i> 
                </span> 
                <span class="team-role">贡献</span>
                <span class="team-name">
                    <ul class="flex-x">
                        <li>微信朋友圈好友</li>
                        <li>知乎作者</li>
                    </ul>
                </span>
            </li>
        </ul>
        <div class="flex-y flex-y-center qcode_box">
            <img src="../../../assets/img/mina_q_code.jpg" alt=""/>
            <p>陈湖旧事小程序</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Team",
    data(){
        return{

        }
    }
}
</script>

<style scoped="scoped">
.team_box{
    width: 100%;
    height: 180px;
    padding: 16px 30px;
    background: #FFB08B;
    border-radius: 10px;
    box-sizing: border-box;
}
.team_box>.team-title{
    font-size: 18px;
    color: #45526b;
    padding-bottom:10px ;
}

.team-ul>li{
    display: flex;
    flex-direction: row;
    padding: 5px 0;
}

.team-ul>li .shadow-box {
    position: relative;
    margin-right: 10px;
    width: 14px;
    height: 14px;
    border-radius: 14px;
    background-color: #fff;
    transform: translateY(2px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.shadow-box>.team-shadow {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background-color: #ffb9a4;
}
.team-ul>li>.team-role {
    display: inline-block;
    width: 30px;
    margin-right: 15px;
    font-weight: 400;
    color: #45526b;
}
.team-name{
    color: #FFFFFF;
}
.team-name li{
    padding-right: 10px;
}

.qcode_box>img{
    width: 80px;
}
.qcode_box>p{
    padding-top: 5px;
    color: #45526b;
}
</style>