<template>
  <div>666</div>
</template>

<script>
import {TestModel} from "@/model/test"
export default {
  name:"Dashboard",
  data(){
    return{

    }
  },
  created(){
   
    TestModel.test({}).then(res=>{
      console.log(res)
    })
  }
}
</script>

<style>

</style>