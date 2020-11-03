<template>
  <div class="user_list_page">
    <el-table
      :data="user_list"
      highlight-current-row
      style="width: 100%;"
      :row-style="{height:'60px'}"
      size="small"
    >
      <el-table-column type="index" width="80" align="center"></el-table-column>
      <el-table-column prop="create_time" label="注册时间" :formatter="formatTime" sortable></el-table-column>
      <el-table-column prop="id" label="用户id"></el-table-column>
      <el-table-column label="头像" sortable>
          <template slot-scope="scope">
              <el-avatar :src="scope.row.avatarUrl"></el-avatar>
          </template>
      </el-table-column>
      <el-table-column prop="userName" label="用户名" sortable></el-table-column>
      <el-table-column prop="account" label="登录账号" sortable></el-table-column>
      <el-table-column label="性别" sortable>
        <template slot-scope="scope">
          <el-tag
            effect="dark"
            :type="scope.row.gender==1?'info':'success'"
            size="mini"
          >{{scope.row.gender==1?'男性':'女性'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="用户类型">
           <template slot-scope="scope">
          <el-tag
            effect="dark"
            size="mini"
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
import {UserModel} from "@/model/user"
export default {
  name:"userList",
  data(){
    return{
      // 列表总条数
      total:0,
      // 当前页
      page:1,
      // 每页条数
      size:10,
      // 用户列表
      user_list:[],
      // 搜索关键词
      keyword:"",
      // 添加弹出框
      dialogAdd:false,
      // 编辑弹出框
      dialogEdit:false,
      // 表单label宽度
      formLabelWidth:"80px",
    }
  },
  created(){
    this.get_user_list()
  },
  methods:{
       // 时间格式
        formatTime(row, column) {
            return this.$common.formatTime(row.createTime)
        },
        // 获取列表
        get_user_list(){
            let params ={
                "page":this.page,
                "size":this.size,
                "keyword":this.keyword
            }
            UserModel.getList(params).then(res=>{
                this.user_list = res.data.list
                this.total = res.data.total
            })
        },

        // 改变分页
        change_page(num){
            this.page=num
            this.get_user_list()
        },
        // 搜索的
        search_list(keyword){
            this.keyword = keyword
            this.page =1;
            this.get_user_list()
        },
  }
}
</script>

<style scoped="scoped">
.user_list_page{

}
.user_list_page>.pagin_row{
  padding-top:20px;
}
</style>