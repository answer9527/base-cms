<template>
  <div class="pie_out flex-y">
      <div ref="pieChart" style="width:100%;height:500px"></div>
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
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(this.$refs['pieChart'])
            ClassicModel.getClassicTypeSortTotal().then(res=>{
                let legend_data = res.data.map(ele=>{
                    return ele.name
                })
                myChart.setOption({
                    title: { 
                        text: '文艺类型分布情况',
                        subtext: 'Classic',
                        left: 'center',
                        // top:0
                    },
                    legend: {
                        // orient: 'vertical',
                        // top: 'middle',
                        bottom: 10,
                        left: 'center',
                        data: legend_data
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c}篇 ({d}%)'
                    },
                    series: [{
                        name: '数量',
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

<style scoped="scoped">
.pie_out{
    padding: 20px;
}
</style>