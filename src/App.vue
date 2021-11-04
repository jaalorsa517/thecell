<template>
  <div id="app">
    <c-header />
    <router-view />
  </div>
</template>

<script>
import cHeader from "@/components/cHeader.vue";

export default {
  name: "App",
  components: {
    cHeader,
  },
};
</script>

<style lang="scss"></style>
