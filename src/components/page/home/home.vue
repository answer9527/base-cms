<template>
  <div class="home_page flex-x">
      <div>
          <cmsSideBar/>
      </div>
      <div>
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
export default {
    name:"Home",
    data(){
        return{
            tagsList:[]
        }
    },
    components:{
        cmsHeader,cmsSideBar,cmsTags
    }
}
</script>

<style>

</style>