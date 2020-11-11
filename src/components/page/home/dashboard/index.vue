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
          <v-Count-Box :count="item.count" :unit="item.unit" :intro="item.intro" :iconClass="item.iconClass"/>
        </li>
      </ul>
    </div>
    <div class="page_row_three flex-x">
      <v-Calendar :counts="counts" @nextMon="nextMon" @preMon="preMon" @selectDay="selectDay" width="400px" height="420px"></v-Calendar>
      <v-Drag-Classic/>
    </div>
    
  </div>
</template>

<script>
import {TestModel} from "@/model/test"
import Calendar from "@/components/common/Calendar/Calendar"
import CountBox from "@/components/common/CountBox/index"
import Hello from "@/components/common/Hello/index"
import Team from  "@/components/common/Team/index"
import DragClassic from "@/components/common/Classic/Drag"
export default {
  name:"Dashboard",
  data(){
    return{
      counts:[0,0,0,2,3,3,3,4,4,4,0,5,5,6,6,6,7,7,0,8,8,8,9,9,9,10,10,10,11,11,11],
      count_list:[
        {
          count:100,
          unit:"人",
          intro:"累计注册量",
          iconClass:"el-icon-user-solid"
        },
        {
          count:55,
          unit:"封",
          intro:"累计邮寄量",
          iconClass:"el-icon-s-promotion"
        },
        {
          count:300,
          unit:"个",
          intro:"累计树洞数",
          iconClass:"el-icon-s-opportunity"
        },
        {
          count:30,
          unit:"篇",
          intro:"累计收藏数",
          iconClass:"el-icon-s-claim"
        },
        {
          count:600,
          unit:"次",
          intro:"累计点赞数",
          iconClass:"el-icon-s-claim"
        }
      ]
    }
  },
  components:{
    "v-Calendar":Calendar,
    "v-Count-Box":CountBox,
    "v-hello":Hello,
    "v-team":Team,
    "v-Drag-Classic":DragClassic
  },
  created(){
    // this.test()
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
</style>