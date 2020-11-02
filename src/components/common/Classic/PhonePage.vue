<template>
  <div class="phone_detail">
      <div class="app_title">陈湖旧事</div>
      <div class="page-content">
        <div class="classic_image" :style="{'backgroundImage':'url('+classic_detail.image+')'}"></div>
        <div class="detail_box">
            <ClassicDetail :classic_detail="classic_detail"/>
        </div>
      </div>

  </div>
</template>

<script>
import ClassicDetail from "./ClassicDetail"
import {ClassicModel} from "@/model/classic.js"
export default {
    name:"PhonePage",
    data(){
        return{
            classic_detail:{}
        }
    },
    props:{
        classicId:{
            type:Number,
            default:1
        }

    },
    created(){
        ClassicModel.getDetailById(this.classicId).then(res=>{
            let temp = res.data
            temp. content = temp.content.replace(/\<img/gi, "<img style='width:100%;height:auto;display:block;'")
            this.classic_detail =temp
        })
    },
    components:{
        ClassicDetail
    },
    
}
</script>

<style scoped="scoped">
::-webkit-scrollbar{
    display:none;
}
.phone_detail{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.page-content{
    margin-top: 40px;
    height: 528px;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}
.app_title{
    position: absolute;
    top: 0;
    text-align: center;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    letter-spacing: 6px;
    font-size: 16px;
    font-family: 黑体;
    color: #000000;
}
.classic_image{
  height: 230px;
  width: 100%;
  background-position: center;
  background-size: cover;
}
.detail_box{
  position: relative;
  top: -50px;
  background: #FFFFFF;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 15px;

}
</style>