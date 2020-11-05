<template>
  <div class="suggest_box" v-if="show_card">
      <div class="flex-x flex-y-center">
        <span class="avatar" :style="{'backgroundImage':'url('+suggest.avatarUrl+')'}"></span>
        <span class="userName">{{suggest.userName}}</span>
      </div>
      <div class="suggest_title">
        {{suggest.suggestInfo}}
      </div>
      <div class="reply_box">
        <div class="reply_info">{{suggest.replyInfo?suggest.replyInfo:defaultReply}}</div>
        <div class="flex-x">
            <el-input placeholder="请输入您的回复意见" v-model="reply" style="flex:1">
               <el-button slot="append" icon="el-icon-s-promotion" @click="confirm_reply"></el-button>
            </el-input>
        </div>
      </div>
      <div class="suggest_bottom flex-x flex-y-center flex-x-between">
        <span class="create_time">{{$common.formatTime(suggest.createTime,"-",2)}}</span>
        <span class="suggest_status">
          <i :class="suggestStatus?'active':''"></i>
          <span>{{suggestStatus?'已回复':'暂未回复'}}</span>
        </span>
      </div>
      <span class="del_btn el-icon-close" @click="del_suggest"></span>
  </div>

</template>

<script>
import {SuggestModel} from "@/model/suggest"
export default {
  name:"SuggestItem",
  data(){
    return{
      reply:"",
      replyFlag:false,
      defaultReply:"暂未回复",
      show_card:true
    
    }
  },
  computed:{
    suggestStatus(){
      if(this.suggest.replyInfo){
        return true
      }else{
        if(this.replyFlag){
          return true
        }else{
          return false
        }
      }
    }
  },
  props:{
    suggest:{
      type:Object
    }
  },
  methods:{
    confirm_reply(){
      this.$confirmAlert("确认回复？").then(()=>{
        if(this.reply){
          let params = {
            "id":this.suggest.id,
            "replyInfo":this.reply
          }
          this.$emit("replyIt",params)
          this.defaultReply=this.reply
          this.replyFlag = true
          this.reply=""
        }else{
          this.$message.error("请填写完整")
        }
       
      }).catch(()=>{
        this.$message.info("取消回复！")
      })
    },
    del_suggest(){
      this.$confirmAlert("确认删除？").then(()=>{
        SuggestModel.delSuggest({id:this.suggest.id}).then(res=>{
            this.$message.success(res.message)
            this.show_card = false
        }) 
      }).catch(()=>{
        this.$message.info("取消删除！")
      })  
    },

  }
}
</script>
<style scoped="scoped">
.suggest_box{
  padding: 20px;
  width: 420px;
  border-radius: 20px;
  box-sizing: border-box;
  background: #FFFFFF;
  margin: 10px;
  position: relative;
}
.avatar{
  width: 40px;
  height: 40px;
  background-position: center;
  background-size: contain;
  border-radius: 50%;
}
.userName{
  padding-left:10px ;
}
.suggest_title{
  font-weight: bold;
  padding: 10px 0;
}
.reply_box{
 
}
.reply_box>div{
  padding: 10px 0;
}
.reply_info{
  font-size: 12px;
  color: #6D6D6D;
}
.suggest_bottom{
  padding: 10px 0;
}
.suggest_bottom span{
  font-size: 12px;
  color: #6D6D6D;
}
.suggest_bottom i{
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6D6D6D;

}
.suggest_bottom .active{
   background: green;
}
.del_btn{
  position: absolute;
  top: 14px;
  right: 14px;
  font-size: 14px;
  cursor: pointer;
}
</style>