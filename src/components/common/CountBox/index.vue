<template>
  <div class="count_box flex-x flex-x-between">
      <div>
          <div>
              <span>{{count}}</span>
              <span>（{{unit}}）</span>
          </div>
          <div>{{intro}}</div>
      </div>
      <div>
          <i :class="iconClass" class="count_icon"></i>
      </div>
  </div>
</template>
 
<script>
export default {
    name:"CountBox",
    data(){
        return{

        }
    },
    props:{
        count:{
            type:Number,
            defautl:0
        },
        unit:{
            type:String
        },
        intro:{
            type:String
        },
        iconClass:{
            type:String
        }
    }
}
</script>

<style scoped='scoped'>
.count_box{
    background: #FFFFFF;
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
    padding:40px 16px;
    box-shadow: 0 2px 4px rgba(0,21,41,.08);
}
.count_icon{
    font-size: 40px;
    color: #3963BC;
}
</style>