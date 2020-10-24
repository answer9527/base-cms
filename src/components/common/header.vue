<template>
  <div class="header_bar flex-x flex-x-between flex-y-center">
    <div class="header_left flex-x flex-y-center">
      <i class="side_btn el-icon-s-fold"></i>
      <div class="header_nav_box">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="header_right flex-x">
      <el-dropdown>
        <span class="el-dropdown-link flex-x flex-y-end">
          <div class="avatar" :style="{'backgroundImage':'url('+userInfo.avatarUrl+')'}"></div>  
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" style="padding:0 30px">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/login">退出登录</router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name:"cms-header",
  data(){
    return{
      
    }
  },
  computed:{
    ...mapState(['userInfo'])
  },
  methods:{

  }
}
</script>

<style scoped="scoped">
.header_bar{
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding:0 30px;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
.header_left>.header_nav_box{
  padding: 0 16px;
}
.side_btn{
  font-size: 24px;
  cursor: pointer;
}
.avatar{
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background-position: center;
  background-size: contain;
}
</style>