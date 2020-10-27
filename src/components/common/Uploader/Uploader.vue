<template>
    <div :style="{'backgroundImage':'url('+imageSrc+')','backgroundSize':'cover','backgroundPosition':'center'}">
        <input type="file" accept="image/*" ref="fileInt" @change="changeHandle"  v-if="imageSrc" class="person_avatar" style="opacity:0"/>
        <div v-else class="add_avatar_btn">
            <input class="ten_icon" accept="image/*" ref="fileInt" type="file" @change="changeHandle"/>
        </div>
    </div>
</template>

<script>
import {Http} from "../../../utils/http"
export default {
    name:"Uploader",
    data(){
        return{
            imageSrc:""
        }
    },
    methods:{
        changeHandle(){
            const file = this.$refs.fileInt.files[0];
            Http.upload("/upload/file",file).then(res=>{
                this.$message.success(res.message)
                this.imageSrc = res.data
                this.$emit("uploadSuccess", res.data)
            })
        }
    }
}
</script>

<style>

</style>