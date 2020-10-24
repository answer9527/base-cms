<template>
  <div>
      <VueEditor/>
  </div>
</template>

<script>
import VueEditor from "../../../common/VueEditor/VueEditor"
export default {
  name:"classicAdd",
  data(){
    return{

    }
  },
  components:{
      VueEditor
  },
  created(){
    console.log("初始化了classicAdd")
  }
}
</script>

<style>

</style>