<template>
  <section class="authors">
    <h2>
      Trabajo:
      <span fwn>La célula</span>
    </h2>
    <ul class="authors__inte" cp="doble">
      <h5>Integrantes:</h5>
      <li class="authors__people" v-for="auth in auths" :key="auth.id" cp="triple">
        <h6>
          Nombre:
          <span fwn>{{ auth.name }}</span>
        </h6>
        <h6>
          ID:
          <span fwn>{{ auth.id }}</span>
        </h6>
      </li>
    </ul>
    <section class="authors__section" cp="doble">
      <h5>
        Programa:
        <span fwn>Psicología virtual</span>
      </h5>
      <h5>
        Institución
        <span fwn>Coorporación universitaria Iberoamericana</span>
      </h5>
      <h5>
        Materia:
        <span fwn>Biología</span>
      </h5>
      <h5>
        Docente:
        <span fwn>David Buitrago</span>
      </h5>
      <h5>
        Fecha:
        <span fwn>Noviembre 7 del 2021</span>
      </h5>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      auths: [
        { name: "Alejandra Medieta Gomez ", id: "1023947448" },
        { name: "Aurys Estela González Sarmiento ", id: "100104749" },
        { name: "Liseth Vanessa Sepúlveda Sánchez", id: "100105436" },
        { name: "Lury Yibell Díaz Chica ", id: "100105042" },
      ],
    };
  },
};
</script>

<style lang="scss">
.authors {
  @include Flex(column, flex-start, flex-start);
  gap: $spacing;
  margin: $spacing $spacing * 3;
  padding: $spacing * 3;
  border-top: 10px solid $secondary_color;
  border-radius: $spacing;
  box-shadow: $shadow;
  &__section {
    @include Flex(column, flex-start, flex-start);
    gap: $spacing;
  }
  &__people {
    @include Flex(row);
    gap: $spacing;
  }
  &__inte {
    word-wrap: anywhere;
  }
}
</style>
