<template>
  <div class="home_page flex flex-x">
      <div class="page_left">
          <cmsSideBar style="height:100%"/>
      </div>
      <div class="page_right flex-y">
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
           
        })
    },
    components:{
        cmsHeader,cmsSideBar,cmsTags
    }
}
</script>

<style scoped="scoped">
.move-leave-active,
.move-enter-active {
  transition: all .5s;
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
    /* display: flex;
    flex-direction: row; */
    height: 100%;
}
.page_left{
    width: 260px;
    height: 100%;
}
.page_right{
    flex: 1;
}
.content{
    background: linear-gradient(to right,#F0F2F5,#EFF1F4);
    padding: 20px;
    flex: 1;
    overflow-x:hidden ;
}
</style>