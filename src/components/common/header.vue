<template>
  <div class="header_bar flex-x flex-x-between flex-y-center">
    <div class="header_left flex-x flex-y-center">
      <i class="side_btn el-icon-s-unfold" @click="change_collapse(false)" v-if="collapse"></i>
      <i class="side_btn el-icon-s-fold" @click="change_collapse(true)" v-else></i>
      <div class="header_nav_box">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,index) in pathArr" :key="index">{{item}}</el-breadcrumb-item>
          <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
        </el-breadcrumb>
      </div>
    </div>
    <div class="header_right flex-x flex-y-center">
      <div class="search_box" :class="{'search_box_active':showSearch}">
        <el-autocomplete
          class="search_input"
          prefix-icon="el-icon-search"
          size="small"
          clearable
          v-model="keyWord"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </div>
      <div class="tools_box">
          <i class="el-icon-search" :style="{'color':showSearch?'#3963BC':''}" @click="toggleSearch"></i>
          <i class="el-icon-bell"></i>
          <i class="el-icon-full-screen" :style="{'color':fullscreen?'#3963BC':''}" @click="toggleFullScreen"></i>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link flex-x flex-y-end">
          <div class="header_avatar" :style="{'backgroundImage':'url('+userInfo.avatarUrl+')'}"></div>  
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="user_box">
          <div class="user_info flex-y flex-y-center">
            <img src="../../assets/img/user/user_card_top.png" class="corner" alt="">
            <div class="card_avatar" :style="{'backgroundImage':'url('+userInfo.avatarUrl+')'}"></div>
            <div class="user_name">{{userInfo.userName}}</div>
            <!-- <div class="info_content">
              <div class="user_name">{{userInfo.userName}}</div>
            </div> -->
          </div>
          <ul class="menu_list flex-y flex-x-around">
            <li class="menu_item">
              <i class="el-icon-user"></i>
              <span>个人中心</span>
            </li>
            <li class="menu_item" @click="logout">
              <i class="el-icon-switch-button"></i>
              <span>退出登录</span>
            </li>
          </ul>
        </el-dropdown-menu>
      </el-dropdown>
      
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import homeRouter from "../../router/home-router"
export default {
  name:"cms-header",
  data(){
    return{
      // 是否全屏
        fullscreen:false,
      // 是否展示搜索框
        showSearch:false,
        // 搜索框绑定的值
        keyWord:null,
        restaurants: [],
    }
  },
  computed:{
    ...mapState(['userInfo','collapse','pathArr'])
  },
  mounted() {
    this.restaurants = homeRouter;
  },
  methods:{
    ...mapActions(["change_collapse"]),
    logout(){
      this.$router.push("/login")
    },
    // 浏览器全屏时间
    toggleFullScreen(){
      let element = document.documentElement;
      if (this.fullscreen) {
          if (document.exitFullscreen) {
              document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
          }
      } else {
          if (element.requestFullscreen) {
              element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
              element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
              element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
              // IE11
              element.msRequestFullscreen();
          }
      }
      this.fullscreen = !this.fullscreen;
    },
    toggleSearch(){
      this.showSearch = !this.showSearch
    },
    // 查询搜索匹配导航
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    // 过滤搜素导航
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)&&restaurant.meta.isNav;
      };
    },
    // 选择搜索出的某项
    handleSelect(item){
      this.$router.push(item.path)
      
    }
  }
}
</script>

<style scoped="scoped">
.header_bar{
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding:0 30px;
  background: #EEF4F9;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
.header_left>.header_nav_box{
  padding: 0 30px;
}
.side_btn{
  font-size: 24px;
  cursor: pointer;
}
.header_right>.tools_box{
  padding: 0 20px;

}
.header_right>.tools_box>i{
  font-size: 24px;
  cursor: pointer;
  margin-right: 12px;
  
}
.search_box{
  width: 0;
  overflow: hidden;
  transition: all 0.6s;
}
.header_right>.search_box_active{
  width: 180px;
  transition: all 0.6s;
}

.search_input{
  width: 0px;
  overflow: hidden;
  transition: all 0.6s;
}

.search_box>.search_input{
  width: 180px;
 
}

.header_avatar{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-position: center;
  background-size: contain;
}



.user_box{

  width: 326px;
   background-color: none;
  background: transparent;
  margin-bottom: 0;
  padding-bottom: 0;
  border: none;
}
.user_info{
   background-image: url('../../assets/img/user/user_card_bg.png');
    background-size: 100% 100%;
    transform: translateY(-10px);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    flex-direction: row;
    padding: 35px 20px 25px 30px;
    z-index: 100;
    position: relative;
}
  .user_info> .corner {
      position: absolute;
      right: 18px;
      top: -9px;
      width: 27px;
      height: 10px;
    }
  .user_info>.card_avatar{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    background-position: center;
    background-size: contain
  }
  .user_info>.user_name{
    color: #FFFFFF;
    padding: 0 10px;
  }
  .menu_list{
    padding-left: 35px;
    color: #596c8e;
    font-size: 14px;
    background: white;
    margin-top: -10px;
    
  }
  .menu_list>.menu_item{
      height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    
  }

  .menu_item>i{
    font-size: 16px;
    margin-right: 4px;
  }

</style>