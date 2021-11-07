<template>
  <div class="card">
    <h5 class="card__title">{{ data.title }}</h5>
    <p class="card__text">{{ data.text }}</p>
    <a class="card__link" :href="data.link">Saber más</a>
  </div>
</template>

<script>
export default {
  props: { data: { default: () => ({ title: "", text: "", link: "" }) }, coord: { default: () => ({ x: 0, y: 0 }) } },
  methods: {},
  mounted() {
    const card = document.querySelector(".card");
    card.style.top = this.coord.y + "px";
    card.style.left = this.coord.x + "px";
  },
};
</script>

<style lang="scss">
.card {
  width: auto;
  max-width: 250px;
  max-height: 350px;
  padding: $spacing * 1.5;
  position: absolute;
  border-top: 10px solid $primary_color;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: $shadow;
  background-color: white;
  z-index: 100;
  animation: show-in 800ms;
  &__title,
  &__text {
    pointer-events: none;
  }
  &__title,
  &__text,
  &__link {
    user-select: none;
  }
}
</style>
