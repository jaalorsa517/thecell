<template>
  <div class="item">
    <a>
      {{ id }}
    </a>
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
  },
};
</script>

<style></style>
