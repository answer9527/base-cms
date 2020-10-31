<template>
  <div class="classic_detail">
      <div class="first_row flex-x flex-x-between">
          <div class="first_left">
              <div class="detail_title">{{classic_detail.title}}</div>
              <div class="detail_author"> —— {{classic_detail.author||'未知'}}</div>
          </div>
      </div>
      <div class="detail_intro">
          <div class="intro_left_box">
              <img src="../../../assets/img/intro_left.png" alt="" class="intro_left">
          </div>
          <div class="intro_txt">{{classic_detail.intro}}</div>
          <div class="intro_right_box">
              <img src="../../../assets/img/intro_right.png" alt="" class="intro_right">
          </div>
      </div>
      <div class="detail_content">
          <div v-html="classic_detail.content"></div>
      </div>
  </div>
</template>

<script>

export default {
    name:"classicDetail",
    data(){
        return{
            
        }
    },
    computed:{

    },
    props:{
        classic_detail:{
            type:Object
        }
    },
    methods:{

    }
}
</script>

<style scoped="scoped">


.first_left{
    flex: 1;
}
.first_right{
    width: 40px;
    height:40px;
    background: url(../../../assets/img/music_icon.png) no-repeat;
    background-position: center;
    background-size: contain;
}
.first_left>.detail_title{
    width: 100%;
    font-size:20px;
    font-weight: bold;
    text-align: center;
}
.first_left>.detail_author{
  text-align: right;
  padding:5px 90px 5px 0;
  box-sizing: border-box;
  font-size: 14px;
}
.detail_intro{
    padding: 25px 0 10px 0;
    border-top: 1px solid #cccccc;
    display: flex;
    flex-direction:row;
    justify-content: center;
}

.intro_left_box{
    position: relative;
}
.intro_left{
  width: 20px;
  height: 20px;
  position: relative;
  top: -10px;
}
.intro_txt{
  padding: 0 40px;
  box-sizing: border-box;
  text-align: center;
}
.intro_right_box{
  position: relative;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
  
}
.intro_right{
  width: 20px;
  height:20px;
  position: relative;
  bottom: -5px;
}

</style>