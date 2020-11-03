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
      
      <el-table-column label="性别"   width="100">
        <template slot-scope="scope">
          <el-tag
            effect="dark"
            size="mini"
            :type="scope.row.gender==1?'success':'warning'"
          >{{scope.row.gender==1?'男性':'女性'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="评论可见"  width="100">
           <template slot-scope="scope">
          <el-tag
            effect="dark"
            size="mini"
            :type="scope.row.commentVisible?'success':'info'"
          >{{scope.row.commentVisible?'可见':'不可见'}}</el-tag>
        </template>
       </el-table-column>    
      <el-table-column label="能否评论" width="100">
        <template slot-scope="scope">
          <el-tag
            effect="dark"
            size="mini"
            :type="scope.row.canComment?'success':'info'"
          >{{scope.row.canComment?'允许':'不允许'}}</el-tag>
        </template>
      </el-table-column>  
      <el-table-column label="权限" >
        <template slot-scope="scope">
          <el-tag
            effect="dark"
            size="mini"
            :type="scope.row.type==1?'success':scope.row.type==2?'warning':'info'"
          >{{scope.row.type==1?'公开':scope.row.type==2?'匿名':'仅自己可见'}}</el-tag>
        </template>
      </el-table-column>  
      <el-table-column prop="title" label="标题" sortable width="300"></el-table-column>
      <el-table-column label="操作" width="300">
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

    <el-dialog :visible.sync="dialogDetail" title="树洞详情">
       <div class="flex-x flex-x-around dialog_in" v-if="dialogDetail">
          <div class="dialog_left">
            <div class="hole_title">{{hole_detail.title}}</div>
            <div class="hole_content">{{hole_detail.content}}</div>
          </div>
          <div class="line"></div>
          <div class="comment_block">
              <div>
                  <CommentList :holeId="hole_detail.id"/>
              </div>
          </div>
        </div>
    </el-dialog>
  </div>
</template>

<script>
import {HoleModel} from "@/model/hole"
import CommentList from "@/components/common/Hole/CommentList"
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
            dialogDetail:false,
            hole_detail:{},
        
        }
    },
    components:{
        CommentList
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
          this.hole_detail = item
          this.dialogDetail = true
        },
        del_it(id){
          this.$confirmAlert().then(()=>{
            HoleModel.powerDelHole({id}).then(res=>{
              this.$message.success(res.message)
              this.get_hole_list()
            })
          }).catch(()=>{
            this.$message.info("取消删除")
          })

        }

    }
}
</script>

<style scoped="hole_list_page">
  .hole_list_page{
    width: 100%;
    overflow: hidden;
  }
  .dialog_in{

  }
  .dialog_left{
    width: 50%;
  }
  .dialog_left>.hole_title{
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
  .dialog_left>.hole_content{
    padding: 20px;
    text-indent: 28px;

  }
  .line{
    width: 1px;
    background: #cccccc;
  }
  .comment_block{
    flex: 1;
    height: 600px;
    padding: 0 20px;
    overflow-y: scroll;

  }
          /*滚动条样式*/
.comment_block::-webkit-scrollbar {
    width: 4px;    
    /*height: 4px;*/
}
.comment_block::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
.comment_block::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);

}
</style>