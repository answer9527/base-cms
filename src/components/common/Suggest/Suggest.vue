<template>
  <div>
      <div>{{suggest.suggestInfo}}</div>
      <div>{{suggest.replyInfo}}</div>
      <el-form>
        <el-form-item label="回复意见" label-width="80px">
          <el-input placeholder="请输入您的回复意见" v-model="reply"></el-input>
        </el-form-item>
      </el-form>
      <div>
        
        <el-button @click="confirm_reply">确认回复</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name:"SuggestItem",
  data(){
    return{
      reply:""
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
          this.reply=""
        }else{
          this.$message.error("请填写完整")
        }
       
      }).catch(()=>{
        this.$message.info("取消回复！")
      })
    }
  }
}
</script>

<style>

</style>