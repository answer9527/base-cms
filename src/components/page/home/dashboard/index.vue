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
          <v-Count-Box :value="item.value" :unit="item.unit" :name="item.name" :icon="item.icon"/>
        </li>
      </ul>
    </div>
    <div class="page_row_three flex-x flex-x-between">
      
      <div class="three_mindder flex-y flex-y-between flex-x-between">
        <v-Calendar :counts="counts" @nextMon="nextMon" @preMon="preMon" @selectDay="selectDay" width="100%" height="360px"></v-Calendar>
        <div class="mindder_bottom"></div>
      </div>
      <div class="three_right">
         <v-Classic-Pie />
  
      </div>
      <v-Drag-Classic class="drag_list"/>
     
      
    </div>

  </div>
</template>

<script>
import {TestModel} from "@/model/test"
import {OtherModel} from "@/model/other"
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
      counts:[0,0,0,2,3,3,3,4,4,4,0,5,5,6,6,6,7,7,0,8,8,8,9,9,9,10,10,10,11,11,11],
      // 各项统计结果
      count_list:[

        // {
        //   name:"累计注册量",
        //   value:100,
        //   unit:"人",
        //   icon:"el-icon-user-solid"
        // }

      ],
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
  },
  methods:{
    // 测试
    test(){
      TestModel.test({}).then(res=>{
        console.log(res)
      })
    },
    nextMon(e){
      TestModel.testCalendar().then(res=>{
        this.counts=res.data.counts
        
      })
    },
    preMon(e){
      TestModel.testCalendar().then(res=>{
        this.counts=res.data.counts
      })
    },
    selectDay(e){

      console.log(e)
    },
    get_sort_total_list(){
      OtherModel.getDashboardSortTotal().then(res=>{
        this.count_list = res.data
      })
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
     background: #FFFFFF;
     border-radius:5px;

  }
  .three_right{

    background:#FFFFFF; 
    width:30%;
    border-radius:5px;
  }
</style>