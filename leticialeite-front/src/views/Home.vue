<template>
  <div class="home__grid">
    <v-row class="home__grid__item" no-gutters>
      <v-col cols="3" class="text-center custom__text__title" v-scrollanimation>
        LETICIA LEITE <br>
        ARQUITETURA
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="space-around">
      <v-col cols="12" class="d-flex justify-center align-center">
        <hr class="line" v-scrollanimation>
      </v-col>
      <v-col cols="10" sm="10" md="6" class="text-center">
        <h1 class="custom__text__title" v-scrollanimation>LETÍCIA LEITE ARQUITETURA</h1>
        <p class="my-10 custom__text" v-scrollanimation>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquet amet, massa aenean tortor ullamcorper suscipit cras varius nibh. 
          Etiam fringilla elit sagittis sagittis feugiat viverra volutpat sit. Odio 
          ultrices donec volutpat id. Quis pulvinar proin eget ut ultricies lacus.
        </p>
        <v-btn class="custom__btn__pink custom__btn__large" @click="goToProjects()" v-scrollanimation>CONHECER</v-btn>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center">
        <hr class="line" v-scrollanimation>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Home",
  methods:{
   goToProjects(){
    this.$router.push('/projetos/detalhes');
   }
  }
}
</script>
<style lang="scss" scoped>
@import './src/design';
.home__grid{
  display: grid;
  grid-template-rows: 95vh 130vh;
  margin-bottom: 40px;
}
.home__grid__item{
  display: flex;
  align-items: center;
  background-color: $main-grey-green-fifith;
}
.line{
  border: none;
  border-left:  2px solid $main-pastel-pink;
  border-radius: 4px;
  height: 15vh;
  width:  5px; 
}

</style>