<template>
  <div>
      <el-button @click="add_one">新增</el-button>
      <el-button @click="del_one(32)">删除</el-button>
  </div>
</template>

<script>
import {SentenceModel} from "@/model/sentence"
export default {
    name:"sentence",
    data(){
        return{
            page:1,
            size:10,
            keyword:null,
            addForm:{
                txt:'世上只有妈妈好',
                image:null
            }
        }
    },
    created(){
        this.get_list()   
    },
    components:{

    },
    methods:{
        get_list(){
            let params = {
                "page":this.page,
                "size":this.size,
                "keyword":this.keyword
            }
            SentenceModel.getSentenceList(params).then(res=>{
                console.log(res)
            })
        },
        add_one(){
            SentenceModel.insertSentence(this.addForm).then(res=>{
                console.log(res)
            })
        },
        del_one(id){
            this.$confirmAlert("是否删除该条?").then(()=>{
                SentenceModel.delSentence({id}).then(res=>{
                    this.$message.success(res.message)
                })
            }).catch(()=>{
                this.$message.info("取消删除")
            })

        }
    }
}
</script>

<style>

</style>