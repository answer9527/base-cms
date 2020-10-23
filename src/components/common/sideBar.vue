<template>
  <div>
    <el-menu

      class="el-menu-vertical-demo"
     router
      :default-active = "path"
      style="width:260px;height:900px"
    >
      <div v-for="(item, index) in nav_list" :key="index">
        <el-menu-item :index="item.route" v-if="!item.children && item.isNav" :route="item.route">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
        <el-submenu :index="index+''" v-if="item.children && item.isNav">
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
            <span slot="title">{{ite.title}}</span>
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import adminMenu from "../../config/stage/menu";
export default {
  name: "SideBar",
  data() {
    return {
        path: '',
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

<style>
</style>