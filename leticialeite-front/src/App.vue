<template>
  <v-app id="app" class="ma-0 pa-0">
    <mainMenu class="ma-0 pa-0"></mainMenu>
      <router-view />
    <div class="navbar-fixed-bottom ma-0 pa-0">
      <mainFooter></mainFooter>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import mainMenu from './components/mainMenu.vue'
import mainFooter from './components/mainFooter.vue'

export default Vue.extend({
  name: "App",
  components:{
    mainMenu,
    mainFooter
  },
  data: () => ({
    //
  }),
});
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');
$body-font-family: 'Dosis';
#app {
  @import './src/design';
  font-family: 'Dosis', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
