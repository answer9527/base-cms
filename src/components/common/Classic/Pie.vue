<template>
  <div>
      <div ref="pieChart" style="width:100%;height:376px"></div>
      55
  </div>
</template>

<script>
import echarts from "echarts"
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
            // 绘制图表
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
                    data: [
                        {value: 335, name: '电影'},
                        {value: 310, name: '音乐'},
                        {value: 234, name: '诗句'},
                        {value: 135, name: '文章'},
                        {value: 1548, name: '故事'},
                        {value: 1548, name: '随记'}
                    ]
                }]
            });
        }
    }

}
</script>

<style>

</style>