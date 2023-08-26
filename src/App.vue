<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "APP",
    meta: {
      title: '',
      titleTemplate: '台灣心血管外科學會 - %s',
    },
    data() {
      return {
        loading: true
      };
    }
};
</script>
