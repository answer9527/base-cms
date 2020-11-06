<template>
  <div>
    <ul class="flex-x">
      <li v-for="(item,index) in list" :key="index">
         <LetterItem :letterInfo="item"/>
      </li>
    </ul>    
  </div>
</template>

<script>
import {LetterModel} from "@/model/letter"
import LetterItem from "@/components/common/LetterItem/LetterItem"
export default {
  name:"letterFuture",
  data(){
    return{
      total:0,
      page:1,
      size:10,
      keyword:"future",
      list:[]
    }
  },
  components:{
    LetterItem
  },
  created(){
    this.get_letter_list()
  },
  methods:{
    get_letter_list(){
      let params ={
        "page":this.page,
        "size":this.size,
        "keyword":this.keyword
      }
      LetterModel.getLetterList(params).then(res=>{
        this.list = res.data.list
        this.total = res.data.total
      })
    }
  }
}
</script>

<style>

</style>