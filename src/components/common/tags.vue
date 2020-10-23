<template>
  <div>
        <ul>
            <li class="tags-li" v-for="(item,index) in tagsList"  :key="index">
                <router-link :to="item.path" class="tags-li-title">
                    {{item.title}}
                </router-link>
                <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
            </li>
        </ul>
        <div>
          <div @click="closeOther">关闭其他</div>
          <div @click="closeAll">关闭所有</div>
        </div>
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

<style>

</style>