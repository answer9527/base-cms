<template>
  <div class="txt_out" :class="'bg'+no" v-if="show">
      <i class="del_btn el-icon-close" @click="del_it"></i>
      <div class="txt_in">{{txt}}</div>
      <div class="leaf"></div>
  </div>
</template>

<script>
import {SentenceModel} from "@/model/sentence"
export default {
    name:"sentence",
    data(){
        return{
            show:true
        }
    },
    computed:{
        no(){
            return parseInt(Math.random()*4+1)
        }
    },
    props:{
        id:{    
            type:Number,
            defautl:1
        },
        txt:{
            type:String,
            default:""
        }
    },
    methods:{
        del_it(){
            this.$confirmAlert("是否删除该条?").then(()=>{
                SentenceModel.delSentence({id:this.id}).then(res=>{
                    this.$message.success(res.message)
                    this.show = false
                })
            }).catch(()=>{
                this.$message.info("取消删除")
            })
        }
    }
}
</script>

<style scoped="scoped">
.txt_out{
    
    width: 300px;
    padding: 20px;
    border-radius: 20px;
    margin:20px;
    position: relative;

}

.bg1{
    background: #F6A20B;
}
.bg2{
    background: #71BAA9;
}
.bg3{
    background: #FFC1AA;
}
.bg4{
    background: #85A9FF;
}
.txt_out>.del_btn{
    opacity: 0;
    font-size: 14px;
    position: absolute;
    right: 10px;
    top: 10px;
    color: #FFFFFF;
    cursor: pointer;
}
.txt_out:hover>.del_btn{
     opacity: 1;
     transition: all 1s;

}
.txt_out>.leaf{
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 340px;
    height: 20px;
    background: url(../../../assets/img/leaf.png);
    background-position: center;
    background-size: contain;
}
.txt_in{
   border: 1px dashed #ffffff;
   padding: 10px;
   border-radius: 20px;
   color: #FFFFFF;
   font-size: 18px;
   text-align: center;
   position: relative;
}
/* .txt_in::before,.txt_in::after{
   
    box-sizing: border-box;
    position: absolute;
    content: "";
    border: 1px dashed transparent;
    width: 0;
    height: 0;
}
.txt_in::before{
    top: 0;
    left: 0;
}
.txt_in::after{
    bottom: 0;
    right: 0;
}
.txt_in:hover:before{
    width: 100%;
    height: 100%;
    border-top-color:#FFFFFF ;
    border-right-color:#FFFFFF ;
    transition: width 0.3s ease-in,height 0.3s ease-in 0.3s;
}
.txt_in:hover::after{
    width: 100%;
    height: 100%;
    border-left-color:#FFFFFF ;
    border-bottom-color:#FFFFFF ;
    transition:border-color 0s ease-in 0.6s, width 0.3s ease-in 0.6s,height 0.3s ease-in 0.9s,border-radius 0s ease-in 1.2s;
    
} */
</style>