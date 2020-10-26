<template>
  <div>
      <div class="flex-x">
          <div @click="preMon">上个月</div>
          <div>{{currentYear}}年-</div>
          <div>{{currentMon}}月</div>
          <div @click="nextMon">下个月</div>
      </div>
      <ul class="calendar_box flex-x">
          <li v-for="(item,index) in weeks" :key="'no'+index">{{item}}</li>
          <li v-for="(item,index) in days" :key="index" :class="{'today':activeMon&&todayDay==item.label}" @click="selectDay(item)">
              <!-- <span>{{item.label}}</span> -->
              <span>{{item.value}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"Calendar",
    data(){
        return{
            // 现实时间的几号
            todayDay:1,
            // 日历的月份
            currentMon:1,
            // 日历的年份
            currentYear:1970,
            weeks:["日","一","二","三","四","五","六"],
            // 日历的日期数组
            days:[],
            // 日历是否为现在的这个月
            activeMon:false
        }
    },
    props:{
        counts:{
            type:Array
        }
    },
    created(){
        let now = new Date()
        this.currentYear = now.getFullYear()
        this.currentMon = now.getMonth()+1
        this.todayDay = now.getDate()
        this.calendarInit()
    },
    methods:{
        // 初始化日历
        calendarInit(){
            let now = new Date()
            if(this.currentYear==now.getFullYear()&&this.currentMon==now.getMonth()+1){
                this.activeMon = true
            }else{
                this.activeMon = false
            }
            // 当前月的开时间
            let monStart =  new Date(this.currentYear+"/"+this.currentMon+"/"+1)
            // 当前月的1号为周几
            let monStartWeek = monStart.getDay()
            // 当前月有多少天
            let MonDaysTotal  = new Date(this.currentYear,this.currentMon,0).getDate()
            let arr = []
            for (let i = 0; i < monStartWeek; i++) {
                arr.push({
                    "label":"",
                    "value":0
                })   
            }
            for (let i = 1; i <= MonDaysTotal; i++) {
                 arr.push({
                    "label":i,
                    "value":this.counts[i-1]
                 })
            }
            this.days = arr
        },
        // 下个月
        nextMon(){
            if(this.currentMon<12){
                this.currentMon++
            }else{
                this.currentMon=1
                this.currentYear++
            }
            // 
            this.$emit("nextMon",{
                "year":this.currentYear,
                "mon":this.currentMon
            })
            this.calendarInit()
        },
        // 上个月
        preMon(){
            if(this.currentMon>1){
                this.currentMon--
            }else{
                this.currentMon = 12
                this.currentYear--
            }
            this.$emit("preMon",{
                "year":this.currentYear,
                "mon":this.currentMon
            })
            this.calendarInit()
        },
        // 点击某天
        selectDay(item){
            let params = {
                "year":this.currentYear,
                "mon":this.currentMon,
                "day":item.label
            }
            this.$emit("selectDay",params)
        }
    }
}
</script>

<style scoped="scoped">
.calendar_box{
   /* width: 300px; */
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
}
.calendar_box>li{
    width: 14.28%;
    text-align: center ;
}
.calendar_box>.today{
    color: red;
}
</style>