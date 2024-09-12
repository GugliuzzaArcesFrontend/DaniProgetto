<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper" :class="{
      'green': color,
      'red': !color
    }" >
      <CinappiWorld msg="ciaooooo!" :data="datetime"/>
    </div>

    <div><h1>Datetime: {{ dataOggi }}</h1></div> -->
  </header>

  <main>
    <Card title="Ciao" cardType="outline" cardColor="danger" label="Urgente" labelColor="danger">
      <Infobox icon='fas fa-suitcase' title="Report contatti" :value="14" iconColor="text-danger"
        valueName="Conversioni" :maxValue="32" />

      <Infobox isFull=true color="bg-danger" title="Titolo infobox2" valueName="Situazione" :value="'Cavoli amari'" />

      <Infobox color="bg-info" title="Segnaposto numero caratteri alto blablablabla" valuename="Caratteri"
        :value="Infinity" />

      <Infobox icon='fas fa-gear' color="bg-success" title="Altra informativa" valueName="Informazione"
        :value="'Info'"  />
      <template #tools>
        <ButtonMinimize />

        <ButtonClose />
      </template>

      <template #footer>
        <p>Footer</p>
      </template>
    </Card>
    <SmallBox />

  </main>
</template>

<script>


import ButtonClose from './components/ButtonClose.vue';
import ButtonMinimize from './components/ButtonMinimize.vue';
import Card from './components/Card.vue';
import Infobox from './components/Infobox.vue';
import SmallBox from './components/SmallBox.vue';
import TableFixedHeader from './components/TableFixedHeader.vue';
import ToolSearchBar from './components/ToolSearchBar.vue';


export default {
  name: 'App',
  components: {
    Infobox,
    TableFixedHeader,
    ToolSearchBar,
    Card,
    ButtonMinimize,
    ButtonClose,
    SmallBox
  },
  data() {
    return {
      sizes: ['11', 'sm-5', 'lg-3'],
      datetime: null,
      color: true,
    }
  },
  methods: {
    onClickDateNow(e) {
      console.log('evento:', e)
      this.datetime = Date.now();
    },
    onClickChangeColor(e) {
      this.color = !this.color;
    },
    formattedDatetime(time = '1900-01-01 00:00:00') {
      return new Date(time).toLocaleString();
    }
  },
  computed: {
    dataOggi() {
      return this.formattedDatetime(this.datetime);
    }
  },
  mounted() {
    this.datetime = '1988-10-24 00:00:00';
  }
}

</script>

<style scoped>
/* .red{
  background-color: red;
}

.green{
  background-color: green;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
