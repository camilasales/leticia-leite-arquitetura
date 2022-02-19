<template>
  <div>
    <v-row no-gutters class="about" justify="center">
      <v-col class="pa-10 mt-15 about__text" v-scrollanimation>
        <span>SOBRE</span>
        <h1 class="custom__text__title mb-8">LETÍCIA LEITE</h1>
        <p class="custom__text" v-scrollanimation>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquet amet, massa aenean tortor ullamcorper suscipit cras varius nibh. 
          Etiam fringilla elit sagittis sagittis feugiat viverra volutpat sit. Odio 
          ultrices donec volutpat id. Quis pulvinar proin eget ut ultricies lacus.
        </p>
        <p class="custom__text" v-scrollanimation>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquet amet, massa aenean tortor ullamcorper suscipit cras varius nibh. 
          Etiam fringilla elit sagittis sagittis feugiat viverra volutpat sit. Odio 
          ultrices donec volutpat id. Quis pulvinar proin eget ut ultricies lacus.
        </p>
      </v-col>
      <v-col>
        <v-img src="../assets/img/le.jpeg" class="about__item"></v-img>
      </v-col>
      <!-- <figure class="about__item">
      </figure> -->
      <!-- <v-col >
        <v-img
          lazy-src="../assets/img/le.jpeg"
          src="../assets/img/le.jpeg"
        ></v-img>
      </v-col> -->
    </v-row>
  </div>
</template>
<script>
export default {
  name: "About",
}
</script>
<style lang="scss" scoped>
@import './src/design';
.about{
  display: grid;
  grid-template-rows: 50rem;
  grid-template-columns: 50vw 50vw;
}
.about__text{
  position: static;
}
.about__item{
  /* background-image: url('../assets/img/le.jpeg'); */
  background-size: cover;
  height: 100%;
}
@media (max-width: 900px){
  .about{
    grid-template-columns: 100vw;
  }
  .about__text{
    position: absolute;
    z-index: 2;
  }
  .custom__text{
    // color: $main-white !important;
  }
}
</style>
