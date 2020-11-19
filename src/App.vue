<template>
  <div id="app">

    <router-view/>
    <transition name="fader">
      <Loading v-if="isLoading"/>
    </transition>
   
  </div>
</template>

<script>
import Loading from "./components/common/Loading/index"
import {mapState} from "vuex"
export default {
  name: 'App',
  components:{
    Loading
  },
  computed:{
    ...mapState(["isLoading"])
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  height: 100%;
  width: 100%;
}
.fader-enter,
.fader-leave-active {
  opacity: 0;
}
.fader-enter-active {
  transition: opacity 1s;
}

</style>
