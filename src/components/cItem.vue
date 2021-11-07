<template>
  <div :class="['item', showActive.active ? 'active' : '']">
    <div class="item__content">
      {{ id }}
      <div class="item__bar" v-if="showActive.bar"></div>
    </div>
  </div>
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
      top: $len / 1.25;
      left: -$len/15;
      animation-name: slideInLeftY;
    }
  }
}
@keyframes slideInLeftX {
  from {
    width: 0;
  }

  to {
    width: $len;
  }
}
@keyframes slideInLeftY {
  from {
    height: 0;
  }

  to {
    height: $len;
  }
}
</style>
