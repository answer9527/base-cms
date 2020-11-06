<template>
  <div>流金岁月</div>
</template>

<script>
import {LetterModel} from "@/model/letter"
export default {
  name:"letterPast",
  data(){
    return{
      page:1,
      size:10,
      keyword:"past"
    }
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
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>