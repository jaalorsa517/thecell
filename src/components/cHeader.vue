<template>
  <header class="header">
    <div class="header__logo"></div>
    <nav class="header__nav">
      <ul class="header__items">
        <li class="header__item" v-for="(item, key) in items" :key="key">
          <router-link :to="item.link">{{ item.text }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "cHeader",
  data() {
    return {
      items: [
        {
          text: "Inicio",
          link: "/",
        },
        {
          text: "Referencias",
          link: "/ref",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.header {
  @include Flex(column, center, center);
  padding: $spacing;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  background-color: $primary_color;
  color: white;
  &__items {
    @include Flex();
    gap: $spacing;
    list-style: none;
  }
  &__item {
    a {
      text-decoration: none;
      color: inherit;
      &:active {
        color: inherit;
      }
      &:hover {
        color: $third_color;
      }
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
