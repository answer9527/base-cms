<template>
  <div>
    <ul class="flex-x letter_list">
      <li v-for="(item,index) in list" :key="index">
         <LetterItem :letterInfo="item" :type="keyword"/>
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
import {LetterModel} from "@/model/letter"
import LetterItem from "@/components/common/LetterItem/LetterItem"
import {letterMixin} from "./letterMixin"
export default {
  name:"letterFuture",
  mixins:[letterMixin],
  components:{
    LetterItem
  },
}
</script>

<style scoped="scoped">
.letter_list{
  flex-wrap: wrap;
}
</style>