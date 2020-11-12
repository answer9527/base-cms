<template>
  <div>
      <div ref="pieChart" style="width:100%;height:376px"></div>
  </div>
</template>

<script>
import echarts from "echarts"
import {ClassicModel} from "@/model/classic"
export default {
    name:"ClassicPie",
    data(){
        return{

        }
    },
    mounted(){
        this.drawLine()
    },
    methods: {
        drawLine(){
            console.log(this.dataList)
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(this.$refs['pieChart'])
            ClassicModel.getClassicTypeSortTotal().then(res=>{
                myChart.setOption({
                    title: { 
                        text: '文章的类型分布',
                        subtext: '纯属虚构',
                        left: 'center'
                    },
                    tooltip: {},
                    series: [{
                        name: '销量',
                        type: 'pie',
                        data: res.data
                    }]
                });
            })
            // 绘制图表

        }
    }

}
</script>

<style>

</style>