<template>
  <div class="drag_block">
      <div class="drag_title">推荐中</div>
      <div  class="drag_ul_list">
        <draggable element="ul" v-model="listdata"  animation="500" @start="onStart" @end="onEnd" :move="onMove">
                <li v-for="(item,index) in listdata" :key="index" class="drag_item flex-x flex-y-center">
                    <span class="type_tag" :class="'type_tag'+item.type">{{item.type|formatClassicType}}</span>
                    <div>
                        {{item.intro}}   ( {{item.author}} 《{{item.title}}》)
                    </div>
                    <div>
                        <span>编辑</span>
                        <span>取消</span>
                    </div>
                </li>
        </draggable>
      </div>


      <!-- {{listdata}} -->
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import {ClassicModel} from "@/model/classic"
export default {
    name:"ClassicDraggable",
    data(){
        return{
        listdata:[

        ]

        }
    },
    components:{
        draggable
    },
    created(){
        ClassicModel.getRecommendList().then(res=>{
            this.listdata = res.data
        })
    },
    methods:{
        onStart(e){
            // console.log(e)
        },
        onEnd(e){
            // return false
            // console.log(e)
        },
        onMove(e,originE){
            console.log(e)
            console.log(originE)
            return false
        }

    },
    filters:{
        formatClassicType(type){
          switch (type) {
            case 100:
              return "电影"
              break;
            case 200:
              return "音乐"
              break;
            case 300:
              return "诗句"
              break;
            case 400:
              return "文章"
              break;
            case 500:
              return "故事"
              break;
            default:
              return "杂记"
              break;
          }
      },
    } 
}
</script>

<style scoped="scoped">
.drag_block{
    background: #FFFFFF;
    border-radius: 10px;
    padding:5px 0;
    box-sizing: border-box;
}
.drag_title{
    padding: 14px 20px;
    font-weight: bold;
    font-size: 14px;
    border-bottom: 1px solid #F2F2F2;
}
.drag_ul_list{
    overflow-y:scroll ;
    height: 500px;
    margin-right: 4px;
    box-sizing: border-box;
}
.drag_ul_list::-webkit-scrollbar {
    width:0px;    
    /*height: 4px;*/
}
.drag_ul_list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
.drag_ul_list::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);

}
.drag_item{
    padding: 20px 0;
    margin: 0 20px;
    border-bottom: 1px solid #F2F2F2;
    cursor: pointer;
}
.drag_item>.type_tag{

    font-size: 11px;
    padding: 2px 8px;
    border-radius: 10px;
    margin: 0 6px;
}
.drag_item>.type_tag100{
    border: 1px solid #ff4d4f;
    background: #ffeded;
    color: #ff4d4f;
}
.drag_item>.type_tag200{
        border: 1px solid #13ce66;
    background: #e7faf0;
    color: #13ce66;
}
.drag_item>.type_tag300{
    color: #909399;
    background: #f4f4f5;
     border: 1px solid #909399;
}
.drag_item>.type_tag400{
    color: #3963bc;
    background: #E6F9F4;
     border: 1px solid #3963bc;
}
.drag_item>.type_tag500{
    color: #e6a23c;
    background: #fdf6ec;
     border: 1px solid #e6a23c;
}
.drag_item>.type_tag600{
    color: #409eff;
    background: #ecf5ff;
    border: 1px solid #409eff;
}
</style>