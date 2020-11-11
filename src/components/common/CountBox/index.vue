<template>
  <div class="count_box flex-x flex-x-between flex-y-center">
      <div class="box_left">
          <div class="in_count">
              <span>{{count}}</span>
              <span>（{{unit}}）</span>
          </div>
          <span>{{intro}}</span>
      </div>
      <div class="box_right">
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
    padding:20px;
    box-shadow: 0 2px 4px rgba(0,21,41,.08);
}
.box_left>.in_count>span{
    color: #3963BC;
}   
.box_left>.in_count>span:nth-child(1){
    font-size: 30px;
    
}
.count_icon{
    font-size: 40px;
    color: #3963BC;
}
</style>