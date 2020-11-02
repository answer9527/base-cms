<template>
  <div class="classic_list_page">
      <div class="search_row flex-x flex-x-end">
        <el-input placeholder="请输入搜索内容" class="search_item" style="width:240px" v-model="keyword" clearable></el-input>
        <el-select  placeholder="请选择类型" v-model="key" class="search_item" clearable>
          <el-option :label="item.label" :value="item.value" v-for="(item,index) in $common.classicType" :key="index" ></el-option>
        </el-select>
        <el-button type="primary" class="search_item" @click="search_list">搜索一下</el-button>
        <el-button type="primary" class="search_item" @click="reset_search">重置条件</el-button>
      </div>
      <div class="classic_list_con">
        <ul class="classic_list flex-x flex-x-center">
          <ClassicCard v-for="(item,index) in list" :key="index" :classic="item" @Preview="preview_classic"/>
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
    <el-dialog title="文章详情" :center="true" :visible.sync="dialogVisible" class="preview_dialog"  top="15px" >
        <div class="flex-x flex-x-around dialog_in" v-if="dialogVisible">
          <div class="phone">
              <div class="phone_screen">
                  <PhonePage :classicId="active_id" />
              </div>
          </div>
          <div class="line"></div>
          <div class="comment_block">
              <div>
                  <CommentList :classicId="active_id"/>
              </div>
          </div>
        </div>
        <div class="flex-x flex-x-center dialog_footer"> 
          <h-button @click.native="edit_it">编  辑</h-button>
          <h-button type="danger" @click.native="del_it">删  除</h-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
import {ClassicModel} from "@/model/classic.js"
import { Http } from '../../../../utils/http'
import ClassicCard from "@/components/common/Classic/Card"
import PhonePage from "@/components/common/Classic/PhonePage"
import CommentList from "@/components/common/Classic/CommentList"
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
        // 正在查看编辑的classic的id
        active_id:1,
        dialogVisible:false,
        comment_list:[]


      }
    },
    created(){
    
      this.get_list()
    },
    components:{
      ClassicCard,PhonePage,CommentList
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
      // 编辑预览
      preview_classic(e){
        this.active_id = e;
        this.dialogVisible = true
      },
      // 编辑某个
      edit_it(){
        this.dialogVisible = false
        setTimeout(() => {
          this.$router.push("/classic/detail/"+this.active_id)
        }, 200);  
      },
      // 删除某个
      del_it(){
          this.$confirmAlert().then(()=>{
              ClassicModel.deleteClassic({id:this.active_id}).then(res=>{
                  this.$message.success(res.message)
                  this.dialogVisible = false
                  this.get_list()
              })
          }).catch(()=>{
              this.$message.info("取消操作！")
          })
      },
      // 重置搜索条件
      reset_search(){
        this.key=""
        this.keyword=""
      },
      // 点击搜索
      search_list(){
        this.page =1
        this.get_list()
      }

    },

}
</script>

<style scoped="scoped">
.classic_list_page{
  position: relative;
}
.search_row{

  padding: 6px 160px;
  z-index: 99999;
  background: #F5F5F5;
  
}
.search_row>.search_item{
  margin-left: 10px;
}
.classic_list_con{
  padding-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.classic_list{
  flex-wrap: wrap;

}


.phone{
    margin: 20px 20px 0;
    background: url(../../../../assets/img/phone.png);
    background-repeat: no-repeat;
    background-size: 100%;
    /* height: 100%; */
    padding: 100px 12px;
    box-sizing: border-box;
    /* height: 800px; */
    width: 356px;
}
.phone_screen{
    background: #FFFFFF;
    height:568px ;
    width: 330px;
}
.line{
  height:auto;
  width: 1.5px;
  background: #cccccc;
}

.comment_block{
    height: 800px;
    width: 500px;
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
.dialog_footer{
  padding: 6px 0;
}
</style>