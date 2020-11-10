<template>
  <div>
    <div class="letter_bg flex-x flex-x-between" v-if="show_bg">
      <img src="../../../../assets/img/past.png" alt="" class="letter_type">
      
      <div class="bg_right flex-y flex-y-center flex-x-center">
        <div class="total_box flex-x flex-y-center">
          <span>累计完成投递 </span>
          <CountTo :startVal='start' :endVal='total' :duration='2000' class="count_box"/>
          <span>封信件 </span>
        </div>
        <div class="post_word flex-x">
    漆黑的夜晚，远方的灯光。颤抖的双脚，汗湿的外套。只能一个人继续孤身闯荡。熟悉的陌生人，在门前徜徉，磨损的信件来自远方。孤独的邮差，没有自己的信。呆呆看枝头树叶变黄，穿越过多少城市和村庄，废气的污浊，鲜花的芬芳，看过多少脸庞期盼或是失望。
        </div>
        <div @click="close_bg" class="close_bg">
          查看详情
        </div>
      </div>
      <img src="../../../../assets/img/post_man2.png" alt="" class="letter_con_bg">
    </div>
    <div v-else>
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

   
  </div>
</template>

<script>
import CountTo from 'vue-count-to';
import {LetterModel} from "@/model/letter"
import LetterItem from "@/components/common/LetterItem/LetterItem"
import {letterMixin} from "./letterMixin"
export default {
  name:"letterPast",
  mixins:[letterMixin],
  components:{
    LetterItem,CountTo
  },
  data(){
    return{
      keyword:"past",
    
    }
  },
  methods:{

  }


}
</script>
<style scoped="scoped">
.letter_bg{
  position: relative;
  /* padding-right:80px; */
}
.letter_con_bg{
  width: 750px;
  height:750px;
}
.letter_bg>.bg_right{
    padding-left: 80px;
}
.letter_bg>.letter_type{
  position: absolute;
  top: 30px;
  left: 30px;
  width: 160px;
}
.total_box{
  padding: 60px 0;
}
.total_box>span{
  font-size: 16px;
}
.total_box>.count_box{
  font-size: 30px;
  padding: 0 10px;
  color: #EB8200;
  font-weight: bold;
}
.post_word{
  width: 600px;
  font-size: 16px;
  font-weight: bold;
  line-height: 40px;
  text-indent: 32px;
}
.close_bg{
  margin: 60px 0;
  padding: 10px 50px;
  border-radius: 30px;
  background: #EB8200;
  color: #FFFFFF;
  cursor: pointer;
}

  .letter_list{
    flex-wrap: wrap;
  }
</style>