<template>
  <div class="ma-10 project__grid">
    <v-row no-gutters v-for="(project, key) in projects" :key="key">
      <v-card
        class="mx-auto ma-2 project__grid__card rounded-0"
        max-width="490"
      >
        <v-img
          :src="project.src"
          style="background-size: cover;"
          height="650"
        >
          <div
            class="project__grid__item"
          >
            <div>
              <span class="mt-16 custom__text__medium">{{project.name}}</span>
            </div>
            <div class="project__grid__item__text">
              <span class="mt-16 custom__text__small">LETICIA LEITE ARQUITETURA</span>
              <img src="../assets/icons/logo.png">
            </div>
          </div>
        </v-img>
      </v-card>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Projetos",
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
  },
}
</script>
<style lang="scss" scoped>
@import './src/design';
.project__grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.project__grid__card{
  display: flex;
  flex-direction: row;
  align-items: center;
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
}
.project__grid__item__text{
  @extend .project__grid__card;
  justify-content: space-between;
  align-items: end;
}

@media (min-width: 2550px)
{
  .project__grid{
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media (max-width: 2074px)
{
  .project__grid{
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 1555px)
{
  .project__grid{
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 1096px)
{
  .project__grid{
    grid-template-columns: 1fr;
  }
}
</style>
