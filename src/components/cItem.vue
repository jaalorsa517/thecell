<template>
  <router-link :class="['item', showActive.active ? 'active' : '']" :to="{ path: item.to, query: { id: id - 1 } }">
    <div class="item__content">
      {{ id }}
      <div class="item__bar" v-if="showActive.bar"></div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "cItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    showActive: Object,
  },
};
</script>

<style lang="scss">
.item {
  @include Flex(row, center);
  width: $len;
  height: $len;
  color: white;
  background-color: $primary-color;
  border-radius: 100%;
  cursor: pointer;
  transition: background-color 1s 500ms;
  text-decoration: none;
  &.active {
    background-color: $secondary_color;
  }
  &__content {
    position: relative;
    user-select: none;
  }
  &__bar {
    height: $spacing;
    width: $len + 5;
    background-color: $secondary_color;
    position: absolute;
    top: $len / 5;
    left: $len / 1.8;
    animation: slideInLeftX 1s;
  }
  @media screen and (min-width: 768px) {
    &__bar {
      width: $spacing;
      height: $len;
      top: 130%;
      left: 0;
      animation-name: slideInLeftY;
    }
  }
}
</style>
