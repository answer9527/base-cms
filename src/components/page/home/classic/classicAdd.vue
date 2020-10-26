<template>
  <div>
      <VueEditor :height="600" @input="EditorInput"/>
  </div>
</template>

<script>
import VueEditor from "../../../common/VueEditor/VueEditor"
export default {
  name:"classicAdd",
  data(){
    return{
        content:""
    }
  },
  components:{
      VueEditor
  },
  created(){
    
  },
  methods:{
    // 编辑器输出的内容
      EditorInput(val){
        this.content = val
      }
  }
}
</script>

<style>

</style>