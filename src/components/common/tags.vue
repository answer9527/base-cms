<template>
  <div class="tag_page flex-x flex-x-between">
        <ul class="flex-x">
            <li class="tags-li flex-x flex-y-center" v-for="(item,index) in tagsList"  :key="index" :class="{'active':isActive(item.path)}">
                <router-link :to="item.path" class="tags-li-title">
                    {{item.title}}
                </router-link>
                <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
            </li>
        </ul>
        <ul class="tags-all flex-x">
            <li class="tags-li" @click="closeOther">关闭其他</li>
            <li class="tags-li" @click="closeAll">关闭所有</li>
        </ul>
  </div>
</template>

<script>
import bus from "@/config/bus"
export default {
  name:"Tags",
  data(){
    return{
      tagsList:[]
    }
  },
  created(){
    // bus.$emit("tags",this.tagsList)
    this.setTags(this.$route)
  },
  methods:{
    isActive(path) {
        return path === this.$route.fullPath;
    },
    // 设置缓存的标签
    setTags(route){
      const isExist = this.tagsList.some(item => {
          return item.path === route.fullPath;
      })
      if(!isExist){
          if(this.tagsList.length >= 8){
              this.tagsList.shift();
          }
          this.tagsList.push({
              title: route.meta.title,
              path: route.fullPath,
              name: route.matched[1].components.default.name
          })
      }
      bus.$emit('tags', this.tagsList);
    },
    // 关闭单个标签
    closeTags(index) {
        const delItem = this.tagsList.splice(index, 1)[0];
        const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
        if (item) {
            delItem.path === this.$route.fullPath && this.$router.push(item.path);
        }else{
            this.$router.push('/');
        }
    },
    // 关闭其他标签
    closeOther(){
       const curItem = this.tagsList.filter(item => {
            return item.path === this.$route.fullPath;
        })
        this.tagsList = curItem;
    },
    // 关闭所有标签
    closeAll(){
      this.tagsList = [];
      this.$router.push('/');
    }

  },
  watch:{
    $route(newValue, oldValue){
        this.setTags(newValue);
    }
  }
}
</script>

<style scoped="scoped">
.tag_page{
    padding: 6px 0;
    box-shadow: 0 4px 4px rgba(0,0,0,.08);
}
.tags-li{
    margin-right: 8px;
    margin-left: 2px;
    padding:4px 8px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    cursor: pointer;
}
.tags-li .tags-li-title{
 padding: 0 8px;
 font-size: 12px;
}
.tags-all>.tags-li{
    color: #ffffff;
    background: #42B983;
    font-size: 14px;
    
}
.active{
    color: #ffffff;
    background: #42B983;
}
.active>.tags-li-title{
    color: #ffffff;
   
}
.tags-li-icon{
  

}
.tags-li-icon>i{
  font-size: 8px;
}
</style>