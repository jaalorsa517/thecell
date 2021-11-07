<template>
  <section class="cell">
    <div class="cell__img">
      <map name="cell">
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
          text: "",
          link: "#",
          showModal: false,
        },
        {
          name: "golgi",
          coords: [470, 210, 30],
          title: "Complejo de Golgi",
          text: "",
          link: "#",
          showModal: false,
        },
        {
          name: "endoplasmatico",
          coords: [230, 150, 30],
          title: "Endoplasmático",
          text: "",
          link: "#",
          showModal: false,
        },
        {
          name: "mitocondria",
          coords: [246, 380, 30],
          title: "Mitocondria",
          text: "",
          link: "#",
          showModal: false,
        },
        {
          name: "peroxisoma",
          coords: [281, 440, 10],
          title: "Peroxisoma",
          text: "",
          link: "#",
          showModal: false,
        },
        {
          name: "lisosomas",
          coords: [350, 456, 10],
          title: "Lisosomas",
          text: "",
          link: "#",
          showModal: false,
        },
        {
          name: "nucleo",
          coords: [333, 274, 40],
          title: "Núcleo",
          text: "",
          link: "#",
          showModal: false,
        },
        {
          name: "centríolo",
          coords: [188, 310, 30],
          title: "Centríolo",
          text: "",
          link: "#",
          showModal: false,
        },
        {
          name: "citoesqueleto",
          coords: [173, 451, 30],
          title: "Citoesqueleto",
          text: "",
          link: "#",
          showModal: false,
        },
        {
          name: "ribosoma",
          coords: [532, 342, 10],
          title: "Ribosoma",
          text: "",
          link: "#",
          showModal: false,
        },
      ],
    };
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
    width: 600px;
    height: 600px;
    background-size: cover;
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
}
</style>
