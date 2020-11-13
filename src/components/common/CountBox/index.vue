<template>
  <div class="count_box flex-x flex-x-between flex-y-center">
      <div class="box_left">
          <span class="count_name">累计{{name}}</span>
          <div class="in_count">
              <span>{{value}}</span>
              <span>（{{unit}}）</span>
          </div>
          <span class="add_row">
              今日新增:
              <span class="add_count">+{{value2}}</span>
          </span>
         
      </div>
      <div class="box_right">
          <i :class="icon" class="count_icon"></i>
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
        value:{
            type:Number,
            defautl:0
        },
        value2:{
            type:Number,
            defautl:0
        },       
        unit:{
            type:String
        },
        name:{
            type:String
        },
        icon:{
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
.box_left>.count_name{
    color:#929292;
}
.box_left>.add_row{
    font-size: 12px;
}
.box_left>.add_row>.add_count{
    font-weight: bold;
    color: green;
}
.box_left>.in_count>span:nth-child(1){
    font-size: 30px;
    
}
.count_icon{
    font-size: 40px;
    color: #3963BC;
}
</style>