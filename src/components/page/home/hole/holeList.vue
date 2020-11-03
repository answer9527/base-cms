<template>
  <div class="hole_list_page">
    <el-table
      :data="hole_list"
      highlight-current-row
      :row-style="{height:'60px'}"
      size="small"
    >
      <el-table-column type="index"  align="center"></el-table-column>
      <el-table-column prop="create_time" label="发表时间" :formatter="formatTime" sortable ></el-table-column>
       <el-table-column prop="userName" label="作者" sortable></el-table-column>
      <el-table-column label="头像" sortable>
          <template slot-scope="scope">
              <el-avatar :src="scope.row.avatarUrl"></el-avatar>
          </template>
      </el-table-column>
      
      <el-table-column label="性别" sortable>
        <template slot-scope="scope">
          <el-tag
            effect="dark"
            :type="scope.row.gender==1?'info':'success'"
          >{{scope.row.gender==1?'男性':'女性'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="评论可见" >
           <template slot-scope="scope">
          <el-tag
            effect="dark"
            :type="scope.row.commentVisible?'success':'info'"
          >{{scope.row.commentVisible?'可见':'不可见'}}</el-tag>
        </template>
       </el-table-column>    
      <el-table-column label="能否评论" >
        <template slot-scope="scope">
          <el-tag
            effect="dark"
            :type="scope.row.canComment?'success':'info'"
          >{{scope.row.canComment?'能':'否'}}</el-tag>
        </template>
      </el-table-column>  
      <el-table-column label="权限">
        <template slot-scope="scope">
          <el-tag
            effect="dark"
            :type="scope.row.type==1?'success':scope.row.type==2?'warning':'info'"
          >{{scope.row.type==1?'公开':scope.row.type==2?'匿名':'仅自己可见'}}</el-tag>
        </template>
      </el-table-column>  
      <el-table-column prop="title" label="标题" sortable ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="show_detail(scope.row)" size="small" plain>查看详情</el-button>
          <el-button type="danger" @click="del_it(scope.row.id)" size="small" plain>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagin_row">
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
import {HoleModel} from "@/model/hole"
export default {
    name:'HoleList',
    data(){
        return{
        // 列表总条数
            total:0,
            // 当前页
            page:1,
            // 每页条数
            size:10,
            // 用户列表
            hole_list:[],
            // 搜索关键词
            keyword:"",
        }
    },
    created(){
       this.get_hole_list()
    },
    methods:{
               // 时间格式
        formatTime(row, column) {
            return this.$common.formatTime(row.createTime)
        },
        get_hole_list(){
            let params = {
                "page":this.page,
                "size":this.size
            }
            HoleModel.getHoleList(params).then(res=>{
                this.hole_list = res.data.list
                this.total = res.data.total
            })
        },
        change_page(num){
            this.page=num
            this.get_hole_list()
        },
        show_detail(item){
          console.log(item)
        },
        del_it(id){
          console.log(id)
        }

    }
}
</script>

<style scoped="hole_list_page">
  .hole_list_page{
    width: 100%;
    overflow: hidden;
  }
</style>