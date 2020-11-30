<template>
    <div class="letter_box">
        
        <div class="letter_one" @click="openInfo">
            <div class="user">
                <div class="distance" v-if="type=='future'">{{letterInfo.planTime|timeOut}}</div>
                <div class="distance" v-else>已投递</div>
                <div class="avatar" :style="{'backgroundImage':'url('+letterInfo.avatarUrl+')'}"></div>
                <div class="userName">{{letterInfo.userName}}</div>
            </div>
            <div class="create_time flex-y">
                <span class="flex-x flex-y-center">写给未来的信 <i :class="letterInfo.type==1?'letter_t':'letter_w'"></i></span>
                <span>创建于{{$common.formatTime(letterInfo.createTime,"-")}}</span>
            </div>
        </div>
        <div>
            <el-dialog  :visible.sync="dialog_info" width="70%" top="100px" title="信件详情" center> 
                <div class="dialog_content flex-x flex-x-between">
                    <div class="dialog_left">
                        <div class="letter_title">{{letterInfo.title}}</div>
                        <div class="letter_content">{{letterInfo.content}}</div>
                    </div>
                    <span></span>
                    <div class="dialog_right">
                        <div v-if="letterInfo.image" class="letter_image_box" >
                            <img :src="letterInfo.image"  style="width: 100%;" @click="open_upload" />      
                        </div>
                        
                        <div class="upload_image" v-if="letterInfo.image==null">
                            <Uploader @uploadSuccess="uploadSuccess" ref="uploader"/>
                            <div class="upload_tip">请上传手抄信件</div>
                        </div>
                        <!-- <div class="letter_image_mask" v-if="letterInfo.image && isHover">
                            <span class="delete_image_btn" @click="open_upload">删除</span>
                        </div> -->
                    </div>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialog_info = false">取 消</el-button>
                    <el-button type="primary" v-if="update_btn" @click="confirm_update">确认修改</el-button>
                </span>
                
            </el-dialog>
        </div>
    </div>

</template>

<script>
import Uploader from "@/components/common/Uploader/Uploader"
import {LetterModel} from "@/model/letter"
export default {
    name:"letterOne",
    data(){
        return{
            dialog_info:false,
            update_btn:false,
            isHover:false
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
    components:{
        Uploader
    },
    methods:{
        openInfo(){
            this.dialog_info = true
        },
        uploadSuccess(e){
            this.letterInfo.image = e
            this.update_btn = true
        },
        open_upload(){
        
            this.letterInfo.image = null
        },
        hoverIn(){
            this.isHover = true
        },
        hoverOut(){
            this.isHover = false
        },
        confirm_update(){
            LetterModel.setLetterImage({
                id:this.letterInfo.id,
                image:this.letterInfo.image,
                uid:this.letterInfo.uid
            }).then(res=>{
                console.log(res)
            })
        }
        
    },
    filters:{
        timeOut(val){
            let now = new Date().getTime()
            let plan = new Date(val).getTime()
            let d = (plan-now)/24/60/60/1000
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

.letter_one>.create_time>span:nth-child(1)>i{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 2px;

}
.letter_one>.create_time>span:nth-child(1)>.letter_t{

    background-image:url(../../../assets/img/letter_t.png) ;
    background-position: center;
    background-size: contain;
}
.letter_one>.create_time>span:nth-child(1)>.letter_w{

    background-image:url(../../../assets/img/letter_w.png) ;
    background-position: center;
    background-size: contain;
}

.dialog_content{
    width: 100%;
    height: 660px;
}
.dialog_content>div{
    width: 49%;
    padding: 10px;
    box-sizing: border-box;
    /* border: 1px solid red; */
}
.dialog_content>span{
    display: inline;
    width: 2px;
    background: #d2d2d2;
}

.dialog_content>.dialog_left>.letter_title{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 10px;
}
.dialog_content>.dialog_left>.letter_content{
    font-size: 16px;
    letter-spacing: 2px;
    text-indent: 32px;
}
.dialog_content>.dialog_right{
   position: relative;
   overflow: hidden;
   
}

.dialog_content>.dialog_right>.letter_image_box{
     overflow-y:scroll ;
     width: 100%;
     height: 100%;
 
}
.dialog_content>.dialog_right>.letter_image_mask{
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999999;
    
}
.delete_image_btn{
    position: absolute;
    left:200px;
    right: 0;
    top: 300px;
    bottom: 0;
    display: inline-block;
    width: 60px;
    height: 60px;
    color: #FFFFFF;
}
.dialog_content>.dialog_right>.upload_image{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.dialog_content>.dialog_right>.upload_image>.upload_tip{
    padding: 10px 0;
    font-weight: bold;
}


</style>