<template>
  <section class="navigation">
    <ul class="navigation__items">
      <li class="navigation__item" v-for="(content, index) in contents" :key="index">
        <cItem :item="content" :id="index + 1" />
      </li>
    </ul>
  </section>
</template>

<script>
import cItem from "@/components/cItem.vue";

export default {
  name: "cNavigation",
  components: {
    cItem,
  },
};
</script>

<style lang="scss">
.navigation {
  padding: $spacing * 3;
  margin: auto;
  &__items {
    @include Flex(row, center);
    gap: $spacing * 3;
    list-style: none;
  }
  &__item {
    @include Flex(row, center);
    width: $spacing * 3.2;
    height: $spacing * 3.2;
    color: white;
    background-color: $primary-color;
    border-radius: 100%;
    cursor: pointer;
    &:hover {
    }
  }
  @media screen and (min-width: 768px) {
    &__items {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
