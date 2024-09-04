

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
  <!--   <button @click="onClickDateNow($event)" >Data di oggi</button>
    <button @click="onClickChangeColor($event)" >CambiaColore</button>
 -->
    <GraphRecap/>
    <GraphLine/>
    <GraphChartsRow/>
    <CardExtended/>
  </main>
</template>

<script >
// import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import CinappiWorld from './components/CinappiWorld.vue'
import GraphLine from './components/GraphLine.vue';
import GraphRecap from './components/GraphRecap.vue';
import GraphChartsRow from './components/GraphChartsRow.vue';
import CardExtended from './components/CardExtended.vue';

export default {
  name: 'App',
  components: {
    CinappiWorld,
    TheWelcome,
    CardExtended,
    GraphLine,
    GraphRecap,
    GraphChartsRow
  },
  data() {
    return {
      datetime: null,
      color: true,
    }
  },
  methods: {
    onClickDateNow(e){
      console.log('evento:',e)
      this.datetime = Date.now();
    },
    onClickChangeColor(e){
      this.color=!this.color;
    },
    formattedDatetime(time='1900-01-01 00:00:00') {
      return new Date(time).toLocaleString();
    }
  },
  computed:{
    dataOggi(){
      return this.formattedDatetime(this.datetime);
    }
  },
  mounted(){
    this.datetime = '1988-10-24 00:00:00';
  }
}

</script>

<style scoped>

.red{
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
}
</style>
