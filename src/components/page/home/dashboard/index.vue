<template>
  <div class="dashboard_page">
    <v-Calendar :counts="counts" @nextMon="nextMon" @preMon="preMon" @selectDay="selectDay"></v-Calendar>
  </div>
</template>

<script>
import {TestModel} from "@/model/test"
import Calendar from "../../../common/Calendar/Calendar"
export default {
  name:"Dashboard",
  data(){
    return{
      counts:[0,0,0,2,3,3,3,4,4,4,0,5,5,6,6,6,7,7,0,8,8,8,9,9,9,10,10,10,11,11,11]
    }
  },
  components:{
    "v-Calendar":Calendar
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
    /* background: #F5F5F5; */
  }
</style>