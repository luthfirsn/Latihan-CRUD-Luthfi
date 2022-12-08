<template>
  <div >
    <Delete></Delete>
    <Copyright></Copyright>
   
  </div>
</template>

<script>

import Delete from '../components/DeleteForm.vue'
import Copyright from '../components/CopyrightComponent'
export default {
  name:"DetailPage",

  components: {
    
    Delete,
    Copyright
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#parentDiv {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#mobileLegend {
  border: solid 1px black;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 10px;
  padding-top: 10px;
  padding: 5px
}
</style>