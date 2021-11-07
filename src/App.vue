<template>
  <div id="app">
    <c-header />
    <router-view />
    <!-- <footer class="footer">
      <small>
        by
        <a href="https://jaalorsa.com" target="__blank">@jaalorsa</a>
      </small>
    </footer> -->
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

<style lang="scss">
.footer {
  text-align: center;
  padding: 1rem 0;
  margin: auto;
}
</style>
