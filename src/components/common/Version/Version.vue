<template>
  <div class="version_one">
      <div class="flex-x flex-y-center version_top">
          <span class="v_icon"></span>
          <span>{{$common.formatTime(createTime,"-",2)}}</span>
          <span class="update_item" @click="update_it">更新</span>
      </div>
      <div class="v_content flex-x">
          <div class="flex-x flex-x-center">
              <div></div>
          </div>
          <div>
            <span class="v_num">{{release}}</span>
            <span class="v_intro">{{intro}}</span>
          </div>

      </div>
  </div>
</template>

<script>
import {VersionModel} from "@/model/version.js"
export default {
    name:"versionListOne",
    props:{
        createTime:{
            type:String
        },
        release:{
            type:String
        },
        intro:{
            type:String
        }
    },
    data(){
        return{

        }
    },
    methods:{
        update_it(){
            
        }
    }
}
</script>

<style scoped="scoped">
.version_one{
    cursor: pointer;
}  
.v_icon{
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url(../../../assets/img/v_icon.png) no-repeat;
    background-position: center;
    background-size: contain;
    margin:5px 8px;
}
.version_top>.update_item{
    /* display: none; */
    opacity: 0;
    font-size: 14px;
    color: #3963BC;
    margin-left: 14px;
    transition: 0.5s all;
}
.version_one:hover .update_item{
    /* display: inline-block; */
    opacity: 1;
}
.v_content>div:nth-child(2){
    padding: 8px 0;
}
.v_content>div:nth-child(1){
    width:40px;
    flex-shrink: 0;

   
}
.v_content>div:nth-child(1)>div{
    width: 1px;
    background: #3963BC;
    height: 100%;
}
.v_content span{
    font-size: 12px;
}
.v_num{
    width: 40px;
    text-align: center;
    background: #F48041;
    color: #FFFFFF;
    border-radius: 2px;
    margin-right: 10px;
    display: inline-block;

}
.v_intro{
    color: #8C98AE;
}
</style>