<template>
    <div>
      <navbar is="navbar"/>
      <bottom is="bottom"/>
    </div>
</template>

<script>
import navbar from './components/navbar'
import bottom from './components/bottom'

export default {
  components:{
    navbar,
    bottom
  }
}
</script>

<style scoped>
@import '../../assets/css/main.css';
@import '../../assets/css/mainrwd.css';
</style>