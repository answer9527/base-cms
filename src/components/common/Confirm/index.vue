<template>
  <div>
    <div class="mask"></div>
    <transition name="fade">
      <div class="confirm_box" v-if="show">
        <div class="confirm_title">警告</div>
        <div class="confirm_content">{{title}}</div>
        <div class="confirm_btn_group flex-x flex-x-between">
            <div class="cancel_btn" @click="no" >no~</div>
            <div class="confirm_btn" @click="yes">yes</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
    name:"confirmAlert",
    data(){
        return{
          show:false,
          promi:null
        }
    },
    props:{
      title:{
        type:String,
        default:"您是否确认？"
      }
    },
    methods:{
      _create(){
        this.show = true
        let promi = new Promise((resolve,reject)=>{
          this.promi = {resolve,reject}
        })
        return promi
      },
      yes(){
        this.promi.resolve()
        this.remove()
      },
      no(){
        this.promi.reject()
        this.remove()
      }

    }
}
</script>

<style scoped="scoped">
.fade-enter-active{
  /* transition: opacity .5s ease; */
  animation: bounce-in .5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  75%{
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
 .mask{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 99999;
  }
.confirm_box{
  width: 260px;
  height:130px;
  background: #FFFFFF;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 999999;
  border-radius: 6px;
}
.confirm_title{
  font-size: 16px;
  color: #45526b;
  line-height:22px;
  margin-top: 15px;
  padding: 0 12.5px;
  text-align: center;

}
.confirm_content{
  font-size: 14px;
  line-height: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  padding: 0 12.5px;
  color: rgba(89,108,142,1);

}
.confirm_btn_group{
  width: 100%;
  height: 40px;
  border-top: 1px solid #f3f3f3;

}
.cancel_btn{
  font-size: 14px;
  height: 40px;
  width: 129px;
  border-right: 1px solid #f3f3f3;
  text-align: center;
  line-height: 40px;
  color: #999999;
   cursor: pointer;
}
.confirm_btn{
  font-size: 14px;
  flex: 1;
  color: #3963bc;
  height: 40px;
    text-align: center;
  line-height: 40px;
  cursor: pointer;

}
</style>