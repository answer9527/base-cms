<template>
  <div>
      <div>
        查询
      </div>
      <div class="classic_list_con">
        <ul class="classic_list flex-x flex-x-center">
          <li class="classic_card" v-for="(item,index) in list" :key="index" @mouseenter="hoverIn($event,index)" @mouseleave="hoverOut">
              <div class="card_top">
                <el-image 
                  class="classic_image"
                  :src="item.image" 
                  fit="none"
                  :preview-src-list="[item.image]">
                </el-image>
                <div class="card_tool flex-x flex-x-end">
                  <!-- <div class="tool_left">
                    <span class="edit_tag">编辑</span>
                  </div> -->
                  <div class="tool_right">
                    <span class="recommend_tag" v-if="item.is_recommend">推荐</span>
                    <span class="type_tag">{{item.type|formatClassicType}}</span>
                  </div>
                </div>
              </div>
              <div class="classic_info">
                <div class="classic_title">{{item.title}}</div>
                <div class="classic_intro">{{item.intro}}</div>
                <div class="classic_like-count">
                  <span v-if="item.like_count">{{item.like_count}}人喜欢</span>
                  <span v-else>暂无人喜欢</span>
                </div>
                <span class="edit_btn" :class="{'active_edit_btn':hover_index==index}"  @click="edit_it(item.id)"></span>
              </div>
          </li>
        </ul>
      </div>
    <div>
        <el-pagination
            :page-size="size"
            :pager-count="11"
            layout="prev, pager, next"
            :total="total"
            background
            @current-change = change_page
            :current-page.sync="page"
            style="text-align:center"
        >
        </el-pagination>
    </div>
  </div>
</template>

<script>
import {ClassicModel} from "@/model/classic.js"
import { Http } from '../../../../utils/http'
export default {
    name:"classicList",
    data(){
      return{
        total:0,
        page:1,
        size:12,
        key:"",
        keyword:"",
        list:[],
        hover_index:-1
      }
    },
    created(){
    
      this.get_list()
    },
    components:{
     
    },
    methods:{
      // 格式化时间
      formatTime(row, column) {
          return this.$common.formatTime(row.createTime)
      },
      // 格式化classic类型

      // 获取列表
      get_list(){
        let params = {
          "page":this.page,
          "size":this.size,
          "key":this.key,
          "keyword":this.keyword

        }
        ClassicModel.getByListType(params).then(res=>{
          this.list = res.data.list
          this.total = res.data.total
        })
      },
      // 分页
      change_page(num){
        this.page = num
        this.get_list()
      },
      // 按条件查询列表
      search_list(keyword){
        this.page = 1;
        this.keyword = keyword
        this.get_list()
      },
      // 删除
      del_it(id){
        ClassicModel.deleteClassic({id}).then(res=>{
          this.$message.success(res.message)
          this.get_list()
        })
      },
      edit_it(id){
        this.$router.push("/classic/detail/"+id)
      },
      // 鼠标移入
      hoverIn(e,i){
        this.hover_index = i
      },
      // 鼠标移出
      hoverOut(e){
        this.hover_index = -1
      }
    },
    filters:{
        formatClassicType(type){
          switch (type) {
            case 100:
              return "电影"
              break;
            case 200:
              return "音乐"
              break;
            case 300:
              return "诗句"
              break;
            case 400:
              return "文章"
              break;
            case 500:
              return "故事"
              break;
            default:
              return "杂记"
              break;
          }
      },
    } 
}
</script>

<style scoped="scoped">

.classic_list_con{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.classic_list{
  flex-wrap: wrap;

}
.classic_card{
  width: 300px;
  margin: 20px;
  
}

.classic_card>.card_top{
  width: 100%;
  height: 300px;
  position: relative;
 
}
.classic_card>.card_top>.card_tool{
    width: 100%;
    padding: 12px 16px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
}
.card_tool>div>span{
    font-size: 12px;
    padding:2px 8px;
     border-radius: 10px;
}
/* .card_tool>.tool_left>.edit_tag{
    border: 1px solid #a3d3ff;
    background-color:#e8f4ff;
    color: #1890ff;
     border-radius: 0;
} */

.card_tool>.tool_right>.recommend_tag{
    border: 1px solid #13ce66;
    background-color:#e7faf0 ;
    color: #13ce66;
}
.card_tool>.tool_right>.type_tag{
    border: 1px solid #ff4d4f;
    background-color:#ffeded ;
    color: #ff4d4f;
}
.card_top>.classic_image{
  height: 100%;
  width: 100%;
   border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.classic_card>.classic_info{
   background: #FFFFFF;
  border: 1px solid #cccccc;
  border-top: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 16px;
  box-sizing: border-box;
  position: relative;


}

.classic_card>.classic_info>.classic_title{
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  padding: 8px 0;
    overflow: hidden;
  text-overflow:ellipsis; 
  white-space: nowrap;
}
.classic_card>.classic_info>.classic_intro{
  text-align: center;
  font-size: 12px;
  color: #808695;
  overflow: hidden;
  text-overflow:ellipsis; 
  white-space: nowrap;
}

.classic_card>.classic_info>.classic_like-count{
  text-align: center;
  padding-top: 10px;
}
.classic_card>.classic_info>.classic_like-count>span{
  color: #FF6700;
  font-size: 12px;

  
}
.classic_card>.classic_info>.edit_btn{
  display: inline-block;
  position: absolute;
  bottom: 8px;
  right:0;
  width: 0;
  height: 32px;
  background: url(../../../../assets/img/edit_card_icon.png);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}
.classic_card>.classic_info>.active_edit_btn{
  right: 16px;
  width: 32px;
}
</style>