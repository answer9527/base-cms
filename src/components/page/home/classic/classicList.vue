<template>
  <div>
      <div>
        查询
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
    <Preview ref="preview" :classicId="active_id"/>
  </div>
</template>

<script>
import {ClassicModel} from "@/model/classic.js"
import { Http } from '../../../../utils/http'
import ClassicCard from "@/components/common/Classic/Card"
import Preview from "@/components/common/Classic/Preview"
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
        active_id:1
      }
    },
    created(){
    
      this.get_list()
    },
    components:{
      ClassicCard,Preview
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
        this.$refs.preview.openDialog()
      }

    },

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

</style>