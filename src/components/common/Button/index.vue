<template>
  <div :class="type" class="button_box">
      <button :style="{'fontSize':size,'padding':padding}">
          <slot></slot>
      </button>
  </div>
</template>

<script>
export default {
    name:"hButton",
    data(){
        return{

        }
    },
    props:{
        "type":{
            type:String,
            default:"primary"
        },
        "size":{
            type:String,
            default:"16px"
        },
        "padding":{
            type:String,
            default:"10px 40px"
        }
    }
}
</script>

<style scoped="scoped">
.button_box{
    display: inline-block;
}
button {
  border: 0;
  background: none;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  outline: none;
  box-sizing: border-box;
}
.primary>button{
    color: #409EFF;
}
.success>button{
    color: #67C23A;
}
.waring>button{
    color: #E6A23C;
}
.danger>button{
    color: #F56C6C;
}
.info>button{
    color: #909399;
}

button::before,button::after{
    box-sizing: border-box;
    position: absolute;
    content: "";
    border: 1.5px solid transparent;
    width: 0;
    height: 0;
}
button::before{
    top: 0;
    left: 0;
}
button::after{
    bottom: 0;
    right: 0;
}
button:hover::before,button:hover::after{
    width: 100%;
    height: 100%;

}
button:hover::before{

    transition: width 0.3s ease-out,height 0.3s ease-out 0.3s;
}

.primary>button:hover::before{
    border-top-color: #409EFF;
    border-right-color: #409EFF;
}
.success>button:hover::before{
    border-top-color: #67C23A;
    border-right-color: #67C23A;
}
.waring>button:hover::before{
    border-top-color: #E6A23C;
    border-right-color: #E6A23C;
}
.danger>button:hover::before{
    border-top-color: #F56C6C;
    border-right-color: #F56C6C;
}
.info>button:hover::before{
    border-top-color: #909399;
    border-right-color: #909399;
}


button:hover::after{
   
    /* transition:border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s,height 0.3s ease-out 1s; */
    transition:width 0.3s ease-out,height 0.3s ease-out 0.3s;
}
.primary>button:hover::after{
    border-bottom-color: #409EFF;
    border-left-color: #409EFF;
}

.success>button:hover::after{
    border-bottom-color: #67C23A;
    border-left-color: #67C23A;
}
.waring>button:hover::after{
    border-bottom-color: #E6A23C;
    border-left-color: #E6A23C;
}
.danger>button:hover::after{
    border-bottom-color: #F56C6C;
    border-left-color: #F56C6C;
}
.info>button:hover::after{
    border-bottom-color: #909399;
    border-left-color: #909399;
}



</style>