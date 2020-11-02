<template>
  <div class="root_comment">
      <div class="flex-x flex-x-between">
          <div class="root_left">
              <div class="avatar" :style="{'backgroundImage':'url('+userAvatar+')','backgroundSize':'cover','backgroundPosition':'center'}"></div>
              <div class="root_center">
                  <div class="nickname">{{userName}}</div>
                  <div class="createTime">{{$common.formatTime(createTime)}}</div>
              </div>
          </div>
          <div class="root_right del_color"  @click="del_comment(commentId)">删除</div>
          <!-- <div class="root_right replay_color" v-else @click="open_input({'userName':userName,'pid':commentId,'uid_r':commentUid})">回复</div> -->
      </div>
      <div class="comment_content">
          {{content}}
      </div>
      <div class="child_comment_list">
          <div class="child_comment_row  flex-x" v-for="(item,index) in childComment" :key="index">
              <div class="child_left avatar" :style="{'backgroundImage':'url('+item.userAvatar+')','backgroundSize':'cover','backgroundPosition':'center'}"></div>
              <div class="child_right flex-y">
                  <div class="right_top flex-x">  
                    <div class="nickName replay_color">{{item.userName}}</div>
                    <div style="padding:0 0.12rem">回复</div>
                    <div class="nickName replay_color">{{item.userName_r}} : </div>
                    <div class="childContent">{{item.content}}</div>
                  </div>
                  <div class="right_bottom flex-x flex-x-between">
                      <div>{{$common.formatTime(item.createTime)}}</div>
                      <div  class="root_right del_color"  @click="del_comment(item.id)">删除</div>
                      <!-- <div class="root_right replay_color" v-else @click="open_input({'userName':item.userName,'pid':commentId,'uid_r':item.uid})">回复</div> -->
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    name:"Comment",
    data(){
        return{
            
        }
    },
    computed:{
    
    },
    props:{

        commentId:{
            type:Number
        },
        commentUid:{
            type:Number
        },
        userAvatar:{
            type:String
        },
        userName:{
            type:String
        },
        content:{
            type:String
        },
        createTime:{
            type:String
        },
        childComment:{
            type:Array
        }
    },
    created(){
        
    },
    methods:{
        // 打开回复的弹出框
        // open_input(data){
        //     let params = {
        //         "userName":data.userName,
        //         "pid":data.pid,
        //         'uid_r':data.uid_r
        //     }
        //     this.$emit("open_input",params)
        // },
        // 删除评论
        del_comment(commentId){
            let params = {
                "id":commentId
            }
            this.$emit("del_comment",params)
        }
    }
}
</script>
<style scoped="scoped">
.root_comment{
    padding: 10px 0;
    border-bottom: 1px solid #cccccc;
}
.row_one{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.avatar{
    width: 40px;
    height: 40px;
    border-radius: 5px;
}
.root_left{
    display: flex;
    flex-direction: row;
}
.root_center{
    padding: 0 5px;
}
.root_right{
    padding: 0 6px;
    font-size:14px;
    cursor: pointer;
}
.nickName{
    font-size: 14px;
}
.createTime{
    font-size: 12px;
}

.comment_content{
  padding: 5px;
  font-size:14px;
  /* border-bottom: 1px dashed #cccccc; */
}

.child_comment_list{
    padding-left: 20px;
    
}
.child_comment_row:nth-child(1){
    padding-top:15px ;
    border-top: 1px dashed #cccccc;

}
.child_comment_row>.child_right{

    padding: 0 6px;
    flex: 1;
}
.child_right>.right_bottom{
    padding: 5px 0;
   
}
.right_bottom>div{
 font-size:12px;
}
.replay_color{
    color: #295C9D; 
}
.del_color{
    color: #F4516C;
}
</style>