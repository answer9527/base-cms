<template>
  <div class="dashboard_page">
    <div>
      <ul class="flex-x flex-x-between count_box_row">
        <li v-for="(item,index) in count_list" :key="index">
          <v-Count-Box :count="item.count" :unit="item.unit" :intro="item.intro" :iconClass="item.iconClass"/>
        </li>
      </ul>
    </div>
    <v-Calendar :counts="counts" @nextMon="nextMon" @preMon="preMon" @selectDay="selectDay"></v-Calendar>
  </div>
</template>

<script>
import {TestModel} from "@/model/test"
import Calendar from "@/components/common/Calendar/Calendar"
import CountBox from "@/components/common/CountBox/index"
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

        }
      ]
    }
  },
  components:{
    "v-Calendar":Calendar,
    "v-Count-Box":CountBox
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
    padding: 10px  100px;
    /* background: #F5F5F5; */
  }
  .count_box_row>li{
    width: 22%;
  }
</style>