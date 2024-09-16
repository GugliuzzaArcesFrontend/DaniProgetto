<template>
  <header>
    <h1 v-show="false" class="text-center">Sempre sia lordato l'innominabile innominato</h1>
  </header>

  <main class="container-fluid row">
    <Card title="Master" cardType="outline" color="primary" label="Main" labelColor="danger">
      <template #tools>
        <ButtonMinimize />
        <ButtonMaximize />
        <ButtonClose />
      </template>

      <Card title="Child" cardType="outline" color="danger" label="Urgente" labelColor="danger">
        <template #tools>
          <ButtonMinimize />
          <ButtonMaximize />
          <ButtonClose />
        </template>

        <Infobox icon='fas fa-suitcase' color="bg-warning" :sizes=sizes title="Report contatti" :value="14"
          iconColor="text-info" valueName="Conversioni" :maxValue="32" />

        <Infobox isFull=true :sizes=sizes color="bg-danger" title="Titolo infobox2" valueName="Situazione"
          :value="'Cavoli amari'" />

        <Infobox color="bg-info" :sizes=sizes title="Segnaposto numero caratteri alto blablablabla"
          valuename="Caratteri" :value="Infinity" />

        <Infobox icon='fas fa-gear' :sizes=sizes color="bg-success" title="Altra informativa"
          valueName="Informazione" :value="'Info'" />
      </Card>
      <div class="w-100" />

      <Card title="Child con smallbox" color="info">
        <template #tools>
          <ButtonMinimize />
          <ButtonClose />
        </template>

        <SmallBox :sizes=sizes color="bg-warning" icon='fas fa-suitcase' description="Sopralluoghi" :value="14"
          iconColor="text-success" />

        <SmallBox :sizes=sizes icon='fas fa-suitcase' description="Sopralluoghi" :value="14" iconColor="text-info" />

        <SmallBox :sizes=sizes icon='fas fa-suitcase' description="Sopralluoghi" :value="14"
          iconColor="text-success" />

        <SmallBox :sizes=sizes icon='fas fa-clipboard' description="Sopralluoghi" :value="14"
          iconColor="text-success" />
      </Card>
      <div class="w-100"></div>
    </Card>

    <CheckList :list="list">
      <template #tools>
        <ButtonMinimize />
        <ButtonMaximize />
        <ButtonClose />
      </template>
    </CheckList>
  </main>
</template>

<script>

import tasks from './assets/mockList.json';

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
      list: tasks
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
