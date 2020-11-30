<template>
    <div class="uploader_box" :style="{'backgroundImage':'url('+imageSrc+')','backgroundSize':'cover','backgroundPosition':'center'}">
        <input type="file" accept="image/*" ref="fileInt" @change="changeHandle"  v-if="imageSrc" class="add_icon"/>
        <div v-else class="add_avatar_btn" >
            <input class="add_icon" accept="image/*" ref="fileInt" type="file" @change="changeHandle"/>
        </div>
    </div>
</template>

<script>

import {Http} from "../../../utils/http"
export default {
    name:"Uploader",
    data(){
        return{
            
        }
    },
    props:{
        imageSrc:{
            type:String,
            default:""
        }
    },
    methods:{
        // 上传成功的回调
        changeHandle(){
            const file = this.$refs.fileInt.files[0];
            Http.upload("/upload/file",file).then(res=>{
                this.$message.success(res.message)
                // this.imageSrc = res.data
                this.$emit("uploadSuccess", res.data)
            })
        }
    }
}
</script>

<style scoped="scoped">
.uploader_box{
    height: 160px;
    width: 160px;
    border: 2px dashed #000000;
    border-radius: 5px;
    box-sizing: border-box;
}
.add_avatar_btn{
    width: 100%;
    height: 100%;
    background-image: url(../../../assets/img/uploader.png);
    background-position: center;
    background-size: cover;
}
.add_icon{
    display: inline-block;
    width: 100%;
    height: 100%;
    opacity: 0;  
}
</style>