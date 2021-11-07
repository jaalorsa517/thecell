<template>
  <section class="navigation">
    <ul class="navigation__items">
      <li class="navigation__item" v-for="(content, index) in contents" :key="index">
        <cItem :item="content" :id="index + 1" :showActive="getState(index)" />
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
    getState(index) {
      if (index > 0 && this.state[index - 1].active) {
        this.state[index].active = this.contents[index].match.includes(this.$route.fullPath);
        this.state[index - 1].bar = this.contents[index].match.includes(this.$route.fullPath);
      }
      return this.state[index];
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
  position: sticky;
  top: 60px;
  padding: $spacing 0;
  background-color: white;
  width: 100%;
  z-index: 1000;
  &__items {
    @include Flex(row, center);
    gap: $spacing * 3;
    list-style: none;
  }
  @media screen and (min-width: 768px) {
    width: auto;
    padding: $spacing * 3;
    &__items {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
