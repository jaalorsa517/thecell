<template>
  <section class="navigation">
    <button @click="onClick">Click</button>
    <ul class="navigation__items">
      <li class="navigation__item" v-for="(content, index) in contents" :key="index">
        <cItem :item="content" :id="index + 1" :showBar="a[index]" />
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
  data() {
    return {
      n: 0,
      a: [false, false, false, false],
    };
  },
  methods: {
    onClick() {
      this.a.splice(this.n, 1, true);
      console.log(this.a);
      this.n++;
    },
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
    width: $len;
    height: $len;
    color: white;
    background-color: $primary-color;
    border-radius: 100%;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    &__items {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
