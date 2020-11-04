<template>
  <div class="menu-page" >
    <el-menu
      class="el-menu-box"
        :class="{'menu-collapse':collapse}"
        background-color="#192A5E"
        text-color="#C4C9D2"
        active-text-color="#1890FF"
        router
      :default-active="path"
      :collapse="collapse"
     
    >
       <!-- :style="{'width':collapse?'60px':'210px'}" -->
      <div class="cms_name" v-if="collapse">陈湖</div>
      <div class="cms_name" v-else>陈湖旧事</div>
      <template v-for="(item, index) in nav_list" >
        <el-menu-item
          :index="item.route"
          v-if="!item.children && item.isNav"
          :route="item.route"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
        <el-submenu :index="index+''" v-if="item.children && item.isNav">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
                :index="ite.route"
                v-for="(ite, idx) in item.children"
                :key="idx"
                v-if="ite.isNav"
            >
                <i :class="ite.icon"></i>
                <span slot="title">{{ ite.title }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
// 管理后台的菜单
import adminMenu from "../../config/stage/menu";
import {mapState} from "vuex"

export default {
  name: "SideBar",
  data() {
    return {
      path: "/home/dashboard",
      cmsName:"陈湖旧事",
      nav_list: [...adminMenu],
    };
  },
  computed:{
      ...mapState(['collapse'])
  },
  methods: {
    handleSelect(key, keyPath) {
        // let inx = key.indexOf(":")
        // let title = key.substr(0,inx)
        // let path = key.substr(inx+1)
        // console.log(this.formatWay(keyPath))
        // this.$router.push(path)
    },
    // // 格式化路径
    // formatWay(wayArr){
    //     let newArr = wayArr.map((item,index)=>{
    //         let obj = {}
    //         let inx = item.indexOf(":")
    //         obj.title = item.substr(0,inx)
    //         obj.path = item.substr(inx+1)
    //         return obj
    //     })
    //     return newArr
    // }
  },
  watch:{
    // 监听路由变化  
    $route(newValue, oldValue){
        this.path = newValue.path
    }
  }
};
</script>

<style scoped="scoped">



.menu-page{
    background: #192A5E;
    height: 100%;
    position: relative;
   
}
   
/* 菜单默认展开 */
.menu-page>.el-menu-box{
    width: 210px;
    height: 100%;
    transition: all .1s linear !important;
}
/* 收缩后的菜单宽度 */
.menu-page>.menu-collapse{
  width: 65px;
}
.cms_name{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 104px;
    font-size: 24px;
    background: #122150;
    color: #FFFFFF;
    letter-spacing: 10px;
}
.popper{
    background: red;
}
</style>