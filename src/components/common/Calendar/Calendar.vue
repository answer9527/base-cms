<template>
  <div class="calendar_box_out" :style="{'width':width,'height':height}">
      <div class="calendar_name">邮局日历</div>
      <div class="time_btn_group flex-x flex-x-center flex-y-center">
          <span @click="preMon" class="el-icon-arrow-left"></span>
          <span class="time">{{currentYear}}年{{currentMon|add0}}月</span>
          <span @click="nextMon" class="el-icon-arrow-right"></span>
      </div>
      <ul class="calendar_box flex-x">
          <li v-for="(item,index) in weeks" :key="'no'+index" class="calendar_week">
              <span>{{item}}</span>
          </li>
          <li v-for="(item,index) in days" :key="index" class="calendar_block flex-y flex-y-center" :class="{'today':activeMon&&todayDay==item.label}" @click="selectDay(item)">
              <span>{{item.label}}</span>
              <span v-if="item.value>0"></span>
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
        },
        width:{
            type:String,
            default:"240px"
        },
        height:{
            type:String,
            default:"320px"
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
    },
    filters:{
        add0(val){
            return val>=10?val:"0"+val
        }
    }
}
</script>

<style scoped="scoped">
.calendar_box_out{
    background: #FFFFFF;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;

}
.calendar_box_out>.calendar_name{
    /* text-align: center; */
    font-size: 12px;
}
.calendar_box_out>.time_btn_group{
    padding: 15px 0;
}
.calendar_box_out>.time_btn_group>span{
    font-size: 14px;
}
.time_btn_group>span:nth-child(2){
    display: inline-block;
    font-size: 12px;
    padding: 0 30px;
}
.calendar_box{
   /* width: 300px; */
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
}
.calendar_box>li{
    width: 14.28%;
    height:32px;
    text-align: center ;
    

}
.calendar_box>.calendar_week>span{
    font-weight: bold;
    font-size: 12px;
    /* height:32px; */
  
}
.calendar_box>.calendar_block{
    cursor: pointer;
}
.calendar_box>.calendar_block>span:nth-child(1){
    font-size: 10px;
    display: inline-block;
    text-align: center;
    line-height: 18px;
    width: 18px;
    height: 18px;
    margin-bottom:2px;
    color: #000000;
    border-radius: 50%;
}
.calendar_box>li:nth-child(7n+1)>span:nth-child(1){
    color: red;
}
.calendar_box>.calendar_block>span:nth-child(2){
    display: inline-block;
    width: 4px;
    height: 4px;
    background: green;
    border-radius: 50%;

}
.calendar_box>.today>span:nth-child(1){
    color: #FFFFFF!important;
    background: #A288F4;
}
</style>