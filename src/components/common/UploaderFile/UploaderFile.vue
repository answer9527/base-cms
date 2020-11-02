<template>
    <div class="uploader_box" :class="{'uploader_success':file_url}">
        <input type="file" accept="*" ref="fileInt" @change="changeHandle"  v-if="file_url" class="add_icon"/>
        <div v-else class="add_avatar_btn" >
            <input class="add_icon" accept="*" ref="fileInt" type="file" @change="changeHandle"/>
        </div>
    </div>
</template>

<script>

import {Http} from "../../../utils/http"
export default {
    name:"Uploader",
    data(){
        return{
           file_url:false
        }
    },
    props:{

    },
    methods:{
        changeHandle(){
            const file = this.$refs.fileInt.files[0];
            Http.upload("/upload/file",file).then(res=>{
                this.$message.success(res.message)
                this.file_url = res.data
                this.$emit("uploadSuccess", res.data)
            })
        }
    }
}
</script>

<style scoped="scoped">
.uploader_box{
    height: 80px;
    width: 80px;
    border: 2px solid #000000;
    border-radius: 5px;
    box-sizing: border-box;

}
.uploader_success{
    background-image: url(../../../assets/img/upload_success.png);
    background-position: center;
    background-size: contain;
}

.add_avatar_btn{
    width: 100%;
    height: 100%;
    background-image: url(../../../assets/img/uploader.png);
    background-position: center;
    background-size: contain;
    
}
.add_icon{
    display: inline-block;
    width: 100%;
    height: 100%;
    opacity: 0;
}

</style>