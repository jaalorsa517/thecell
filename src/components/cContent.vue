<template>
  <section class="content">
    <h1>La célula</h1>
    <section class="content__section">
      <p>
        Se define como una unidad anatómica, estructural y funcional de un organismo viviente, cumpliendo las funciones básicas como: Respiración,
        nutrición, excitabilidad, reproducción, entre otras funciones que ayudan a mantener y permanecer la vida celular. En este caso se exceptúan
        los virus, los cuales son microorganismos acelulares, cubierto por una membrana llamada ácido nucleico, cumple diferentes funciones lo que lo
        diferencia de las células. Algunos organismos son unicelulares, que se componen por una sola célula, como lo son: bacterias y protozoos y
        pluricelulares, compuesto por 2 o más células: como lo son, los seres humanos.
      </p>
      <p>Existen dos tipos de células que hacen la diferencia en los seres vivos, las cuales son:</p>
    </section>
    <section class="content__section" id="eucariota">
      <p>
        <b>1. Eucariotas:</b>
        La célula está compuesta por diferentes estructuras tanto morfológicas como funcional, las cuales son:
      </p>
      <cell class="content__cell" />
      <section class="content__section" id="membrana">
        <p>
          <b>1. Membrana Plasmática:</b>
          Está formada por una capa bilipidica y proteinas, su función principal es ser una barrera de protección limítrofe extra-celular y el
          transporte de sustancias selectivas de pequeñas moléculas a través de ella.
        </p>
        <p>
          La capa bilipidica como su nombre lo indica está conformada por lípidos ( fosfolípidos y fosfatidilcolina) y (bi) que son dos extremos
          hidrofílica (soluble en agua) localizado tanto a nivel externa como interna a nivel de la célula e hidrofóbica (no se disuelve en agua),
          localizada en el interior de la membrana. (Quintanar, 2011, p.16)(
          <a href="https://elibro.net/es/ereader/biblioibero/40724?page=14">https://elibro.net/es/ereader/biblioibero/40724?page=14</a>
          )
        </p>
        <p>La proteína de la membrana, se clasifica en diferentes funciones:</p>
        <p>
          <b>* Estructurales:</b>
          Cruzan la membrana de lado a lado (integrales) y extra e intracelular (periféricas) por lo que no atraviesan la célula, su función es actuar
          como enzimas, antígeno, molécula y adhesión celular.
        </p>
        <p>
          <b>* Transportador:</b>
          Ayuda al transporte de sustancias, permitiendo el paso de iones, agua y moléculas intra o extra celular. Existen 3 tipos de transporte de
          sustancias como:
        </p>
        <section class="content__section">
          <p>
            <u>1. Difusión simple:</u>
            Atraviesan la membrana sin ningún tipo de restricción en este caso las sustancias liposolubles
          </p>
          <p>
            <u>2. Proteínas bomba:</u>
            Se necesita Energía para el transporta iones a través de la membrana.
          </p>
          <p>
            <u>3. Proteínas canal:</u>
            No necesita energía, por ende es un medio de transporte pasivo, el cual al estar activados los canales, permitiendo el paso de iones,
            dentro o fuera de la célula. La entrada y salida de sustancias, se realiza mediante la endocitosis (introduce sustancias a la célula),
            exocitosis (expulsa ciertas moléculas extra-celulares).
          </p>
        </section>
        <section class="content__section">
          <p>
            <b>* Endocitosis</b>
            Permite el ingreso de moléculas mediante el mecanismo de:
          </p>
          <section class="content__section">
            <p>
              <u>A) Pinocitosis:</u>
              Introduce sustancias liquidas o pequeñas moléculas a la célula.
            </p>
            <p>
              <u>B) Fagocitosis:</u>
              Captura moléculas sólidas y de gran tamaño.
            </p>
            <p>
              <u>C) Mediada por receptor:</u>
              Une moléculas especificas y luego las lleva al interior de la célula.
            </p>
          </section>
          <section class="content__img">
            <img :src="require('@/assets/endocitosis.png')" alt="endocitosis" />
            <small>Figura 1.Mecanismo de endocitosis</small>
            <small>
              Imagen tomada de:
              <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tipos_de_endocitosis.svg/412px-Tipos_de_endocitosis.svg.png">
                https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tipos_de_endocitosis.svg/412px-Tipos_de_endocitosis.svg.png
              </a>
            </small>
          </section>
        </section>
        <section class="content__section">
          <p>
            <b>* Exocitosis</b>
            Ayuda a exportar ciertas sustancias o moléculas extra-celular, por medio de mecanismos
          </p>
          <section class="content__section">
            <p>
              <u>A) Continuo:</u>
              Como su nombre lo indica, es constante su secreción o expulsión.
            </p>
            <p>
              <u>B) Regulada:</u>
              Las moléculas o sustancias, son almacenadas por un tiempo hasta que cumplen un tiempo determinado para ser expulsadas cuando halla una
              señal fisiológica.
            </p>
            <p>
              <u>C) Vía endosómica:</u>
              Se expulsa entre los mismos organelos.
            </p>
          </section>
          <section class="content__img">
            <img :src="require('@/assets/exocitosis.jpg')" alt="exocitosis" />
            <small>Figura 2.Proceso de exocitosis</small>
            <small>
              Imagen tomada de:
              <a href="https://3.bp.blogspot.com/-vuT1qZX3I7w/VHTOTCDb4-I/AAAAAAAAAJg/PU3y956hvtw/s1600/Imagen5.jpg">
                https://3.bp.blogspot.com/-vuT1qZX3I7w/VHTOTCDb4-I/AAAAAAAAAJg/PU3y956hvtw/s1600/Imagen5.jpg
              </a>
            </small>
          </section>
        </section>
        <p>
          <b>* Enzimas:</b>
          Activan ciertas reacciones químicas sobre la superficie de la membrana. Gran variedad de sus funciones depende del sitio en donde se
          encuentre.
        </p>
        <p>
          <b>* Receptores:</b>
          Reconoce e interactua con sustancias extracelulares, como lo son: Neurotrasmisores, hormonas, entre otros, generando una respuesta interna a
          la célula.
        </p>
      </section>
      <section class="content__section">
        <p>
          <b>2. Citoplasma:</b>
          Constituido por una sustancia gelatinosa llamado citosol, la cual es la matriz celular que contiene los organelos e inclusiones. Se
          encuentra fuera del núcleo pero adentro de la membrana nuclear
        </p>
      </section>
      <section class="content__section" id="nucleo">
        <p>
          <b>3. Núcleo:</b>
          Pueden ser redonda o alargada, oxilan entre 5 a 10mn, contiene el material genético, el cual está constituido por cromosomas, los cuales se
          forman por génes y ácido desoxirribonucleico (ADN), en este radica la información hereditaria y ayudando a gobernar las acciones de la
          célula a través de su emisario ácido ribonucleico (RNA).
          <a href="https://elibro.net/es/ereader/biblioibero/40724?page=14">https://elibro.net/es/ereader/biblioibero/40724?page=14</a>
        </p>
        <p>
          El núcleo, se encuentra rodeado por una membrana llamada envoltura nuclear, la que protege el ADN y separa el núcleo del resto de la célula.
        </p>
      </section>
      <section class="content__section">
        <p>
          <b>4. Núcleolo:</b>
          En la mayoría de las células existe un núcleolo, formado por RNA, el cual ayuda a la formación de ribosomas que implica la síntesis
          proteínica, distribuyéndose por el citoplasma. Se reconoce como un pequeño punto oscuro dentro del núcleo.
        </p>
      </section>
      <section class="content__section" id="citoesqueleto">
        <p>
          <b>5. Citoesqueleto:</b>
          Es una red o estructura de la célula, formado por filamentos de proteinas clasificados por: micro-filamentos (se encuentran en mayor
          cantidad en el tejido muscular), filamento intermedio (son más elásticos y resistentes, se encuentran en su mayoría en células epiteliales,
          axonales y vasos sanguíneos) y microtúbulos de tubulina (formados por tubos rígidos que se disponen entre si, se encuentran normalmente en
          los flagelos de los espermatozoides, traquea y trompas de falopio), estos a su vez ayudan al transporte de la célula.
        </p>
        <p>
          En general estos ayudan a dar forma estructural a la célula, soporte de organelos, movimiento, contracción, división, entre otros. Se
          interconectan entre la membrana plasmática y núcleo.
        </p>
      </section>
      <section class="content__section" id="golgi">
        <p>
          <b>6. Complejo de Golgi</b>
          Se caracteriza por una estructura membranosa en forma de láminas y de vesículas cerca del núcleo, su función es ayudar a la síntesis y
          maduración de proteinas, para ser empleados por la célula o para su exportación. Trabaja muy en conjunto con el retículo endoplasmático.
        </p>
      </section>
      <section class="content__section" id="endoplasmatico">
        <p>
          <b>7. Retículo endoplasmático</b>
          Es un complejo membranoso, el cual se caracteriza por dos estructuras:
        </p>
        <section class="content__section">
          <p>
            <u>* Granular o Rugoso:</u>
            Se nombra por su estructura tubular, formado por ribosomas, adoptando una forma rugosa, su función es sintetizar las proteinas.
          </p>
          <p>
            <u>*A granular o Liso:</u>
            Se nombra por su estructura tubular, carece de ribosomas por lo que su forma es lisa, su función es la síntesis de esteroides y
            desintoxicación celular.
          </p>
        </section>
      </section>
      <section class="content__section" id="centriolo">
        <p>
          <b>8. Centríolos</b>
          Se caracteriza por ser estructuras cilíndricas, formados por microtúbulos, localizadas cerca del núcleo y constituidas por proteinas llamada
          tubulina, participa en la división celular.
        </p>
      </section>
      <section class="content__section" id="mitocondrias">
        <p>
          <b>9. Mitocondrias</b>
          Se caracteriza por su estructura globular, formada por unidades membranosa, su función es ayudar a proveer energía química a la célula,
          obtenida por los alimentos, además ayuda al metabolismo de los azúcares, proteinas y lípidos, estas tienen su propio material genético lo
          que les proporciona replicarse así mismas.
        </p>
      </section>
      <section class="content__section">
        <p>
          <b>10. Cilios y flagelos:</b>
          Son semejantes a la composición de los centríolos, la función de los cilios, ayuda a la movilidad (moco) en la superficie celular de
          epitelios y en los flagelos, ayuda a la locomoción, particularmente en espermatozoides.
        </p>
      </section>
      <section class="content__section" id="peroxisomas">
        <p>
          <b>11. Peroxisomas</b>
          Son pequeñas vesículas de tamaño 0.3 a 1.5 micrómetros de diámetro, los cuales cumplen una función de desintoxicar la célula de productos
          metabólicos como el peróxido de hidrógeno, se localizan en su gran mayoría en a nivel hepático y renal.
        </p>
      </section>
      <section class="content__section" id="lisosomas">
        <p>
          <b>12. Lisosomas</b>
          “son vesículas membranosas que en su interior contienen una gran variedad de enzimas, como las proteasas, que rompen a las proteínas,
          glucosidasas, que actúan sobre los azúcares, desoxirribonucleicos y ribonucleicos, que degradan a los ácidos nucleicos, y la lisozima, que
          es anti-bacteriana”.(Quintanar Stephano, J. L. (2010) Neurofisiología básica. Aguascalientes, Mexico: Universidad Autónoma de
          Aguascalientes. Recuperado de https://elibro.net/es/ereader/biblioibero/40724?page=19. )
        </p>
        <p>Es llamada así como el sistema digestivo de la célula.</p>
        <p>Ambas cumplen una función en común que es: digerir y eliminar sustancias extrañas.</p>
      </section>
      <section class="content__section" id="ribosomas">
        <p>
          <b>13. Ribosomas</b>
          Tienen un tamaño aproximado de 30mn de diámetro, los cuales contienen diversas proteínas como el RNA. Unos se encuentran libres en el
          citoplasma y otros se encuentran en el retículo endoplasmático rugoso. Su función principal es la síntesis de las proteínas.
        </p>
      </section>
    </section>
    <section class="content__section" id="procariota">
      <p>
        <b>2. Procariotas:</b>
        El término griego de su nombre es pro (antes de) y carion (almendra o núcleo) denominando así a la carencia del núcleo celular. Es más pequeña
        que la eucariota y además, es más sencilla en su estructura. Su tamaño promedio es de 1 a 10 micrómetros. Contienen un citoplasma con una gran
        cantidad de ribosomas, una sola cadena de ADN (material genético) y una membrana plasmática circundante. (Galindo, Avendaño, & Angulo, 2012,
        p. 80). Tanto en algunas células eucariotas como procariotas poseen flagelo para su desplazamiento.
      </p>
      <section class="content__img">
        <img :src="require('@/assets/celula_procariota.jpg')" alt="célula procariota" />
        <small>
          Imagen tomada de: Raquel Parada Puig,
          <a href="https://www.lifeder.com/celula-procariota/">https://www.lifeder.com/celula-procariota/</a>
          , 04 de noviembre 2021
        </small>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  components: {
    cell: () => import("@/components/cCell.vue"),
  },
};
</script>

<style lang="scss">
.content {
  @include Flex(column, flex-start, flex-start);
  gap: $spacing * 2;
  padding: $spacing * 2 0;
  line-height: 1.5;
  width: 100%;
  small {
    align-self: flex-start;
  }
  a {
    word-break: break-word;
  }
  &__section {
    @include Flex(column, flex-start, flex-start);
    gap: $spacing * 1.5;
  }
  &__img {
    @include Flex(column);
    margin: auto;
    max-width: max-content;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__cell {
    align-self: center;
  }
}
</style>
