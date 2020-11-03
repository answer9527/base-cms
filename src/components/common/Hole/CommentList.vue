<template>
      <div class="comment_box">
        <div class="comment_nav">相关评论<span v-if="total>0">({{total}}条)</span></div>
        <div class="root_comment_out" v-if="comment_list.length>0">
            <div class="root_comment" v-for="(item,index) in comment_list" :key="index">
              <Comment
                :commentId="item.id"
                :commentUid="item.uid"
                :userAvatar="item.userAvatar" 
                :userName="item.userName" 
                :content="item.content"
                :createTime="item.createTime"
                :childComment="item.child"
                @del_comment="del_comment"
              />
          </div>
          <div class="comment_pagin">
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
        <div class="no_more_box flex-y flex-y-center" v-else>
            <div class="no_more"></div>
            <div>暂无评论</div>
        </div>
      </div>
</template>

<script>
import {HoleModel} from "@/model/hole.js"
import Comment from "../Comment/Comment"
export default {
    name:"HoleComment",
    data(){
        return{
            page:1,
            size:10,
            total:0,
            comment_list:[]
        }
    },
    props:{
      holeId:{
        type:Number,
        default:1
      }
    },
    components:{
      Comment
    },
    created(){
      this.get_comment_list()
    },
    methods:{
      get_comment_list(){
        let params = {
          "key":this.holeId,
          "size":this.size,
          "page":this.page
        }
        HoleModel.get_Comment(params).then(res=>{
          this.total = res.data.total
          this.comment_list = res.data.list
        })
      },
      change_page(e){
        this.page = e
        this.get_comment_list()
      },
      del_comment(e){
        this.$confirmAlert("是否删除该条评论？").then(()=>{
          HoleModel.powerDelComment(e).then(res=>{
            this.$message.success(res.message)
            this.get_comment_list()
          })
          
        }).catch(()=>{
          this.$message.info("取消删除")
        })

      }
    },

}
</script>

<style scoped="scoped">
.comment_nav{
  font-size: 16px;
  font-weight: bold;
  padding: 20px 0;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 15px;

}
.comment_nav>span{
    font-size: 16px;
  font-weight: bold;
}
.comment_nav::before{
    content: " ";
    padding:0 4px;
    margin-right: 10px;
    border-radius: 5px;
    background: #FF8375;
    
}
.comment_pagin{
  padding: 10px 0;
}

.no_more_box{
    width: 100%;
    padding-bottom: 30px;
    
}
.no_more_box>div{
  font-size:16px;
  font-weight: bold;
}
.no_more{
    width: 200px;
    height: 200px;
    background: url(../../../assets/img/no_more.png);
    background-position: center;
    background-size: contain; 
}
</style>