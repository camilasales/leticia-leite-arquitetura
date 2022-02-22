<template>
  <div class="mb-10">
    <v-card class="overflow-hidden rounded-0">
      <v-app-bar
        fixed
        elevate-on-scroll
        class="menu"
      >
        <v-row no-gutters class="menu__items" v-if="$vuetify.breakpoint.mdAndUp">
          <v-col cols="2" class="menu__logo">
            <img src="../assets/logo.png">
          </v-col>
          <v-col :cols="$vuetify.breakpoint.mdAndDown ? '9' : '12'" :class="$vuetify.breakpoint.mdAndDown ? 'text-end' : 'text-center'">
            <a class="menu__items__nav" @click="changePage('Home')">INICIO</a>
            <a class="menu__items__nav" @click="changePage('Projects')">PROJETOS</a>
            <a class="menu__items__nav" @click="changePage('About')">SOBRE</a>
            <a class="menu__items__nav" @click="changePage('Contact')">CONTATO</a>
          </v-col>
        </v-row>
        <v-row no-gutters class="menu__items" v-else>
          <v-col cols="2" class="menu__logo">
            <img src="../assets/icons/logo.png">
          </v-col>
          <v-col class="text-end">
            <v-app-bar-nav-icon @click="dialog = true" color="#ffffff"></v-app-bar-nav-icon>
          </v-col>
        </v-row>
      </v-app-bar>
      <v-dialog fullscreen v-model="dialog">
        <v-card style="opacity: 0.9;" class="d-flex flex-column align-center justify-center">
          <v-card-title>
            <div>
              <v-btn
                class="mt-10 mr-10"
                absolute
                top
                right
                icon
                @click="dialog = !dialog"
              >
                <v-icon>close</v-icon>
              </v-btn>
            </div>
          </v-card-title>
          <v-card-text class="d-flex flex-column align-center justify-center">
            <a class="menu__items__dialog" @click="changePage('Home')">INICIO</a>
            <a class="menu__items__dialog" @click="changePage('Projects')">PROJETOS</a>
            <a class="menu__items__dialog" @click="changePage('About')">SOBRE</a>
            <a class="menu__items__dialog" @click="changePage('Contact')">CONTATO</a>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    changePage(routerName) {
      this.$router
        .push({
          name: routerName
        })
        .catch(() => {});
      this.dialog = false;
    },
  },
}
</script>
<style lang="scss" scoped>
@import './src/design';
.menu{
  background-color: $main-grey-green !important;
}
.menu__logo{
  display: flex;
  margin-top: 10px;
  position: absolute;
}
.menu__items{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu__items__nav{
  cursor: pointer;
  margin: 0 25px 0 25px;
  text-decoration: none;
  letter-spacing: 2px;
  color: $main-white;
}
.menu__items__dialog{
  text-decoration: none;
  margin: 20px;
  font-size: 2rem;
  color: $main-grey-green;
}
</style>