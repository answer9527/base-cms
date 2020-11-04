<template>
  <div>
      <div class="search_row flex-x flex-x-end">
        <el-input placeholder="请输入搜索内容" class="search_item" style="width:240px" v-model="keyword" clearable></el-input>
        <el-button type="primary" class="search_item" @click="search_list">搜索一下</el-button>
        <el-button type="primary" class="search_item" @click="reset_search">重置条件</el-button>
        <el-button type="primary" class="search_item" @click="open_add">新增</el-button>
      </div>
      <div>
          <ul class="flex-x flex-y-center sentence_list">
              <li v-for="(item,index) in list" :key="index">
                  <Sentence :txt="item.txt" :id="item.id"/>
              </li>
          </ul>
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
        <el-dialog title="新增网抑" :center="true" :visible.sync="dialogVisible">
            <div>
                <div class="flex-x flex-y-center form_row">
                    <label for="" class="form_name">网抑：</label>
                    <el-input class="form_input" placeholder="请输入网抑文字" type="textarea" v-model="addForm.txt" :rows="4"></el-input>
                </div>
            </div>
            <div class="flex-x flex-x-center dialog_footer"> 
                <h-button @click.native="confirm_add_one">确认</h-button>
                <h-button type="danger" @click.native="close_add">取消</h-button>
            </div>
        </el-dialog>

  </div>
</template>

<script>
import Sentence from "@/components/common/Sentence/Sentence"
import {SentenceModel} from "@/model/sentence"
export default {
    name:"sentence",
    data(){
        return{
            total:0,
            page:1,
            size:20,
            keyword:null,
            addForm:{
                txt:'',
                image:null
            },
            list:[],
            dialogVisible:false
        }
    },
    created(){
        this.get_list()   
    },
    components:{
        Sentence
    },
    methods:{
        get_list(){
            let params = {
                "page":this.page,
                "size":this.size,
                "keyword":this.keyword
            }
            SentenceModel.getSentenceList(params).then(res=>{
                this.list = res.data.list
                this.total = res.data.total
            
            })
        },
        change_page(e){
            this.page = e
            this.get_list()
        },
        reset_search(){
            this.page = 1
            this.keyword=null
        },
        search_list(){
            this.change_page(1)
        },
        open_add(){
            this.addForm.txt=""
            this.dialogVisible = true
        },
        close_add(){
            this.dialogVisible = false
        },
        confirm_add_one(){
            SentenceModel.insertSentence(this.addForm).then(res=>{
                this.$message.success(res.message)
                this.close_add()
                this.get_list()
            })
        },

    }
}
</script>

<style scoped="scoped">
.sentence_list{
    flex-wrap: wrap;
}
.search_row{

  padding: 6px 160px;
  z-index: 99999;
  background: #F5F5F5;
  
}
.search_row>.search_item{
  margin-left: 10px;
}

.form_row>.form_name{
    width: 80px;
    font-size: 24px;
}
.dialog_footer{
    padding: 20px 0;
}

</style>