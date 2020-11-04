<template>
  <div class="home_page flex flex-x">
      <div class="page_left">
          <cmsSideBar/>
      </div>
      <div class="page_right flex-y " :class="{'right-collapse':collapse}">
          <cmsHeader/>
          <cmsTags/>
          <div class="content">
            <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                    <router-view v-if="is_keep"></router-view>
                </keep-alive>
            </transition> 
             <transition name="move" mode="out-in">
               <!-- 通过给router-view绑定key的方式来刷新雷士 /list/1  /list/2两路由之间的切换 -->
                    <router-view v-if="!is_keep" :key="$route.fullPath"></router-view>
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
import {mapState} from "vuex"
export default {
    name:"Home",
    data(){
        return{
            tagsList:[],
            
           
        }
    },
    computed:{
      ...mapState(['collapse']),
      is_keep(){
        return this.$route.meta.keepAlive
      }
    },
    components:{
        cmsHeader,cmsSideBar,cmsTags
    },
    created(){
        bus.$on("tags",msg=>{
            let arr = [];
            for (let i = 0; i < msg.length; i++) {
                msg[i].name&&arr.push(msg[i].name)
            }
            this.tagsList = arr
        })
    },

}
</script>

<style scoped="scoped">
.move-leave-active,
.move-enter-active {
  transition: all .2s;
}
.move-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.move-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* .move-enter-active{
     animation: bounce-in .3s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  75%{
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
} */
.home_page{
 
    height: 100%;
   
}
.page_left{
    height: 100%;
}
.page_right{
    height: 100%;
    position: absolute;
    left: 210px;
    right: 0;
    top: 0;
    bottom: 0;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
}
.right-collapse{
  left: 65px;
}
.content{
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
    overflow-x:hidden ;
    background: #F5F5F5;
    box-sizing: border-box;
}
</style>