<template>
  <div class="contact__grid">
    <v-row class="contact__form" v-scrollanimation>
      <v-col cols="12" class="text-center" >
        <h2 class="custom__text__subtitle">ENVIE SUA MENSAGEM</h2>
      </v-col>
      <v-form ref="form" class="elevation-4">
        <v-row :no-gutters="$vuetify.breakpoint.mdAndUp ? false : true">
          <v-col sm="12" md="6" lg="6" cols="12">
            <span>Nome:*</span>
            <v-text-field
              v-model="data.name"
              color="#494949"
              outlined
              required
              :rules="rules.nameRules"
              validate-on-blur
            />
          </v-col>
          <v-col sm="12" md="6" lg="6" cols="12">
            <span>Telefone ou Celular:</span>
            <v-text-field
              v-model="data.phone"
              v-mask="['(##) #####-####', '(##) ####-####']"
              v-masked="false"
              color="#494949"
              outlined
            />
          </v-col>
        </v-row>
        <v-row :no-gutters="$vuetify.breakpoint.mdAndUp ? false : true">
          <v-col sm="12" md="6" lg="6" cols="12">
            <span>E-mail:*</span>
            <v-text-field
              color="#494949"
              outlined
              required
              v-model="data.email"
              :rules="rules.emailRules"
              validate-on-blur
            />
          </v-col>
          <v-col sm="12" md="6" lg="6" cols="12">
            <span>Assunto:*</span>
            <v-text-field
              v-model="data.about"
              color="#494949"
              outlined
              required
              :rules="rules.aboutRules"
              validate-on-blur
            />
          </v-col>
        </v-row>
        <v-col cols="12" class="px-0">
          <span>Mensagem:*</span>
          <v-textarea
            v-model="data.communication"
            outlined
            color="#494949"
            :rules="rules.communicationRules"
            validate-on-blur
          />
        </v-col>
        <v-alert
          outlined
          type="success"
          text
          v-if="alert"
        >
          Sua mensagem foi enviada :)
        </v-alert>
        <v-col
          cols="12"
          align="start"
          class="ma-0 pa-0"
        >
          <v-btn
            :block="$vuetify.breakpoint.mdAndUp ? false : true"
            :loading="loading"
            class="custom__btn__pink custom__btn__large"
            text
            @click="sendMessage()"
          >
            ENVIAR
          </v-btn>
        </v-col>
      </v-form>
    </v-row>
  </div>
</template>

<script>
import { mask, masked } from 'vue-the-mask'
export default {
  name: "Contact",
  directives: {
    mask,
    masked,
  },
  data() {
    return {
      alert:false,
      loading: false,
      data:{
        name:"",
        email:"",
        phone:"",
        about:"",
        communication: "",
      },
      rules: {
        phoneRules: [
          (v) => !!v || 'Por favor preencha o telefone.',
          (v) => {
            v += ''
            return v.length > 8 || 'O telefone deve ter mais de 9 números'
          },
        ],
        nameRules: [(v) => !!v || 'Por favor preencha o Nome'],
        emailRules: [
           (v) => !!v || 'Por favor preencha o E-mail',
            (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail inválido'
        
        ],
        communicationRules: [(v) => !!v || 'Por favor preencha a Menssagem'],
        aboutRules: [(v) => !!v || "Por favor digite o assuunto "],
      },
    }
  },
  methods: {
    sendMessage() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.data.phone = this.removeMask(this.data.phone);
        this.$store
        .dispatch("sendEmail/sendMessage", this.data)
        .then(() => {
         this.clear();
          this.alert = true;
          setTimeout(() => {
            this.alert = false;
          }, 4000);
          this.loading = false;
        });
      }
    },
    removeMask(value) {
      return value.replace(/\D/g, '')
    },
    clear() {
      this.data = {
        name:null,
        email:null,
        phone:null,
        about:null,
        communication:null,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
@import './src/design';
.contact__grid {
  display: grid;
  grid-template-rows: 55rem 5rem;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.contact__form{
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact__form > :last-child{
  width: 50vw;
  padding: 50px;
  justify-content: center;
}
@media screen and (max-width: 1096px){
  .contact__grid {
    grid-template-rows: 65rem 5rem;
  }
  .contact__form{
    height: 60rem;
  }
  .contact__form > :last-child{
    width: 90vw;
    padding: 25px;
  }
}
</style>
