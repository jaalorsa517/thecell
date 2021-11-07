<template>
  <section class="cell">
    <div class="cell__img">
      <map name="cell" v-if="!isMobile">
        <area v-for="(area, id) in areas" :key="id" shape="circle" :coords="area.coords.join(',')" :info="area.name" :alt="area.title" />
      </map>
      <img usemap="#cell" :src="require('@/assets/cell.jpg')" alt="cell" @click="onClickImage" />
      <div v-for="(area, id) in areas" :key="id">
        <i
          :class="['cell__pointer', area.name]"
          :x="area.coords[0]"
          :y="area.coords[1]"
          :info="area.name"
          :title="area.title"
          @mouseenter="onEvent($event, id)"
          ref="pointer"
          v-html="pointer"
          v-if="!isMobile"
        ></i>
        <card class="cell__card" :data="area" :coord="getCoord(id)" v-if="area.showModal" />
      </div>
    </div>
  </section>
</template>

<script>
import svg from "@/assets/svgs";

export default {
  components: {
    card: () => import("@/components/cCard.vue"),
  },
  data() {
    return {
      pointer: svg.plusS,
      areaSelected: null,
      coord: null,
      areas: [
        {
          name: "membrana",
          coords: [256, 50, 30],
          title: "Membrana",
          text: "Está formada por una capa bilipidica y proteinas, su función principal es ser una barrera de protección...",
          link: "#membrana",
          showModal: false,
        },
        {
          name: "golgi",
          coords: [470, 210, 30],
          title: "Complejo de Golgi",
          text: "Se caracteriza por una estructura membranosa en forma de láminas y de vesículas cerca del núcleo...",
          link: "#golgi",
          showModal: false,
        },
        {
          name: "endoplasmatico",
          coords: [230, 150, 30],
          title: "Endoplasmático",
          text: "Es un complejo membranoso, el cual se caracteriza por dos estructuras...",
          link: "#endoplasmatico",
          showModal: false,
        },
        {
          name: "mitocondria",
          coords: [246, 380, 30],
          title: "Mitocondria",
          text: "Se caracteriza por su estructura globular, formada por unidades membranosa, su función es ayudar a...",
          link: "#mitocondrias",
          showModal: false,
        },
        {
          name: "peroxisoma",
          coords: [281, 440, 10],
          title: "Peroxisoma",
          text: "Son pequeñas vesículas de tamaño 0.3 a 1.5 micrómetros de diámetro, los cuales cumplen una función...",
          link: "#peroxisomas",
          showModal: false,
        },
        {
          name: "lisosomas",
          coords: [350, 456, 10],
          title: "lisosomas",
          text: "son vesículas membranosas que en su interior contienen una gran variedad de enzimas, como...",
          link: "#lisosomas",
          showModal: false,
        },
        {
          name: "nucleo",
          coords: [333, 274, 40],
          title: "Núcleo",
          text: "Pueden ser redonda o alargada, oxilan entre 5 a 10mn, contiene el material genético, el cual está...",
          link: "#nucleo",
          showModal: false,
        },
        {
          name: "centríolo",
          coords: [188, 310, 30],
          title: "Centríolo",
          text: "Se caracteriza por ser estructuras cilíndricas, formados por microtúbulos, localizadas cerca...",
          link: "#centriolo",
          showModal: false,
        },
        {
          name: "citoesqueleto",
          coords: [173, 451, 30],
          title: "Citoesqueleto",
          text: "Es una red o estructura de la célula, formado por filamentos de proteinas clasificados por:...",
          link: "#citoesqueleto",
          showModal: false,
        },
        {
          name: "ribosoma",
          coords: [532, 342, 10],
          title: "Ribosoma",
          text: "Tienen un tamaño aproximado de 30mn de diámetro, los cuales contienen diversas proteínas como el...",
          link: "#ribosomas",
          showModal: false,
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth < 768;
    },
  },
  methods: {
    onEvent(e, id) {
      this._rebootModal();
      this.areas[id].showModal = true;
    },
    getCoord(id) {
      return {
        x: this.areas[id].coords[0],
        y: this.areas[id].coords[1],
      };
    },
    onClickImage() {
      this._rebootModal();
    },
    _rebootModal() {
      this.areas.forEach((area) => {
        area.showModal = false;
      });
    },
  },
  mounted() {
    const pointers = document.querySelectorAll(".cell__pointer") || [];
    pointers.forEach((pointer) => {
      pointer.style.top = `${pointer.getAttribute("y")}px`;
      pointer.style.left = `${pointer.getAttribute("x")}px`;
    });
  },
};
</script>

<style lang="scss">
.cell {
  @include Flex(column, center, flex-start);
  position: relative;
  &__img {
    background-size: cover;
    max-width: max-content;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__pointer {
    @include Flex(column);
    width: 20px;
    height: 20px;
    padding: 2px;
    position: absolute;
    font-weight: bold;
    color: rgb(31, 29, 29);
    cursor: pointer;
    background-color: #c72020;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (min-width: 768px) {
    &__img {
      width: 600px;
      height: 600px;
    }
  }
}
</style>
