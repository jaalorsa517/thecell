<template>
  <section class="refer">
    <h5>Contenido</h5>
    <ul class="refer__container">
      <li v-for="(cref, id) in crefs" :key="id">
        <span>{{ cref.sub }}</span>
        <a :href="cref.link" target="_blank">{{ cref.link }}</a>
      </li>
    </ul>
    <h5>Imágenes</h5>
    <ul class="refer__container">
      <li v-for="(crefImg, id) in crefsImg" :key="id">
        <span>{{ crefImg.sub }}</span>
        <a :href="crefImg.link" target="_blank">{{ crefImg.link }}</a>
      </li>
    </ul>
    <h5>Vídeos</h5>
    <ul class="refer__container">
      <li v-for="(crefVid, id) in crefsVid" :key="id">
        <span>{{ crefVid.sub }}</span>
        <a :href="crefVid.link" target="_blank">{{ crefVid.link }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      crefs: [
        {
          sub: "Cárdenas Romero, R. y Ojea, N. (2014). Biología celular y humana. Bogotá, Colombia: Ecoe Ediciones. Recuperado de ",
          link: "https://elibro.net/es/ereader/biblioibero/70442?page=74",
        },
        {
          sub: "Galindo, A., Avendaño, R., & Angulo, A. (2012). Biología básica. Dirección General de Escuelas Preparatorias de la Universidad Autónoma de Sinaloa. p.80 ",
          link: "https://www.guao.org/sites/default/files/biblioteca/Biologia%20Basica.pdf",
        },
        {
          sub: "Quintanar Stephano, J. L. (2010). Neurofisiología básica. Aguascalientes, Mexico: Universidad Autónoma de Aguascalientes. Recuperado de ",
          link: "https://elibro.net/es/ereader/biblioibero/40724?page=19",
        },
      ],
      crefsImg: [
        {
          sub: "Imagen 1: Célula eucariota. Imagen tomada de ",
          link: "https://www.turbosquid.com/3d-models/cell-animal-3d-model/867779",
        },
        {
          sub: "Imagen 2:Mecanismo de endocitosis. Imagen tomada de ",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tipos_de_endocitosis.svg/412px-Tipos_de_endocitosis.svg.png",
        },
        {
          sub: "Imagen 3.Proceso de exocitosis. Imagen tomada de ",
          link: "https://3.bp.blogspot.com/-vuT1qZX3I7w/VHTOTCDb4-I/AAAAAAAAAJg/PU3y956hvtw/s1600/Imagen5.jpg",
        },
        {
          sub: "Imagen 4: Célula procariota. Imagen tomada de: Raquel Parada Puig ",
          link: "https://www.lifeder.com/celula-procariota/",
        },
      ],
      crefsVid: [
        {
          sub: "Pérez, David (2015 diciembre 30). La teoría celular (vídeo). Youtube ",
          link: "https://www.youtube.com/watch?v=ZqpxTM-GQ5U",
        },
        {
          sub: "Portal Educar (2016 marzo 23). Biología la célula (vídeo). Youtube ",
          link: "https://youtu.be/JLNokMENF6s",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.refer {
  @include Flex(column, center, flex-start);
  gap: $spacing;
  margin: $spacing * 1.5;
  &__container {
    @include Flex(column, center, flex-start);
    gap: $spacing * 1.5;
    margin: $spacing $spacing * 3;
    padding: $spacing * 3;
    border-radius: $spacing;
    box-shadow: $shadow;
    word-wrap: anywhere;
    border-top: 10px solid $secondary_color;
  }
}
</style>
