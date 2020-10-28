<template>
  <div>
       <!-- <SearchBar @search="search_list" @addItem="add_one"></SearchBar> -->
      <el-table
      :data="list"
      size="small"
      highlight-current-row
      style="width: 100%;"
      :row-style="{height:'60px'}"
    >
      <el-table-column type="index" width="80" label="ID" align="center"></el-table-column>
      <el-table-column prop="create_time" label="创建时间" :formatter="formatTime" sortable></el-table-column>
      <!-- <el-table-column prop="create_time" label="更新时间" :formatter="formatTime" sortable></el-table-column> -->
      <el-table-column prop="title" label="标题"  sortable></el-table-column>
      <el-table-column label="缩略图"  sortable>
        <template slot-scope="scope">
            <el-image 
            style="width:120px;height:80px"
            :src="scope.row.image" 
            :preview-src-list="[scope.row.image]">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="intro" label="简介"  width="400"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>

      <el-table-column prop="type" label="类型" :formatter="formatClassicType"  width="80"></el-table-column>

      <el-table-column  label="是否推荐" width="80">
        <template slot-scope="scope">
            <el-tag :type="scope.row.is_recommend?'success':'info'">{{scope.row.is_recommend?"推荐中":"未推荐"}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="like_count" label="收藏数" width="80" align="center"></el-table-column>      
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit_it(scope.row.id)" size="small" plain>编辑</el-button>
          <el-button type="danger" @click="del_it(scope.row.id)" size="small" plain>删除</el-button>
        </template>
      </el-table-column> 
    </el-table>
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
        size:10,
        key:"",
        keyword:"",
        list:[]
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
      formatClassicType(row, column){
          switch (row.type) {
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
      }
    } 
}
</script>

<style scoped="scoped">

</style>