<template>
  <div>
      版本列表
  </div>
</template>

<script>
import {VersionModel} from "@/model/version.js"
export default {
    name:'versionList',
    data(){
        return{
            version_list:[]
        }
    },
    created(){
        this.getVersionList()
    },
    methods:{
        getVersionList(){
            VersionModel.getVersionList().then(res=>{
                console.log(res)
            })
        }
    }
}
</script>

<style>

</style>