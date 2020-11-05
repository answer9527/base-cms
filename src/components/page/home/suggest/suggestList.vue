<template>
  <div>
      <ul class="suggest_list flex-x">
        <li v-for="(item,index) in list" :key="index">
          <Suggest :suggest="item" @replyIt="replyIt"/>
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
</template>

<script>
import Suggest from "@/components/common/Suggest/Suggest"
import {SuggestModel} from "@/model/suggest"
export default {
  name:"SuggestList",
  data(){
    return{
      total:0,
      page:1,
      size:12,
      keyword:null,
      list:[]
    }
  },
  created(){
    this.get_suggest_list()
  },
  components:{
    Suggest
  },
  methods:{
    get_suggest_list(){
      let params = {
        "page":this.page,
        "size":this.size,
        "keyword":this.keyword
      }
      SuggestModel.getSuggestList(params).then(res=>{
        this.list = res.data.list
        this.total = res.data.total
      })
    },
    replyIt(params){
      SuggestModel.replySuggest(params).then(res=>{
        this.$message.success(res.message)
      })
    },
    change_page(e){
      this.page =e 
      this.get_suggest_list()
    }
  }
}
</script>

<style scoped="scoped">
.suggest_list{
  flex-wrap: wrap;
}
</style>