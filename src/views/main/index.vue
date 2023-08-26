<template>
  <div id="app">
    <navbar is="navbar" />
    <news is="news" />
    <calendar is="calendar" />
    <about is="about" />
    <bottom is="bottom" />
  </div>
</template>

<script>
import navbar from "./components/navbar";
import news from "./components/news";
import calendar from "./components/calendar";
import about from "./components/about";
import bottom from "./components/bottom";

export default {
  components: {
    navbar,
    news,
    calendar,
    about,
    bottom
  }
};
</script>

<style scoped>
@import "../../assets/css/index.css";
@import "../../assets/css/rwd.css";
</style>  
