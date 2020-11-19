<template>
  <div>
      <div class="mask"></div>
      <img src="../../../assets/img/loading.gif" alt="" class="loading_img" >
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    name:"LoadingBox",
    data(){
        return{

        }
    },
    computed:{
        // ...mapState(['isLoading'])
    }
}
</script>

<style scoped="scoped">

.loading_img{
  width: 620px;
  height:620px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 999999;
  border-radius: 6px;

}


</style>