<template>
  <div>
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
      // counts:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      counts:[2,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11]
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
      this.counts = [...this.counts2]
      console.log(e)
    }
  }
}
</script>

<style>

</style>