<template>
  <section class="navigation">
    <ul class="navigation__items">
      <li class="navigation__item" v-for="(content, index) in contents" :key="index">
        <cItem :item="content" :id="index + 1" :showActive="state[index]" />
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
      state: [],
    };
  },
  methods: {
    onClick() {
      if (this.n < this.contents.length - 1) {
        this.state[this.n].bar = true;
        this.n++;
        this.state[this.n].active = true;
      }
    },
  },
  created() {
    this.state = this.contents.map(() => ({ active: false, bar: false }));
    this.state[0].active = true;
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
  @media screen and (min-width: 768px) {
    &__items {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
