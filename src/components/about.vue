<template>
  <section>
    <ul>
      <li v-for="(ref, id) in refs" :key="id">
        <span>{{ ref.sub }}</span>
        <span>{{ ref.lin }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      refs: [{ link: "", sub: "" }],
    };
  },
};
</script>

<style></style>
