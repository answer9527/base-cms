<template>
  <div class="flex-x">
      <div class="version_list">
          <VersionOne 
            v-for="(item,index) in version_list" 
            :createTime="item.createTime" 
            :release="item.release"
            :intro="item.intro"
            :key="index"/>
      </div>
      <div>
          更新
      </div>
  </div>
</template>

<script>
import VersionOne from "@/components/common/Version/Version"
import {VersionModel} from "@/model/version.js"
export default {
    name:'versionList',
    data(){
        return{
            version_list:[]
        }
    },
    components:{
        VersionOne
    },
    created(){
        this.getVersionList()
    },
    methods:{
        getVersionList(){
            VersionModel.getVersionList().then(res=>{
                this.version_list = res.data
            })
        }
    }
}
</script>

<style>

</style>