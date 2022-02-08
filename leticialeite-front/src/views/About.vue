<template>
  <div>
    <v-row no-gutters class="about" justify="center">
      <v-col class="pa-10 mt-15">
        <span>SOBRE</span>
        <h1 class="custom__text__title mb-8">LETÍCIA LEITE</h1>
        <p class="custom__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquet amet, massa aenean tortor ullamcorper suscipit cras varius nibh. 
          Etiam fringilla elit sagittis sagittis feugiat viverra volutpat sit. Odio 
          ultrices donec volutpat id. Quis pulvinar proin eget ut ultricies lacus.
        </p>
        <p class="custom__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquet amet, massa aenean tortor ullamcorper suscipit cras varius nibh. 
          Etiam fringilla elit sagittis sagittis feugiat viverra volutpat sit. Odio 
          ultrices donec volutpat id. Quis pulvinar proin eget ut ultricies lacus.
        </p>
      </v-col>
      <figure class="about__item">
      </figure>
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
  
}
</script>
<style scoped>
.about{
  display: grid;
  grid-template-rows: 130vh;
  grid-template-columns: 50vw 50vw;
}
.about__item{
  background-image: url('../assets/img/le.jpeg');
  background-size: cover;
  height: 100%;
}
</style>
