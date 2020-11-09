<template>
  <div>
    <div class="letter_bg flex-x flex-x-between" v-if="show_bg">
      <img src="../../../../assets/img/future.png" alt="" class="letter_type">
      <img src="../../../../assets/img/post_man.png" alt="" class="letter_con_bg">
      <div class="bg_right flex-y flex-y-center flex-x-center">
        <div class="total_box flex-x flex-y-center">
          <span>现有 </span>
          <CountTo :startVal='start' :endVal='total' :duration='2000' class="count_box"/>
          <span>封信件投递中...... </span>
        </div>
        <div class="post_word flex-x">
          你亲手交出的信，
          永远是别人的心事。
          读信是一种幸福，
          但送信却很孤独。
          你背着沉重的邮袋，
          走过岁月,走过沧桑，
          走过坎坷不平的漫漫长途。
          里面装着对未来的憧憬，
          里面装着对过往的感慨，
          里面装着对某人的思念等等。
          你走过迷朦的雨季，
          走过炽热的夏日，
          你走过丰硕的金秋，
          走过刺骨的冬寒。
          不论刮风下雨，
          不论雪飘霜冻。
          你在漫长的岁月长河里不断登攀，
          象绿衣信使般奋力前行……
        </div>
        <div @click="close_bg" class="close_bg">
          查看详情
        </div>
      </div>
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
  name:"letterFuture",
  mixins:[letterMixin],
  components:{
    LetterItem,
    CountTo
  },
  data(){
    return{
      show_bg:true
       
    }

  },
  methods:{
    close_bg(){
      this.show_bg = false
    }
  }
  
}
</script>

<style scoped="scoped">
.letter_bg{
  position: relative;
  padding-right:80px;
}
.letter_con_bg{
  width: 750px;
  height:750px;
}
.letter_bg>.bg_right{
  
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