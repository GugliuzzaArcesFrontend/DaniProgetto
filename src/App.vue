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
    <Card title="Master" cardType="outline" cardColor="primary" label="Main" labelColor="danger">
      <template #tools>
        <ButtonMinimize />
      </template>
      <Card title="Child" cardType="outline" cardColor="danger" label="Urgente" labelColor="danger">
        <template #tools>
          <ButtonMinimize />
          <ButtonMaximize />

          <ButtonClose />
        </template>

        <template #footer>
          <p>Footer</p>
        </template>

        <Infobox icon='fas fa-suitcase' :boxSizes=sizes title="Report contatti" :value="14" iconColor="text-info"
          valueName="Conversioni" :maxValue="32" />

        <Infobox isFull=true :boxSizes=sizes color="bg-danger" title="Titolo infobox2" valueName="Situazione"
          :value="'Cavoli amari'" />

        <Infobox color="bg-info" :boxSizes=sizes title="Segnaposto numero caratteri alto blablablabla"
          valuename="Caratteri" :value="Infinity" />

        <Infobox icon='fas fa-gear' :boxSizes=sizes color="bg-success" title="Altra informativa"
          valueName="Informazione" :value="'Info'" />
      </Card><div class="w-100" />
      <Card title="Child con smallbox" cardColor="info">
        <template #tools><ButtonMinimize /><ButtonMaximize /><ButtonClose /></template>
        <SmallBox :boxSizes=sizes icon='fas fa-suitcase' description="Sopralluoghi" :value="14"
          iconColor="text-success" />
        <SmallBox :boxSizes=sizes icon='fas fa-suitcase' description="Sopralluoghi" :value="14" iconColor="text-info" />
        <SmallBox :boxSizes=sizes icon='fas fa-suitcase' description="Sopralluoghi" :value="14"
          iconColor="text-success" />
        <SmallBox :boxSizes=sizes icon='fas fa-suitcase' description="Sopralluoghi" :value="14"
          iconColor="text-success" />
      </Card><div class="w-100" />
      <CheckList />
    </Card>
  </main>
</template>

<script>


import ButtonClose from './components/ButtonClose.vue';
import ButtonMaximize from './components/ButtonMaximize.vue';
import ButtonMinimize from './components/ButtonMinimize.vue';
import Card from './components/Card.vue';
import CheckList from './components/CheckList.vue';
import Infobox from './components/Infobox.vue';
import SmallBox from './components/SmallBox.vue';
import TableFixedHeader from './components/TableFixedHeader.vue';
import ToolSearchBar from './components/ToolSearchBar.vue';


export default {
  name: 'App',
  components: {
    ButtonClose,
    ButtonMaximize,
    ButtonMinimize,
    Card,
    CheckList,
    Infobox,
    SmallBox,
    TableFixedHeader,
    ToolSearchBar,
  },
  data() {
    return {
      sizes: ['11', 'sm-6', 'lg-3'],
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
