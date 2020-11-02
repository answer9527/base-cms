<template>
  <div class="classic_card_con">
        <li class="classic_card" @mouseenter="hoverIn" @mouseleave="hoverOut">
            <div class="card_top">
              <el-image 
                  class="classic_image"
                  :src="classic.image" 
                  fit="none"
                  :preview-src-list="[classic.image]">
              </el-image>
              <div class="card_tool flex-x flex-x-end">
                  <div class="tool_right">
                  <span class="recommend_tag" v-if="classic.is_recommend">推荐</span>
                  <span class="type_tag">{{classic.type|formatClassicType}}</span>
                  </div>
              </div>
              </div>
              <div class="classic_info">
              <div class="classic_title">{{classic.title}}</div>
              <div class="classic_intro">{{classic.intro}}</div>
              <div class="classic_like-count">
                  <span v-if="classic.like_count">{{classic.like_count}}人喜欢</span>
                  <span v-else>暂无人喜欢</span>
              </div>
              <span class="edit_btn" :class="{'active_edit_btn':hover_active}"  @click="preview"></span>
            </div>
        </li>
  </div>
</template>

<script>
export default {
    name:"ClassicCard",
    data(){
        return{
            hover_active:false
        }
    },
    props:{
        classic:{
            type:Object
        }
    },
    methods:{
      preview(){
          this.$emit("Preview",this.classic.id)
        // this.$router.push("/classic/detail/"+this.classic.id)
      },
      // 鼠标移入
      hoverIn(e){
        this.hover_active = true
      },
      // 鼠标移出
      hoverOut(e){
        this.hover_active = false
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
.classic_card{
  width: 300px;
  margin: 20px;
  
}

.classic_card>.card_top{
  width: 100%;
  height: 300px;
  position: relative;
 
}
.classic_card>.card_top>.card_tool{
    width: 100%;
    padding: 12px 16px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
}
.card_tool>div>span{
    font-size: 12px;
    padding:2px 8px;
     border-radius: 10px;
}


.card_tool>.tool_right>.recommend_tag{
    border: 1px solid #13ce66;
    background-color:#e7faf0 ;
    color: #13ce66;
}
.card_tool>.tool_right>.type_tag{
    border: 1px solid #ff4d4f;
    background-color:#ffeded ;
    color: #ff4d4f;
}
.card_top>.classic_image{
  height: 100%;
  width: 100%;
   border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.classic_card>.classic_info{
   background: #FFFFFF;
  border: 1px solid #cccccc;
  border-top: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 16px;
  box-sizing: border-box;
  position: relative;


}

.classic_card>.classic_info>.classic_title{
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  padding: 8px 0;
    overflow: hidden;
  text-overflow:ellipsis; 
  white-space: nowrap;
}
.classic_card>.classic_info>.classic_intro{
  text-align: center;
  font-size: 12px;
  color: #808695;
  overflow: hidden;
  text-overflow:ellipsis; 
  white-space: nowrap;
}

.classic_card>.classic_info>.classic_like-count{
  text-align: center;
  padding-top: 10px;
}
.classic_card>.classic_info>.classic_like-count>span{
  color: #FF6700;
  font-size: 12px;

  
}
.classic_card>.classic_info>.edit_btn{
  display: inline-block;
  position: absolute;
  bottom: 8px;
  right:0;
  width: 0;
  height: 32px;
  background: url(../../../assets/img/edit_card_icon.png)no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}
.classic_card>.classic_info>.active_edit_btn{
  right: 16px;
  width: 32px;
}

</style>