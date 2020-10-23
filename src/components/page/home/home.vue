<template>
  <div class="home_page flex flex-x">
      <div class="page_left">
          <cmsSideBar/>
      </div>
      <div class="page_right">
          <cmsHeader/>
          <cmsTags/>
          <div class="content">
            <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                    <router-view></router-view>
                </keep-alive>
            </transition> 
          </div>
      </div>
  </div>
</template>

<script>
import cmsHeader from "../../common/header"
import cmsSideBar from "../../common/sideBar"
import cmsTags from "../../common/tags"
import bus from "@/config/bus"
export default {
    name:"Home",
    data(){
        return{
            tagsList:[]
        }
    },
    created(){
        bus.$on("tags",msg=>{
            let arr = [];
            for (let i = 0; i < msg.length; i++) {
                msg[i].name&&arr.push(msg[i].name)
            }
            this.tagsList = arr
            console.log(this.tagsList)
        })
    },
    components:{
        cmsHeader,cmsSideBar,cmsTags
    }
}
</script>

<style scoped="scoped">
.home_page{
    /* display: flex;
    flex-direction: row; */
}
.page_left{
    width: 260px;
}
.page_right{
    flex: 1;
}
</style>