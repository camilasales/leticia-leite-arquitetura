<template>
  <div class="my-10 mx-2 project__grid">
    <v-row no-gutters v-for="(project, key) in projects" :key="key" >
        <v-img
          :src="project.src"
          class="project__grid__img"
          v-scrollanimation
        >
          <div
            class="project__grid__item"
          >
            <div>
              <span class="mt-16 custom__text__medium">{{project.name}}</span>
            </div>
            <div class="project__grid__item__text">
              <span class="custom__text__small">LETICIA LEITE ARQUITETURA</span>
              <img src="../assets/icons/logo.png">
            </div>
          </div>
        </v-img>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Projects",
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters({
      projects: "projects/listProjects",
    }),
  },
  mounted() {
    this.$store.dispatch("projects/getAllProjects");
  }
}
</script>
<style lang="scss" scoped>
@import './src/design';
.project__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 1rem;
}
.project__grid__img{
  width: 100%;
  height: 50rem;
  object-fit: cover;
}
.project__grid__item{
  background-color: #0000008e; 
  height:100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.custom__text__small{
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 2vh;
}
.project__grid__item__text{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: flex-end;
}

@media (max-width: 1096px){
  .project__grid {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
  .project__grid__img{
    height: 35rem;
  }
}
</style>
