<template>
  <div id="app">
    
    <router-view/>
    <TheHeader/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
export default {
  components:{
    TheHeader
  }
}
</script>

<style lang="scss">


</style>
