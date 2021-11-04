<template>
  <div class="item">
    <div class="item__content">
      {{ id }}
      <div class="item__bar" v-if="showBar"></div>
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
    showBar: Boolean,
  },
};
</script>

<style lang="scss">
.item {
  &__content {
    position: relative;
  }
  &__bar {
    height: $spacing;
    width: $len;
    background-color: $fourth_color;
    position: absolute;
    top: $len / 5;
    left: $len / 1.7;
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
