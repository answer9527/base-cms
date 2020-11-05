<template>
  <div>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <Suggest :suggest="item" @replyIt="replyIt"/>
        </li>
      </ul>
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
      size:10,
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
    }
  }
}
</script>

<style>

</style>