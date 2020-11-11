<template>
  <div>
      <draggable element="ul" v-model="listdata">
            <li v-for="(item,index) in listdata" :key="index">{{item.name}}</li>
      </draggable>

      {{listdata}}
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
    name:"ClassicDraggable",
    data(){
        return{
        listdata:[
            {
            id: 1,
            name: '叶落森1'
            },
            {
            id: 2,
            name: '叶落森2'
            },
            {
            id: 3,
            name: '叶落森3'
            },
            {
            id: 4,
            name: '叶落森4'
            },
            {
            id: 5,
            name: '叶落森5'
            }
        ]

        }
    },
    components:{
        draggable
    }
}
</script>

<style>

</style>