<template>
  <div>
      <el-dialog :visible.sync="dialogVisible" class="preview_dialog">
          <div class="phone">
              <div class="phone_screen">
                  <PhonePage :classic_detail="classic_detail"/>
              </div>
          </div>
      </el-dialog>
  </div>
</template>

<script>
import PhonePage from "./PhonePage"
import {ClassicModel} from "@/model/classic.js"
export default {
    name:"PreviewClassic",
    data(){
        return{
            dialogVisible:false,
            classic_detail:{}
        }
    },
    props:{
        classicId:{
            type:Number,
        }
    },
    components:{
        PhonePage
    },
    created(){
        
    },
    methods:{
        // 弹出
        openDialog(){
            ClassicModel.getDetailById(this.classicId).then(res=>{
                let temp = res.data
                temp. content = temp.content.replace(/\<img/gi, "<img style='width:100%;height:auto;display:block;'")
                this.classic_detail =temp
                this.dialogVisible = true
            })
            
        },
        closeDialog(){
            this.dialogVisible = false
        }
    }
}
</script>

<style scoped="scoped">
.phone{
    margin: 20px 20px 0;
    background: url(../../../assets/img/phone.png);
    background-repeat: no-repeat;
    background-size: 100%;
    /* height: 100%; */
    padding: 100px 12px;
    box-sizing: border-box;
    height: 800px;
    width: 356px;
}
.phone_screen{
    background: #FFFFFF;
    height:568px ;
    width: 330px;
   
}

</style>