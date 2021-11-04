<template>
  <section class="home">
    <router-view class="home__nav" name="nav"></router-view>
    <router-view class="home__content" name="content"></router-view>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
.home {
  @include Flex(column);
  &__nav {
    flex-grow: 0;
  }
  &__content {
    flex-grow: 3;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
}
</style>
