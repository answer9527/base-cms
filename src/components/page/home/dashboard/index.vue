<template>
  <div class="dashboard_page">
    <!-- 作者温馨提示展示 -->
    <div class="flex-x flex-x-between page_row_one">
      <v-hello class="hello_com"/>
      <v-team class="team_com"/>
    </div>
    <!-- 数据量的统计 -->
    <div>
      <ul class="flex-x flex-x-between count_box_row">
        <li v-for="(item,index) in count_list" :key="index">
          <v-Count-Box :value="item.value" :value2="item.value2" :unit="item.unit" :name="item.name" :icon="item.icon"/>
        </li>
      </ul>
    </div>
    <div class="page_row_three flex-x flex-x-between">
      
      <div class="three_mindder flex-y flex-y-between flex-x-between">
        <v-Calendar :counts="counts" @nextMon="nextMon" @preMon="preMon" @selectDay="selectDay" width="100%" height="360px" v-if="counts.length>0" ></v-Calendar>
        <div class="mindder_bottom">
          {{rand_sentence}}
        </div>
      </div>
      <div class="three_right">
         <v-Classic-Pie />
      </div>
      <v-Drag-Classic class="drag_list"/>
     
      
    </div>
    <el-dialog title="待寄信件" :visible.sync="letter_dialog">
      <div>
          <el-table
          :data="letter_list"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="id"
            width="80">
          </el-table-column>
          <el-table-column label="" width="80">
              <template slot-scope="scope">
                  <el-avatar :src="scope.row.avatarUrl"></el-avatar>
              </template>
          </el-table-column>
          <el-table-column
            prop="userName"
            label="创建人"
            width="180">
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱地址">
          </el-table-column>
          <el-table-column label="类型" width="80">
              <template slot-scope="scope">
                <el-tag
                  effect="dark"
                  size="mini"
                  :type="scope.row.type==1?'info':scope.row.type==2?'success':'warning'"
                >{{scope.row.type==1?'文字信':scope.row.type==2?'手抄信':'其他'}}</el-tag>
              </template>
          </el-table-column>
          <el-table-column label="投递状态" width="100">
              <template slot-scope="scope">
                <el-tag
                  effect="dark"
                  size="mini"
                  :type="scope.row.pending?'success':'info'"
                >{{scope.row.pending?'已投递':'未投递'}}</el-tag>
              </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" @click="send_letter(scope.row)" size="mini" plain :disabled="scope.row.pending">投递</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="letter_dialog = false">取 消</el-button>
        <el-button type="primary" @click="letter_dialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

import {TestModel} from "@/model/test"
import {OtherModel} from "@/model/other"
import {SentenceModel} from "@/model/sentence"
import {LetterModel} from "@/model/letter"

import Calendar from "@/components/common/Calendar/Calendar"
import CountBox from "@/components/common/CountBox/index"
import Hello from "@/components/common/Hello/index"
import Team from  "@/components/common/Team/index"
import DragClassic from "@/components/common/Classic/Drag"
import ClassicPie from "@/components/common/Classic/Pie"


export default {
  name:"Dashboard",
  data(){
    return{
      rand_sentence:"",
      counts:[
      ],
      // 各项统计结果
      count_list:[

        // {
        //   name:"累计注册量",
        //   value:100,
        //   unit:"人",
        //   icon:"el-icon-user-solid"
        // }

      ],
      y:new Date().getFullYear(),
      m:new Date().getMonth()+1,
      // 当日的信件的分页
      letter_page:1,
      letter_size:10,
      letter_dialog:false,
      letter_list:[]
      // 
     
    }
  },
  components:{
    "v-Calendar":Calendar,
    "v-Count-Box":CountBox,
    "v-hello":Hello,
    "v-team":Team,
    "v-Drag-Classic":DragClassic,
    "v-Classic-Pie":ClassicPie
  },
  created(){
    // this.test()
   this.get_sort_total_list()
   this.get_sentence_rand()
   this.get_month_count()
  
  },
  methods:{
    // 测试
    test(){
      TestModel.test({}).then(res=>{
        console.log(res)
      })
    },
    // 获取当前月份信件情况
    get_month_count(){
      let params = {
        "y":this.y,
        "m":this.m
      }
      LetterModel.getLetterMonthPlan(params).then(res=>{
        this.counts = res.data
      })
    },
    // 切换到下个月
    nextMon(e){
      this.y = e.year,
      this.m = e.mon
      this.get_month_count()

    },
    // 切换到上个月
    preMon(e){
      this.y = e.year,
      this.m = e.mon
      this.get_month_count()
    },
    // 点击日历天
    selectDay(e){
      let params = e;
      params.page = this.letter_page
      params.size = this.letter_size

      LetterModel.getLetterListByTime(params).then(res=>{
        this.letter_dialog = true
        this.letter_list = res.data.list
      })
    },
    // 获取统计数字量
    get_sort_total_list(){
      OtherModel.getDashboardSortTotal().then(res=>{
        this.count_list = res.data
      })
    },
    // 获取随机的网抑
    get_sentence_rand(){
      SentenceModel.getRandOne().then(res=>{
        this.rand_sentence = res.data.txt
      })
    },
    // 投递邮件
    send_letter(row){
      return false
    }

  }
}
</script>

<style scoped="scoped">
  .dashboard_page{
    padding: 0  10px;
    /* background: #F5F5F5; */
  }
  .page_row_one{
    width: 100%;
    padding: 10px 0 30px 0;
  }
  .page_row_one>.hello_com{
    width: 58%;
  }
  .page_row_one>.team_com{
    width: 40%;
  }
  .count_box_row>li{
    width: 19%;
  }

  .page_row_three{
    padding: 30px 0;
  }
  .drag_list{
    width:45%;

  }
  .three_mindder{
    width: 20%;
    
  }
   .three_mindder>.mindder_bottom{
     height: 180px;
     width: 100%;
     padding: 20px;
     box-sizing: border-box;
     background: #FFFFFF;
     border-radius:5px;
     font-size: 14px;
     text-align: center;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

  }
  .three_right{

    background:#FFFFFF; 
    width:30%;
    border-radius:5px;
  }
</style>