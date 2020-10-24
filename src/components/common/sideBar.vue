<template>
  <div class="menu-page">
    <el-menu
      class="el-menu-box"
      router
      @select="handleSelect"
      :default-active="path"
      style="height: 100%"
    >
      <div class="cms_name">{{cmsName}}</div>
      <div v-for="(item, index) in nav_list" :key="index">
        <el-menu-item
          :index="item.route"
          v-if="!item.children && item.isNav"
          :route="item.route"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
        <el-submenu :index="index + ''" v-if="item.children && item.isNav">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            :index="ite.route"
            v-for="(ite, idx) in item.children"
            :key="idx"
            v-if="ite.isNav"
          >
            <i :class="ite.icon"></i>
            <span slot="title">{{ ite.title }}</span>
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
// 管理后台的菜单
import adminMenu from "../../config/stage/menu";
export default {
  name: "SideBar",
  data() {
    return {
      path: "/",
      cmsName:"后台管理系统",
      nav_list: [...adminMenu],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped="scoped">
.menu-page{
    height: 100%;
}
.cms_name{
    text-align: center;
    padding: 20px 0;
    font-size: 18px;
    background: #409EFF;
    color: #FFFFFF;
    letter-spacing: 2px;
}
</style>