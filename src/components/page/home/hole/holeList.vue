<template>
  <div class="hole_list_page">
    <el-table
      :data="hole_list"
      highlight-current-row
      style="width: 100%;"
      :row-style="{height:'60px'}"
      size="small"
    >
      <el-table-column type="index" width="80" align="center"></el-table-column>
      <el-table-column prop="create_time" label="注册时间" :formatter="formatTime" sortable></el-table-column>
      <el-table-column prop="id" label="id"></el-table-column>
       <el-table-column prop="userName" label="作者" sortable></el-table-column>
      <el-table-column label="头像" sortable>
          <template slot-scope="scope">
              <el-avatar :src="scope.row.avatarUrl"></el-avatar>
          </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" sortable></el-table-column>
      <!-- <el-table-column prop="content" label="内容" sortable></el-table-column> -->
      <el-table-column label="性别" sortable>
        <template slot-scope="scope">
          <el-tag
            effect="dark"
            :type="scope.row.gender==1?'info':'success'"
          >{{scope.row.gender==1?'男性':'女性'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="用户类型">
           <template slot-scope="scope">
          <el-tag
            effect="dark"
            :type="scope.row.account?'info':'success'"
          >{{scope.row.account?'非微信用户':'微信用户'}}</el-tag>
        </template>
       </el-table-column>    
      <el-table-column label="操作" width="400">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit_it(scope.row)" size="small" plain>编辑</el-button>
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
    }
}
</script>

<style>

</style>